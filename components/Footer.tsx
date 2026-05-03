import Link from "next/link";

const footerSections = [
  {
    title: "内容",
    links: [
      { href: "/story", label: "我的故事" },
      { href: "/moe", label: "关于我" },
      { href: "/portfolio", label: "作品集" },
      { href: "/gallery", label: "AI 画廊" },
      { href: "/blog", label: "博客" },
    ],
  },
  {
    title: "服务",
    links: [
      { href: "/business", label: "合作业务" },
      { href: "/learn", label: "入门指南" },
      { href: "/connect", label: "联系方式" },
    ],
  },
  {
    title: "工具 & 资源",
    links: [
      { href: "/etf", label: "ETF 追踪" },
      { href: "/tools", label: "投资工具箱" },
      { href: "/perks", label: "专属福利" },
      { href: "/nav", label: "常用导航" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-[rgb(var(--border)_/_var(--border-opacity))] bg-card">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        {/* Link sections */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 mb-10">
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="text-xs font-medium tracking-[0.15em] uppercase text-t-muted mb-4">
                {section.title}
              </h4>
              <ul className="space-y-2.5">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-t-tertiary hover:text-accent transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-[rgb(var(--border)_/_var(--border-opacity))]">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-sm text-t-muted">
              &copy; 2026 凌逸清 / Harry
            </p>
            <p className="text-xs text-t-muted/60 leading-relaxed">
              本站内容仅供参考，不构成任何投资建议。投资有风险，入市需谨慎。
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
