"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "./ThemeToggle";
import EventsCalendar from "./EventsCalendar";

type NavChild = { href: string; label: string };
type NavGroup = { label: string; href?: string; children?: NavChild[] };

// 5 大类收拢: 关于我 / 投资 / AI / 博客 / 合作。福利保留为右侧高亮按钮。
const navGroups: NavGroup[] = [
  {
    label: "关于我",
    children: [
      { href: "/moe", label: "我是谁" },
      { href: "/story", label: "我的故事" },
      { href: "/portfolio", label: "作品集" },
    ],
  },
  {
    label: "投资",
    children: [
      { href: "/etf", label: "ETF 追踪" },
      { href: "/holdings", label: "名人持仓" },
      { href: "/wisdom", label: "智慧文集" },
      { href: "/tools", label: "投资工具箱" },
      { href: "/learn", label: "投资入门" },
    ],
  },
  {
    label: "AI",
    children: [
      { href: "/ai", label: "AI 总览" },
      { href: "/ai/tools", label: "AI 工具" },
      { href: "/ai/prompts", label: "提示词库" },
      { href: "/ai/codex-lab", label: "AI 新手村" },
      { href: "/gallery", label: "AI 画廊" },
    ],
  },
  { label: "博客", href: "/blog" },
  {
    label: "合作",
    children: [
      { href: "/business", label: "业务咨询" },
      { href: "/connect", label: "联系方式" },
      { href: "/nav", label: "常用导航" },
    ],
  },
];

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
      className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);        // 移动端汉堡
  const [hoverGroup, setHoverGroup] = useState<string | null>(null);  // 桌面端 hover 下拉
  const [mobileGroup, setMobileGroup] = useState<string | null>(null); // 移动端折叠

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary/80 backdrop-blur-md border-b border-[rgb(var(--border)_/_var(--border-opacity))]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="font-display text-lg text-t-primary hover:text-accent transition-colors duration-200">
            Harry
          </Link>

          {/* 桌面端 */}
          <div className="hidden md:flex items-center gap-5">
            {navGroups.map((g) =>
              g.children ? (
                <div
                  key={g.label}
                  className="relative"
                  onMouseEnter={() => setHoverGroup(g.label)}
                  onMouseLeave={() => setHoverGroup(null)}
                >
                  <button className="flex items-center gap-1 text-sm text-t-tertiary hover:text-accent transition-colors duration-200">
                    {g.label}
                    <Chevron open={hoverGroup === g.label} />
                  </button>
                  <AnimatePresence>
                    {hoverGroup === g.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 6, scale: 0.97 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 6, scale: 0.97 }}
                        transition={{ duration: 0.14 }}
                        // pt-2 作 hover 桥, 避免 button 与卡片间隙触发 mouseleave
                        className="absolute left-1/2 -translate-x-1/2 top-full pt-2"
                      >
                        <div className="min-w-[150px] bg-card border border-[rgb(var(--border)_/_var(--border-opacity))] rounded-xl shadow-2xl py-2 overflow-hidden">
                          {g.children.map((c) => (
                            <Link
                              key={c.href}
                              href={c.href}
                              className="block px-4 py-2 text-sm text-t-secondary hover:text-accent hover:bg-elevated transition-colors whitespace-nowrap"
                            >
                              {c.label}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={g.href}
                  href={g.href!}
                  className="text-sm text-t-tertiary hover:text-accent transition-colors duration-200"
                >
                  {g.label}
                </Link>
              )
            )}
            <Link
              href="/perks"
              className="text-sm font-medium px-3 py-1 rounded-lg bg-accent/15 text-accent border border-accent/25 hover:bg-accent/25 transition-colors duration-200"
            >
              福利
            </Link>
            <EventsCalendar />
            <ThemeToggle />
          </div>

          {/* 移动端右侧 */}
          <div className="md:hidden flex items-center gap-2">
            <EventsCalendar />
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex flex-col gap-1.5 p-2"
              aria-label="Toggle menu"
            >
              <motion.span animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }} className="block w-5 h-0.5 bg-t-secondary" />
              <motion.span animate={isOpen ? { opacity: 0 } : { opacity: 1 }} className="block w-5 h-0.5 bg-t-secondary" />
              <motion.span animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }} className="block w-5 h-0.5 bg-t-secondary" />
            </button>
          </div>
        </div>
      </div>

      {/* 移动端展开 */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden bg-card border-b border-[rgb(var(--border)_/_var(--border-opacity))]"
          >
            <div className="px-4 py-4 flex flex-col gap-1">
              {navGroups.map((g) =>
                g.children ? (
                  <div key={g.label} className="border-b border-white/[0.04] last:border-0">
                    <button
                      onClick={() => setMobileGroup(mobileGroup === g.label ? null : g.label)}
                      className="flex items-center justify-between w-full py-3 text-t-secondary hover:text-accent transition-colors"
                    >
                      {g.label}
                      <Chevron open={mobileGroup === g.label} />
                    </button>
                    <AnimatePresence>
                      {mobileGroup === g.label && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden"
                        >
                          <div className="flex flex-col gap-3 pl-4 pb-3 pt-1">
                            {g.children.map((c) => (
                              <Link
                                key={c.href}
                                href={c.href}
                                onClick={() => setIsOpen(false)}
                                className="text-sm text-t-tertiary hover:text-accent transition-colors"
                              >
                                {c.label}
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    key={g.href}
                    href={g.href!}
                    onClick={() => setIsOpen(false)}
                    className="py-3 text-t-secondary hover:text-accent transition-colors border-b border-white/[0.04]"
                  >
                    {g.label}
                  </Link>
                )
              )}
              <Link
                href="/perks"
                onClick={() => setIsOpen(false)}
                className="self-start mt-3 text-sm font-medium px-3 py-1 rounded-lg bg-accent/15 text-accent border border-accent/25"
              >
                福利
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
