"use client";

import HeroSection from "@/components/HeroSection";
import SkillCard from "@/components/SkillCard";
import ProjectCard from "@/components/ProjectCard";
import BlogCard from "@/components/BlogCard";
import { motion } from "framer-motion";

const skills = [
  { icon: "🤖", title: "AI 创作者", description: "熟练运用 Midjourney、SD 等 AI 工具进行视觉创作" },
  { icon: "📊", title: "MBA", description: "商业思维与战略分析，连接技术与商业价值" },
  { icon: "🔍", title: "行业探索者", description: "持续关注 AI、科技领域的最新趋势与机遇" },
  { icon: "💻", title: "技术爱好者", description: "Web 开发、自动化工具、效率提升" },
];

const featuredProjects = [
  { title: "AI 概念艺术系列", description: "使用 Midjourney 创作的未来城市概念图", tags: ["Midjourney", "概念设计"], image: "" },
  { title: "品牌视觉设计", description: "AI 辅助的品牌视觉识别系统设计", tags: ["设计", "品牌"], image: "" },
  { title: "AI 短片项目", description: "结合多种 AI 工具制作的创意短视频", tags: ["视频", "AI"], image: "" },
];

const latestPosts = [
  { slug: "hello-world", title: "你好，世界！这是我的第一篇博客", excerpt: "欢迎来到我的个人网站！在这篇文章中，我将分享我为什么搭建这个网站。", date: "2026-02-15", tags: ["随笔", "AI"] },
  { slug: "ai-creative-tools", title: "2026年值得关注的AI创作工具", excerpt: "盘点当下最值得关注的AI创作工具，从图像生成到视频制作。", date: "2026-02-10", tags: ["AI", "工具"] },
];

export default function Home() {
  return (
    <>
      <HeroSection />

      {/* Skills section */}
      <section className="py-20 px-4 sm:px-6 max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12"
        >
          关于 <span className="gradient-text">我</span>
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, i) => (
            <SkillCard key={skill.title} {...skill} index={i} />
          ))}
        </div>
      </section>

      {/* Featured works */}
      <section className="py-20 px-4 sm:px-6 max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12"
        >
          精选 <span className="gradient-text">作品</span>
        </motion.h2>
        <div className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory">
          {featuredProjects.map((project, i) => (
            <div key={project.title} className="snap-start shrink-0 w-[320px]">
              <ProjectCard {...project} index={i} />
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <a href="/portfolio" className="text-indigo-400 hover:text-indigo-300 transition-colors text-sm">
            查看全部作品 &rarr;
          </a>
        </div>
      </section>

      {/* Latest blog */}
      <section className="py-20 px-4 sm:px-6 max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12"
        >
          最新 <span className="gradient-text">博客</span>
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {latestPosts.map((post, i) => (
            <BlogCard key={post.slug} {...post} index={i} />
          ))}
        </div>
        <div className="text-center mt-8">
          <a href="/blog" className="text-indigo-400 hover:text-indigo-300 transition-colors text-sm">
            查看全部文章 &rarr;
          </a>
        </div>
      </section>
    </>
  );
}
