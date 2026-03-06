"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const chapters = [
  {
    tag: "先说结论",
    content: [
      "我是文科生，不会写代码，没有技术背景。",
      "去年，我写了一篇第一天只有 40 阅读的文章。",
      "第二天早上打开手机，12 万。",
      "这不是成功学故事。我还没成功。这是一个记录。",
    ],
  },
  {
    tag: "Chapter 1",
    title: "十个城市，一张大屏",
    content: [
      "2017 年到 2024 年，我在一家数字营销公司做了八年。",
      "最后的职位是数据部经理。手下三个人，负责十个城市的客户业务数据——河南四个城市、浙江两个、江苏四个。分散在几十张 Excel 里，每个月汇报像在盲人摸象。",
      "我当时提出了一个想法：把这些全部做成一张实时可视化大屏。",
      "不是我写的代码，是我们团队一起跑通的。但那张大屏发布的那天，我盯着屏幕看了很久。十个城市的数据同时跳动，第一次变成了一个整体。",
      "那是我做过最有成就感的事。",
    ],
  },
  {
    tag: "Chapter 2",
    title: "行业消失那年",
    content: [
      "我是数据经理，所以我最早看到那些数字。",
      "百度的广告份额，每个季度都在跌。短视频吃搜索，AI 吃内容，趋势已经写在报表上。",
      "2024 年，公司关了。不只是一家公司——是整个靠百度广告活着的那一代互联网生意，集体进了历史。",
      "我拿着八年经验，出去找工作，发现它在新的招聘市场里几乎换不来什么。那年我 33 岁，南京大学 MBA 刚读完，站在一个需要重新开始的位置上。",
    ],
  },
  {
    tag: "Chapter 3",
    title: "我其实 2019 年就买了服务器",
    content: [
      "这段可能出乎你意料。",
      "2019 年，我买了一台 NAS 家庭存储设备，折腾端口映射、外网访问，鼓捣出了一个对外可以访问的个人网站。",
      "当时完全不懂这意味着什么，就是觉得好玩，想折腾。",
      '后来才明白：那是我第一次知道，"原来你可以自己搭一个东西，让全世界都能访问它"。这个认知，在 2024 年底变得非常重要。',
    ],
  },
  {
    tag: "Chapter 4",
    title: "文科生学 AI 的方式",
    content: [
      "我不参加培训班，不买课，不刷教程视频。",
      "我的方式是：对着 Claude 问，问完动手，遇到问题继续问。",
      "几个月下来，在那台 2019 年就买的 NAS 基础上，搭起了一套完整的 AI 工作流——信息整理、内容辅助、自动化任务，全部跑起来了。没有人手把手教过我一行代码。",
      "一个文科生能走通这条路，说明门槛比你想象的低。",
    ],
  },
  {
    tag: "Chapter 5",
    title: "那段做 AI 内容的日子",
    content: [
      "2025 年 12 月，Google 刚出了新的图像生成工具，我跟着推特上的 AI 社区一起折腾。",
      "一边学一边发。两个帖子到了 5 万阅读，涨了 1000 粉。抖音的 AI 视频转场做了出来，还接了一个商单——很小，但真实变现。",
      '我没觉得这有多厉害，但我记住了一件事：你不需要等"准备好了"再发。',
      "这个网站，也是这么来的。一行代码不会，对着 Claude Code 一步步问出来的。",
    ],
  },
  {
    tag: "Chapter 6",
    title: "我在写的东西",
    content: [
      "公众号「凌逸清的小茶馆」，写投资、写 AI、写经济变局。",
      "不给你推荐股票，不预测大盘涨跌。我做的事情是：把那些你看不懂、但跟你的钱和未来都有关系的信息，翻译成人话。",
      "很多人不知道支付宝里买基金比存银行强，不知道港股打新是什么，不知道 AI 到底能帮自己做什么实际的事。这些问题，我都经历过，也都摸清楚了。",
      "这是我能提供的：不是专家视角，是同行者的翻译。",
    ],
  },
  {
    tag: "尾声",
    content: [
      "33 岁，没辞职，没 all in。",
      "每天下班，书房门一关，服务器在跑，文章在写。",
      "如果你也觉得世界变得太快，手里的钱和时间不知道往哪放——你找对地方了。",
    ],
  },
];

const variants = {
  enter: (dir: number) => ({ opacity: 0, x: dir > 0 ? 60 : -60 }),
  center: { opacity: 1, x: 0 },
  exit: (dir: number) => ({ opacity: 0, x: dir > 0 ? -60 : 60 }),
};

export default function StoryPage() {
  const [index, setIndex] = useState(0);
  const [dir, setDir] = useState(1);

  const go = (next: number) => {
    setDir(next > index ? 1 : -1);
    setIndex(next);
  };

  const chapter = chapters[index];
  const total = chapters.length;

  return (
    <section className="min-h-screen flex flex-col items-center px-4 sm:px-6 py-20">
      <Link
        href="/"
        className="text-base text-gray-500 hover:text-indigo-400 transition-colors mb-12"
      >
        ← 返回首页
      </Link>

      <motion.h1
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-5xl font-bold mb-16"
      >
        📖 我的<span className="gradient-text">故事</span>
      </motion.h1>

      {/* Chapter card */}
      <div className="w-full max-w-2xl">
        <AnimatePresence mode="wait" custom={dir}>
          <motion.div
            key={index}
            custom={dir}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="rounded-2xl bg-dark-card border border-white/5 p-10 sm:p-14 min-h-[380px] flex flex-col justify-between"
          >
            <div>
              {/* Tag + title */}
              <div className="flex items-center gap-3 mb-8">
                <span className="text-sm font-mono text-indigo-400 border border-indigo-500/30 px-3 py-1 rounded-full">
                  {chapter.tag}
                </span>
                {chapter.title && (
                  <h2 className="text-2xl font-bold text-gray-200">
                    {chapter.title}
                  </h2>
                )}
              </div>

              {/* Content */}
              <div className="space-y-5">
                {chapter.content.map((para, i) => (
                  <p key={i} className="text-xl text-gray-300 leading-relaxed">
                    {para}
                  </p>
                ))}
              </div>
            </div>

            {/* Progress dots */}
            <div className="flex justify-center gap-2 mt-10">
              {chapters.map((_, i) => (
                <button
                  key={i}
                  onClick={() => go(i)}
                  className={`rounded-full transition-all duration-300 ${
                    i === index
                      ? "w-6 h-2 bg-indigo-400"
                      : "w-2 h-2 bg-white/20 hover:bg-white/40"
                  }`}
                />
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation */}
        <div className="flex items-center justify-between mt-6 px-2">
          <button
            onClick={() => go(index - 1)}
            disabled={index === 0}
            className="px-6 py-3 rounded-xl text-base text-gray-400 hover:text-white hover:bg-white/5 transition-all disabled:opacity-20 disabled:cursor-not-allowed"
          >
            ← 上一节
          </button>

          <span className="text-sm text-gray-600 font-mono">
            {index + 1} / {total}
          </span>

          <button
            onClick={() => go(index + 1)}
            disabled={index === total - 1}
            className="px-6 py-3 rounded-xl text-base text-gray-400 hover:text-white hover:bg-white/5 transition-all disabled:opacity-20 disabled:cursor-not-allowed"
          >
            下一节 →
          </button>
        </div>
      </div>
    </section>
  );
}
