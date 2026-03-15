"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const chapters = [
  {
    tag: "先说结论",
    title: null,
    paragraphs: [
      "我是文科生，不会写代码，没有技术背景。",
      "去年，我发了一篇文章。",
      "第一天，40 阅读。第二天，200。第三天，1000。第四天，2000。",
      "第五天早上，我打开手机——96000。",
      "这不是成功学故事。我还没成功。这是一个记录。",
    ],
    large: true,
  },
  {
    tag: "一",
    title: "那段看不见出路的日子",
    paragraphs: [
      "2018 年前后，我在公司经历了一段很难熬的时期。",
      "那时我负责对接总部，日常工作是整理资料、处理往来邮件——技术含量不高，也看不到成长。身边的人在进步，数据在跑，而我像是被放到了一个没有窗的房间里，不知道自己在往哪里走。",
      "那种感觉很具体：每天都在忙，但不知道忙的意义是什么。你很努力，但努力没有落点。",
      "我没有选择离开。我选择等。等一个能让自己重新证明价值的机会。",
    ],
    large: false,
  },
  {
    tag: "二",
    title: "一张大屏，十个城市",
    paragraphs: [
      "2022 年，机会来了。公司数据部需要人，我主动请缨接手。",
      "那之后将近一年，是我职业生涯里最充实的一段时光。手下三个人，负责十个城市的客户业务数据。我们把分散在几十张 Excel 里的数字，整合成了一套实时可视化数据大屏——十个城市，同时跳动，第一次变成了一个整体。",
      "大屏发布那天，我盯着屏幕看了很久。那是我第一次真正感到，自己做的事是有重量的。",
      "但时代没有给这份成就足够长的保质期。",
    ],
    large: false,
  },
  {
    tag: "三",
    title: "行业消失那年",
    paragraphs: [
      "2023 年下半年，公司的数字开始一路下滑。",
      "我是数据经理，所以比所有人都更早看到那些报表。百度的广告份额，每一个季度都在萎缩。短视频在吃搜索，AI 在吃内容。这不是某一家公司的问题——整个依赖流量代理的互联网生意模式，正在进入它的尾声。",
      "2024 年，公司关了。",
      "我带着八年的经验出去找工作，才发现这八年在新的市场里几乎换不来什么。那年我 33 岁，南京大学的 MBA 刚读完，站在一个需要重新开始的位置上。",
      "没有什么特别戏剧性的情绪，就是有点空，有点清醒。我开始想：我手里，还有什么？",
    ],
    large: false,
  },
  {
    tag: "四",
    title: "2019 年埋下的一颗种子",
    paragraphs: [
      "想起来一台机器。2019 年买的，NAS 家庭存储设备，一直放在书房。当年折腾端口映射和外网访问，鼓捣出了一个对外可以访问的个人网站——完全不懂这意味着什么，就是觉得好玩，想折腾。",
      "后来才明白：那是我第一次意识到，一个普通人可以自己搭一个东西，让全世界都能访问它。",
      "2024 年底，这个认知开始生长。",
    ],
    large: false,
  },
  {
    tag: "五",
    title: "大几万学费换来的东西",
    paragraphs: [
      "我没有走捷径。",
      "我报过培训班，买过课，付过很多学费给那些号称能教你 AI 的人。几万块下去，才搞清楚哪些东西是真有用的，哪些是在卖焦虑，哪些坑一定会踩，哪些弯路根本不必走。",
      "现在我把这些过滤之后的东西，浓缩成一个小时告诉你。不用再替我交那笔学费。",
      "这，才是 1v1 的价值所在。",
    ],
    large: false,
  },
  {
    tag: "六",
    title: "百万播放，以及被下架的那条",
    paragraphs: [
      "2025 年，我开始认真做 AI 视频。",
      "有一条，是用 AI 复原科比的一次经典扣篮——每一帧都是生成的。春节前后迅速破圈，播放量冲过了一百万。后来平台因为人脸版权把它下架了。但那个百万，是我亲眼看见的。",
      "那之后，事情开始有了一些不一样的变化：",
      "即梦 AI 发布 Seedance 2.0，官方主动联系我合作推广。AI 生图创作比赛，我拿了二等奖。推特两个帖子，各自突破五万阅读。抖音陆续接到品牌商单，有人开始愿意为这个内容付钱。在即梦 APP，我和 TikTok CEO 周受资互关了。",
      "我把这些写出来，不是要证明什么。是想说一件事：这些，都发生在一个文科合同工身上。",
    ],
    large: false,
  },
  {
    tag: "七",
    title: "第五天，96000",
    paragraphs: [
      "2026 年 1 月，我在公众号发了一篇文章。",
      "第一天，40 阅读。我关掉手机，觉得和以往没什么两样。",
      "第二天，200。正常波动。",
      "第三天，1000。有点不一样了，但我没敢多想。",
      "第四天，2000。",
      "第五天早上，我打开手机：96000。",
      "我站在书房里不知道该干什么，看了很久，才慢慢意识到发生了什么。",
      "那之后，有一件事我想通了：你不说，别人不知道你懂这个。说出去，最坏是被嘲笑，最好是被人记住你的能力。人要把自己暴露在外界的视野里，不然什么都不会发生。",
    ],
    large: false,
  },
  {
    tag: "尾声",
    title: null,
    paragraphs: [
      "33 岁，没有辞职，没有 all in，没有那种完整转型的故事。",
      "白天是个普通合同工。晚上书房门一关，服务器在跑，文章在写，视频在剪，数据在涨。",
      "我不打算告诉你这条路一定对。我只是在走，然后记录下来。",
      "如果你也觉得世界变得太快，手里的钱和时间不知道往哪放——你来对地方了。",
    ],
    large: false,
  },
];

export default function StoryPage() {
  return (
    <section className="min-h-screen px-6 sm:px-12 lg:px-20 py-24">
      <div className="max-w-[640px] mx-auto">

        <Link
          href="/"
          className="text-sm text-[#5a5450] hover:text-amber-400 transition-colors block mb-16"
        >
          ← 首页
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-20"
        >
          <h1 className="font-display text-4xl sm:text-5xl text-[#e8e3d8] mb-3">故事</h1>
          <p className="text-sm text-[#4a4440]">约 12 分钟 · {chapters.length} 个章节</p>
        </motion.div>

        <div>
          {chapters.map((chapter, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7 }}
              className={`pb-16 mb-16 border-b border-white/[0.05] ${
                i === chapters.length - 1 ? "border-0 pb-0 mb-0" : ""
              }`}
            >
              <div className="flex items-center gap-3 mb-7">
                <span className="text-[11px] font-mono tracking-widest text-amber-500/50 border border-amber-500/15 px-2.5 py-1 rounded shrink-0">
                  {chapter.tag}
                </span>
                {chapter.title && (
                  <h2 className="font-display text-xl text-[#b8b0a0]">
                    {chapter.title}
                  </h2>
                )}
              </div>

              <div className="space-y-5">
                {chapter.paragraphs.map((para, j) => (
                  <p
                    key={j}
                    className={`leading-relaxed ${
                      chapter.large
                        ? "text-xl sm:text-2xl text-[#c8c2b8] font-light"
                        : "text-lg text-[#7a746c]"
                    }`}
                  >
                    {para}
                  </p>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-8 pt-10 border-t border-white/[0.05]"
        >
          <p className="text-sm text-[#4a4440] mb-6">谢谢你读到这里。</p>
          <div className="flex gap-8">
            <Link
              href="/connect"
              className="text-sm text-amber-500/60 hover:text-amber-400 transition-colors"
            >
              加我微信 →
            </Link>
            <Link
              href="/business"
              className="text-sm text-[#4a4440] hover:text-amber-400 transition-colors"
            >
              了解 1v1 →
            </Link>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
