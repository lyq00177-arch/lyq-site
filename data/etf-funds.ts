import type { QdiiFund, EtfFund } from "@/types/etf";

// 场外纳斯达克100 QDII（18只）— 含 2026-05-01 快照数据
export const nasdaqFunds: QdiiFund[] = [
  { code: "019524", cCode: "019525", name: "华泰柏瑞纳斯达克100ETF联接(QDII)A", feeRate: 0.65, purchaseLimit: "10元",
    scale: 6.8, ytdReturn: 16.66, oneYearReturn: 28.89, changePct: 0.59, trackError: 1.65, status: "open" },
  { code: "019547", cCode: "019548", name: "招商纳斯达克100ETF联接(QDII)A", feeRate: 0.65, purchaseLimit: "100元",
    scale: 15.8, ytdReturn: 16.22, oneYearReturn: 29.24, changePct: 0.58, trackError: 1.72, status: "open" },
  { code: "539001", cCode: "012752", name: "建信纳斯达克100指数QDIIA", feeRate: 1.0, purchaseLimit: "100元",
    scale: 13.2, ytdReturn: 16.21, oneYearReturn: 29.17, changePct: 0.55, trackError: 2.17, status: "open" },
  { code: "018966", cCode: "018967", name: "汇添富纳斯达克100ETF联接(QDII)A", feeRate: 0.65, purchaseLimit: "100元",
    scale: 11.3, ytdReturn: 15.49, oneYearReturn: 27.86, changePct: 0.58, trackError: 2.08, status: "open" },
  { code: "016452", cCode: "016453", name: "南方纳斯达克100指数(QDII)A", feeRate: 0.65, purchaseLimit: "200元",
    scale: 33.3, ytdReturn: 17.26, oneYearReturn: 29.59, changePct: 0.59, trackError: 1.64, status: "open" },
  { code: "000834", cCode: "008971", name: "大成纳斯达克100指数(QDII)A", feeRate: 1.0, purchaseLimit: "500元",
    scale: 38.8, ytdReturn: 16.76, oneYearReturn: 31.1, changePct: 0.56, trackError: 1.51, status: "open" },
  { code: "019172", cCode: "019173", name: "摩根纳斯达克100指数(QDII)A", feeRate: 0.6, purchaseLimit: "100元",
    scale: 26.1, ytdReturn: 17.66, oneYearReturn: 30.26, changePct: 0.57, trackError: 2.15, status: "open" },
  { code: "270042", cCode: "006479", name: "广发纳斯达克100ETF联接(QDII)", feeRate: 1.0, purchaseLimit: "10元",
    scale: 108.4, ytdReturn: 17.04, oneYearReturn: 30.74, changePct: 0.59, trackError: 1.1, status: "open" },
  { code: "019441", cCode: "019442", name: "万家纳斯达克100指数发起式(QDII)", feeRate: 0.65, purchaseLimit: "50元",
    scale: 5, ytdReturn: 16.86, oneYearReturn: 29.09, changePct: 0.58, trackError: 1.75, status: "open" },
  { code: "040046", cCode: "014978", name: "华安纳斯达克100指数(QDII)", feeRate: 0.8, purchaseLimit: "10元",
    scale: 55.2, ytdReturn: 15.37, oneYearReturn: 30.83, changePct: 0.61, trackError: 2.06, status: "open" },
  { code: "018043", cCode: "018044", name: "天弘纳斯达克100指数(QDII)A", feeRate: 0.6, purchaseLimit: "100元",
    scale: 26.2, ytdReturn: 17.49, oneYearReturn: 30.14, changePct: 0.58, trackError: 1.55, status: "open" },
  { code: "019736", cCode: "019737", name: "宝盈纳斯达克100指数(QDII)A", feeRate: 0.65, purchaseLimit: "100元",
    scale: 6.8, ytdReturn: 17.19, oneYearReturn: 29.16, changePct: 0.58, trackError: 1.55, status: "open" },
  { code: "161130", cCode: "012870", name: "易方达纳斯达克100ETF联接(QDII-LOF)A", feeRate: 0.6, purchaseLimit: "暂停申购",
    scale: 16.1, ytdReturn: 16.58, oneYearReturn: 29.43, changePct: 0.59, trackError: 1.55, status: "suspended" },
  { code: "160213", cCode: "—", name: "国泰纳斯达克100指数(QDII)", feeRate: 1.0, purchaseLimit: "暂停申购",
    scale: 18.6, ytdReturn: 17.58, oneYearReturn: 31.78, changePct: 0.60, trackError: 1.03, status: "suspended" },
  { code: "016055", cCode: "016057", name: "博时纳斯达克100ETF联接(QDII)A", feeRate: 0.65, purchaseLimit: "暂停申购",
    scale: 15.6, ytdReturn: 17.32, oneYearReturn: 30.52, changePct: 0.59, trackError: 1.52, status: "suspended" },
  { code: "016532", cCode: "016533", name: "嘉实纳斯达克100联接(QDII)A", feeRate: 0.6, purchaseLimit: "暂停申购",
    scale: 21.1, ytdReturn: 16.4, oneYearReturn: 29.26, changePct: 0.60, trackError: 1.6, status: "suspended" },
  { code: "015299", cCode: "015300", name: "华夏纳斯达克100ETF联接(QDII)A", feeRate: 0.8, purchaseLimit: "暂停申购",
    scale: 3.8, ytdReturn: 15.74, oneYearReturn: 29.06, changePct: 0.49, trackError: 2.69, status: "suspended" },
  { code: "017091", cCode: "017093", name: "景顺长城纳斯达克科技市值加权ETF联接A", feeRate: 1.0, purchaseLimit: "暂停申购",
    scale: 25.8, ytdReturn: 24.22, oneYearReturn: 43.28, changePct: 0.64, trackError: 3.11, status: "suspended" },
];

// 场外标普500 QDII（8只）
export const sp500Funds: QdiiFund[] = [
  { code: "007191", cCode: "007192", name: "易方达标普500指数(QDII)A", feeRate: 0.6, purchaseLimit: "1000元", status: "open" },
  { code: "050025", cCode: "000369", name: "博时标普500ETF联接(QDII)A", feeRate: 0.8, purchaseLimit: "100元", status: "open" },
  { code: "017685", cCode: "017686", name: "招商标普500指数(QDII)A", feeRate: 0.65, purchaseLimit: "100元", status: "open" },
  { code: "019982", cCode: "019983", name: "富国标普500指数(QDII)A", feeRate: 0.6, purchaseLimit: "100元", status: "open" },
  { code: "017641", cCode: "019305", name: "摩根标普500指数(QDII)A", feeRate: 0.65, purchaseLimit: "100元",
    scale: 36.6, status: "open" },
  { code: "160717", cCode: "—", name: "嘉实标普500ETF联接(QDII)A", feeRate: 0.6, purchaseLimit: "200元", status: "open" },
  { code: "481012", cCode: "013614", name: "工银标普500指数(QDII)A", feeRate: 0.75, purchaseLimit: "100元", status: "open" },
  { code: "018064", cCode: "018065", name: "华夏标普500ETF联接(QDII)A", feeRate: 0.75, purchaseLimit: "暂停申购",
    scale: 3.4, status: "suspended" },
];

// 场内 ETF（16只，交易所交易）— 含 2026-05-01 快照，live 数据从 wise-etf.com/api/etfs 合并
export const etfFunds: EtfFund[] = [
  { code: "159509", name: "景顺长城纳斯达克科技ETF(QDII)", trackingIndex: "纳斯达克科技市值加权", feeRate: 1.0,
    scale: 123.3, ytdReturn: 27.55, marketPrice: 2.396, nav: 2.0219, premium: 18.5, changePct: 0.08, trackError: 1.88 },
  { code: "513100", name: "国泰纳斯达克100ETF", trackingIndex: "纳斯达克100", feeRate: 0.8,
    scale: 167.9, ytdReturn: 16.99, marketPrice: 1.959, nav: 1.8625, premium: 5.18, changePct: -0.81, trackError: 1.07 },
  { code: "159941", name: "广发纳斯达克100ETF", trackingIndex: "纳斯达克100", feeRate: 1.0,
    scale: 297.8, ytdReturn: 16.41, marketPrice: 1.456, nav: 1.3974, premium: 4.19, changePct: -0.34, trackError: 1.03 },
  { code: "159660", name: "汇添富纳斯达克100ETF(QDII)", trackingIndex: "纳斯达克100", feeRate: 0.66,
    scale: 37.7, ytdReturn: 17.24, marketPrice: 2.105, nav: 2.0336, premium: 3.51, changePct: -0.61, trackError: 0.88 },
  { code: "159501", name: "嘉实纳斯达克100ETF(QDII)", trackingIndex: "纳斯达克100", feeRate: 0.61,
    scale: 100.7, ytdReturn: 17.14, marketPrice: 1.808, nav: 1.7481, premium: 3.43, changePct: -0.5, trackError: 0.86 },
  { code: "159696", name: "易方达纳斯达克100ETF(QDII)", trackingIndex: "纳斯达克100", feeRate: 0.63,
    scale: 39.7, ytdReturn: 17.37, marketPrice: 1.791, nav: 1.7323, premium: 3.39, changePct: -0.5, trackError: 0.86 },
  { code: "513300", name: "华夏纳斯达克100ETF(QDII)", trackingIndex: "纳斯达克100", feeRate: 0.8,
    scale: 112.5, ytdReturn: 14.72, marketPrice: 2.386, nav: 2.3141, premium: 3.11, changePct: -0.71, trackError: 2.53 },
  { code: "159513", name: "大成纳斯达克100ETF(QDII)", trackingIndex: "纳斯达克100", feeRate: 1.01,
    scale: 59.7, ytdReturn: 16.5, marketPrice: 1.607, nav: 1.5605, premium: 2.98, changePct: -0.19, trackError: 0.88 },
  { code: "513870", name: "富国纳斯达克100ETF(QDII)", trackingIndex: "纳斯达克100", feeRate: 0.63,
    scale: 20.2, ytdReturn: 17.41, marketPrice: 1.825, nav: 1.7727, premium: 2.95, changePct: -0.54, trackError: 0.86 },
  { code: "513390", name: "博时纳斯达克100ETF(QDII)", trackingIndex: "纳斯达克100", feeRate: 0.69,
    scale: 35.6, ytdReturn: 17.12, marketPrice: 2.145, nav: 2.0877, premium: 2.74, changePct: -0.42, trackError: 0.91 },
  { code: "159659", name: "招商纳斯达克100ETF(QDII)", trackingIndex: "纳斯达克100", feeRate: 0.65,
    scale: 79.3, ytdReturn: 17.42, marketPrice: 2.058, nav: 2.004, premium: 2.69, changePct: -0.44, trackError: 1.08 },
  { code: "513110", name: "华泰柏瑞纳斯达克100ETF", trackingIndex: "纳斯达克100", feeRate: 1.0,
    scale: 41.6, ytdReturn: 16.6, marketPrice: 2.196, nav: 2.1398, premium: 2.63, changePct: -0.5, trackError: 1.04 },
  { code: "159632", name: "华安纳斯达克100ETF(QDII)", trackingIndex: "纳斯达克100", feeRate: 0.8,
    scale: 97.8, ytdReturn: 16.28, marketPrice: 2.167, nav: 2.1127, premium: 2.57, changePct: -0.51, trackError: 1.24 },
  { code: "513500", name: "博时标普500ETF", trackingIndex: "标普500", feeRate: 0.8,
    scale: 223.2, ytdReturn: 13.89, marketPrice: 2.419, nav: 2.3153, premium: 4.48, changePct: -0.04, trackError: 1.07 },
  { code: "159612", name: "国泰标普500ETF(QDII)", trackingIndex: "标普500", feeRate: 0.75,
    scale: 7.9, ytdReturn: 13.74, marketPrice: 1.846, nav: 1.8176, premium: 1.56, changePct: -1.12, trackError: 1.01 },
  { code: "513650", name: "南方标普500ETF(QDII)", trackingIndex: "标普500", feeRate: 0.75,
    scale: 46.8, ytdReturn: 13.82, marketPrice: 1.789, nav: 1.7632, premium: 1.46, changePct: -1.11, trackError: 1.05 },
];

// 纳指100前十大持仓（约占指数约52%，数据来源：Nasdaq官网，每季度再平衡）
export const nasdaqTopHoldings = [
  { symbol: "AAPL",  name: "苹果",   weight: 8.5, color: "#f59e0b" },
  { symbol: "MSFT",  name: "微软",   weight: 8.2, color: "#fb923c" },
  { symbol: "NVDA",  name: "英伟达", weight: 7.8, color: "#34d399" },
  { symbol: "AMZN",  name: "亚马逊", weight: 5.6, color: "#60a5fa" },
  { symbol: "META",  name: "Meta",   weight: 4.9, color: "#a78bfa" },
  { symbol: "GOOGL", name: "谷歌A",  weight: 4.4, color: "#f472b6" },
  { symbol: "GOOG",  name: "谷歌C",  weight: 4.1, color: "#facc15" },
  { symbol: "TSLA",  name: "特斯拉", weight: 3.6, color: "#4ade80" },
  { symbol: "AVGO",  name: "博通",   weight: 3.2, color: "#22d3ee" },
  { symbol: "COST",  name: "好市多", weight: 2.5, color: "#c084fc" },
];

// 标普500前十大持仓（约占指数36%，数据来源：S&P官网，每季度再平衡）
export const sp500TopHoldings = [
  { symbol: "AAPL",  name: "苹果",   weight: 7.1, color: "#f59e0b" },
  { symbol: "MSFT",  name: "微软",   weight: 6.4, color: "#fb923c" },
  { symbol: "NVDA",  name: "英伟达", weight: 5.9, color: "#34d399" },
  { symbol: "AMZN",  name: "亚马逊", weight: 4.2, color: "#60a5fa" },
  { symbol: "META",  name: "Meta",   weight: 2.9, color: "#a78bfa" },
  { symbol: "GOOGL", name: "谷歌A",  weight: 2.4, color: "#f472b6" },
  { symbol: "GOOG",  name: "谷歌C",  weight: 2.2, color: "#facc15" },
  { symbol: "BRK.B", name: "伯克希尔", weight: 1.8, color: "#fb7185" },
  { symbol: "AVGO",  name: "博通",   weight: 1.7, color: "#22d3ee" },
  { symbol: "LLY",   name: "礼来",   weight: 1.6, color: "#818cf8" },
];

// 指数发展里程碑
export const nasdaqMilestones = [
  { year: "1971", event: "纳斯达克交易所成立，全球首个全电子化股票交易所" },
  { year: "1985", event: "纳斯达克100指数正式发布，追踪100家最大非金融公司" },
  { year: "1994", event: "首只追踪纳指100的美国共同基金上市" },
  { year: "1999", event: "互联网泡沫顶峰，指数触历史高点4816点" },
  { year: "2003", event: "科技股崩溃触底，较高点最大回撤约83%" },
  { year: "2012", event: "完全收复互联网泡沫失地，创历史新高" },
  { year: "2020", event: "新冠暴跌后迅速反弹，科技股引领复苏" },
  { year: "2023", event: "ChatGPT点燃AI浪潮，纳指全年大涨逾50%" },
  { year: "2024", event: "英伟达市值突破3万亿美元，成为全球最大公司之一" },
];

export const DATA_SNAPSHOT_DATE = "2026-05-01";
