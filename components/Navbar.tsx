"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "./ThemeToggle";
import EventsCalendar from "./EventsCalendar";

const navLinks = [
  { href: "/moe", label: "关于我" },
  { href: "/learn", label: "学习路线" },
  { href: "/etf", label: "ETF" },
  { href: "/blog", label: "博客" },
  { href: "/gallery", label: "画廊" },
  { href: "/business", label: "业务" },
  { href: "/tools", label: "工具" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary/80 backdrop-blur-md border-b border-[rgb(var(--border)_/_var(--border-opacity))]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="font-display text-lg text-t-primary hover:text-accent transition-colors duration-200">
            Harry
          </Link>

          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-t-tertiary hover:text-accent transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/perks"
              className="text-sm font-medium px-3 py-1 rounded-lg bg-accent/15 text-accent border border-accent/25 hover:bg-accent/25 transition-colors duration-200"
            >
              福利
            </Link>
            <EventsCalendar />
            <ThemeToggle />
          </div>

          <div className="md:hidden flex items-center gap-2">
            <EventsCalendar />
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex flex-col gap-1.5 p-2"
              aria-label="Toggle menu"
            >
              <motion.span
                animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                className="block w-5 h-0.5 bg-t-secondary"
              />
              <motion.span
                animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                className="block w-5 h-0.5 bg-t-secondary"
              />
              <motion.span
                animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                className="block w-5 h-0.5 bg-t-secondary"
              />
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden bg-card border-b border-[rgb(var(--border)_/_var(--border-opacity))]"
          >
            <div className="px-4 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-t-tertiary hover:text-accent transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/perks"
                onClick={() => setIsOpen(false)}
                className="self-start text-sm font-medium px-3 py-1 rounded-lg bg-accent/15 text-accent border border-accent/25"
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
