// 名人持仓半自动一键更新
// 用法: node update-holdings.mjs        (dry-run, 只打印变更摘要, 不写文件)
//       node update-holdings.mjs --write (写回 data/holdings.ts)
//
// 数据源: wise-hold.com/wise-celebrities.js 里的 const CELEB_DATA(18人静态快照, STOCK Act/13F)
// 合并规则(关键):
//   - 只更新 wise 有的 18 人的【会变字段】: holdings 明细 / totalValue / source
//   - 保留本地【增值字段】: category(六分类中文) / bio / nameEn / relatedPosts / quarter / holdingsCount / topNote / title
//   - 本地独有 duan/buffett/munger(wise 无) → 原样不动
//   - 配色用本地 ticker 色板, 不用 wise 的; marketValue/changeVsPrev 对这18人一律 "—"(数据保真铁律: 无每股市值)
//   - 就地替换 investors 数组文本段, 文件头注释/type/SNAPSHOT_DATE 不动
import fs from 'fs';
const ROOT = '/Users/lingyiqing/Projects/lyq-site';
const WISE = 'https://www.wise-hold.com/wise-celebrities.js';
const WRITE = process.argv.includes('--write');
const alias = { ptj: 'tudor', wood: 'cathie' }; // 本地 id → wise id
// private/非上市标的: wise name → 本地整齐合成代码(避免中文当"代码"列 + 防误报变化)。
// 未来 wise 出现新 private 标的会 fallback 到 name, 手动补进此表即可。
const PRIVATE_SYM = { 'Waymo/AI': 'WAYMO', 'WeWork后续': 'WEWORK', '字节跳动': 'BYTE', 'Stripe': 'STRIPE', '困境债务': 'DSTRSD' };

// 括号配平提取数组字面量
function extractArray(src, anchorIdx, startSeq) {
  const lb = src.indexOf('[', src.indexOf(startSeq, anchorIdx)); // 从 startSeq 处找第一个 '[',不跳过它
  let depth = 0;
  for (let i = lb; i < src.length; i++) {
    if (src[i] === '[') depth++;
    else if (src[i] === ']') { depth--; if (depth === 0) return { lb, end: i, text: src.slice(lb, i + 1) }; }
  }
  throw new Error('数组未配平: ' + startSeq);
}

// 1. 拉 wise 数据源
const js = await (await fetch(WISE, { headers: { 'User-Agent': 'Mozilla/5.0' } })).text();
const celeb = new Function('return ' + extractArray(js, js.indexOf('CELEB_DATA'), 'CELEB_DATA').text)();
const byWise = Object.fromEntries(celeb.map(d => [d.id, d]));
console.log(`拉取 wise: ${celeb.length} 人`);

// 2. 解析本地 holdings.ts
const tsPath = ROOT + '/data/holdings.ts';
let ts = fs.readFileSync(tsPath, 'utf8');
const startAnchor = ts.indexOf('investors: Investor[] = [');
const { lb, end, text: invText } = extractArray(ts, startAnchor, '= [');
const inv = new Function('return ' + invText)();

// 3. 本地 ticker 色板 + 兜底调色板
const pal = {};
for (const v of inv) for (const h of v.holdings) if (h.symbol && h.color) pal[h.symbol] = h.color;
const PALETTE = ['#f59e0b','#fb923c','#34d399','#60a5fa','#a78bfa','#f472b6','#facc15','#4ade80','#22d3ee','#c084fc','#fb7185','#818cf8'];
let pi = 0;
const pickColor = t => pal[t] || PALETTE[pi++ % PALETTE.length];

// 4. 选择性合并
const changes = [];
let updated = 0;
for (const v of inv) {
  const w = byWise[alias[v.id] || v.id];
  if (!w) { changes.push(`· ${v.id.padEnd(14)} 本地独有, 跳过`); continue; }
  const before = v.holdings.map(h => h.symbol).join(',');
  // 数据保真清洗: "其他"行剥离进 other; private/无ticker标的(—/私)合成 symbol=name 防 key 冲突
  const isOther = (t, n) => /其他|现金|other/i.test(n);
  const validTicker = t => /^[A-Za-z][A-Za-z0-9.\-]*$/.test(t);
  const cleaned = [];
  for (const h of w.holdings) {
    if (isOther(h.ticker, h.name)) continue; // 归入 other(下面按差额算)
    const sym = validTicker(h.ticker) ? h.ticker : (PRIVATE_SYM[h.name] || h.name); // private → 复用本地整齐代码
    cleaned.push({ symbol: sym, name: h.name, weight: h.pct, color: pal[sym] || pickColor(sym), marketValue: '—', changeVsPrev: '—' });
  }
  // key 唯一性断言(DonutChart 用 symbol 当 React key)
  const syms = cleaned.map(h => h.symbol);
  if (new Set(syms).size !== syms.length) throw new Error(`${v.id} 持仓 symbol 不唯一: ${syms.join(',')}`);
  v.holdings = cleaned;
  const sum = cleaned.reduce((s, h) => s + h.weight, 0);
  v.other = { weight: Math.max(0, +(100 - sum).toFixed(2)), marketValue: '—' };
  if (w.total) v.totalValue = w.total;
  if (w.source) v.source = w.source;
  // holdingsCount/quarter/category/bio/relatedPosts/topNote/title/nameEn 保留本地
  const after = v.holdings.map(h => h.symbol).join(',');
  updated++;
  changes.push(`${before === after ? '·' : '✎'} ${v.id.padEnd(14)} ${before === after ? '持仓无变化' : before + '  →  ' + after}`);
}

// 5. wise 侧新增/消失
const localWiseIds = new Set(inv.map(v => alias[v.id] || v.id));
const wiseNew = celeb.filter(d => !localWiseIds.has(d.id)).map(d => d.id);

console.log('\n=== 变更摘要 (✎=持仓有变, ·=无变/跳过) ===');
changes.forEach(c => console.log(c));
if (wiseNew.length) console.log('\n⚠️ wise 新增了我们没有的人(需手动决定是否加入):', wiseNew.join(', '));
console.log(`\n匹配更新 ${updated} 人, 本地独有 ${inv.length - updated} 人`);

// 6. 写回(就地替换数组段 + 更新 SNAPSHOT_DATE)
if (WRITE) {
  const today = new Date().toISOString().slice(0, 10);
  const newArr = JSON.stringify(inv, null, 2);
  let out = ts.slice(0, lb) + newArr + ts.slice(end + 1);
  out = out.replace(/HOLDINGS_SNAPSHOT_DATE\s*=\s*"[^"]*"/, `HOLDINGS_SNAPSHOT_DATE = "${today}"`);
  fs.writeFileSync(tsPath, out);
  console.log(`\n✅ 已写回 data/holdings.ts (SNAPSHOT_DATE=${today})。请 git diff 审查后再提交。`);
} else {
  console.log('\n(dry-run, 未写文件。确认无误后加 --write)');
}
