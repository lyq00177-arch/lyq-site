"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const chapters = [
  {
    tag: "先说结论",
    title: null,
    paragraphs: [
      "我没有辞职，没有 All in，也没有那种漂亮的逆袭故事。",
      "白天，我仍然在一个很现实的系统里工作。那里有流程、身份、边界，也有小城生活给人的稳定感。",
      "晚上回到书房，门一关，另一套系统开始运行。",
      "文章在写，网站在改，AI 在回答问题，市场数据在跳动。我慢慢意识到，一个普通人也许不必立刻逃离原来的轨道。",
      "他可以先在轨道旁边，搭一条自己的路。",
      "这就是我的故事。一个常州普通人，用 AI、投资和自媒体，重新争取人生主动权的过程。",
    ],
    large: true,
  },
  {
    tag: "一",
    title: "父亲那一代人的本事",
    paragraphs: [
      "我很晚才真正理解父亲的厉害。",
      "他不是被人托举起来的人。十几岁时，他的父亲就不在了。后来，他从本地一家农副产品批发市场的普通员工做起，一路做到股东和中高层。",
      "他不是书本意义上的精英，却很懂现实世界的运行方式。",
      "人、位置、信任、时机。",
      "这些词我小时候听不懂。那时候我只觉得父亲管我不多，下班后有自己的社交和生活。真正等我大学毕业，自己进入社会以后，我才越来越明白：上一代人的本事，很多不写在简历上。",
      "它在饭桌上，在寒暄里，在关键时候有人愿意帮你说一句话里。",
      "父亲那一代人，是在现实系统里往上走的人。他靠的是胆子、关系、判断、灵活，还有一种很朴素的现实主义。",
      "我后来才发现，我其实一直在找自己的那套东西。",
      "只是到了我这一代，很多旧方法已经不能照搬了。新的杠杆，变成了 AI、内容、资产和个人系统。",
    ],
    large: false,
  },
  {
    tag: "二",
    title: "不错的开局，不等于真正的自由",
    paragraphs: [
      "2016 年大学毕业，我并不是赤手空拳走进社会的。",
      "常州、小城、家庭，给过我一个不错的开局。车、房、稳定生活、体面的教育路径，很多同龄人要自己硬扛很久的东西，我很早就被放到了面前。",
      "年轻的时候，人很容易把幸运误认为正常。",
      "那时我并没有太强烈地意识到这些东西的重量。身边很多朋友也都是本地家庭，大家似乎都有房，有车，有父母提前铺好的路。",
      "后来我才慢慢知道，被保护不是一件丢人的事。",
      "真正复杂的是：别人给你的安全感，可以让你过得体面，却不能替你回答那个问题。",
      "如果不伸手，我自己到底能建立什么？",
      "我想去更远的地方，看北欧的雪、南美的旷野和极地的光。我也想拥有更高级的选择权：在哪里生活，持有什么资产，和谁建立连接，不必每一步都等别人批准。",
      "说到底，我想靠自己的能力，把人生往上推一层。不是只活得安全，而是活得更像自己。",
      "这时候我才意识到，安全感和自由不是一回事。",
      "前者可以由家庭给你。后者必须自己挣出来。",
    ],
    large: false,
  },
  {
    tag: "三",
    title: "我第一次搭起一个系统",
    paragraphs: [
      "我职业生涯里最开心的一段，是在青之峰的数据部。",
      "那时我带着一个小团队，做集团的数据大屏。我们把十个城市、几十张表、分散在各处的业务数据，一点点接起来。",
      "今天跑通一个指标，明天加上一个模块，后天让一块图表动起来。",
      "那段时间我每天都很兴奋。",
      "一个新功能诞生，就像在一片混乱里接上一根新的神经。晚上回家，我会忍不住打开电脑，演示给妻子看。她未必真的懂那些指标为什么重要，但我知道，那是我第一次很具体地感受到：原来我也可以带着人，做出一个像样的系统。",
      "这件事后来对我影响很深。",
      "不是因为那块大屏有多高级，而是因为它让我尝到了一种感觉：把散乱的东西组织起来，让它开始运行。",
      "那种感觉，我后来在搭个人网站、整理 Obsidian、折腾 AI 工作流时，又一次次遇到。",
    ],
    large: false,
  },
  {
    tag: "四",
    title: "我第一次看见一个系统退潮",
    paragraphs: [
      "退潮不是一天发生的。",
      "从 2020 年以后，公司的数字就开始不太好看。季报利润一次次变成负数，降薪开始出现，内部系统里偶尔会冒出一些本不该让所有人看见的情绪。",
      "但人很奇怪。",
      "一家有一千多名员工、走过二十多年、在本地也算有名的公司，你总会本能地相信它能扛过去。",
      "后来我才知道，所谓“大”，很多时候只是让崩塌显得更慢。",
      "一轮一轮裁员，业务收缩，办公室里的声音一点点变少。以前觉得稳定的东西，忽然开始松动。以前觉得有价值的经验，拿到外面一看，也未必还能换来什么。",
      "我那时才真正理解：一个人不能只把自己绑定在一个系统里。",
      "系统兴起的时候，它托着你往上走。系统退潮的时候，它不会提前通知你。",
    ],
    large: false,
  },
  {
    tag: "五",
    title: "一张体面的门票，和门后消失的路",
    paragraphs: [
      "我后来去读了南京大学 MBA。",
      "那时候我刚被提到数据部经理，正是志得意满的时候。公司里学历最高的人已经做到高层，老板也鼓励学历提升。我很自然地以为，如果我也补上这张票，也许下一步就能再往上走。",
      "总监，甚至更高一点的位置。",
      "那是一笔不轻的学费。三十多万，放在任何时候都不是小数目。",
      "当时我以为自己买的是一个更大的可能性。",
      "但现实没有按这个剧本走。",
      "MBA 还没读完，公司先倒下了。等我拿到那张体面的文凭，原来想进入的那条路，已经不在原地。",
      "这件事给我的教育，比 MBA 本身更深。",
      "有些门票，买下来以后才发现，门后的世界已经变了。",
      "当然，它不是完全没有价值。南京大学这四个字，确实是一种背书；我也见到了一些更积极、更会向上走的人。",
      "但如果再来一次，我可能不会用同样的方式寻找答案。",
      "因为真正的问题，学校不会替你回答。你到底想成为什么样的人，最后还是要自己做出来。",
    ],
    large: false,
  },
  {
    tag: "六",
    title: "世界开了一个口子",
    paragraphs: [
      "ChatGPT 刚出来的时候，我第一次让它写诗。",
      "随便给一个主题，它很快生成了一首像模像样的诗。现在回头看，那当然不算什么，甚至有点幼稚。",
      "但在当时，那一刻的感觉很强烈。",
      "原来语言、想象、表达，这些以前被认为很“人”的东西，也开始被机器触碰了。",
      "我说不上来那意味着什么，但我隐约知道，世界又开了一个口子。",
      "后来我开始用 AI 写作、分析、做图、剪视频、搭网站。再后来，我用 Claude Code 一点点改出自己的个人网站，用 Obsidian 搭自己的数字人生，用各种工具把零散的想法、文章、素材和项目串起来。",
      "我不是程序员，也没有技术背景。",
      "但 AI 让我第一次感觉到，普通人也可以拥有接近一个小团队的能力。",
      "它不是玩具。它是这一代普通人重新分配能力边界的工具。",
    ],
    large: false,
  },
  {
    tag: "七",
    title: "把自己放到外面",
    paragraphs: [
      "2026 年 1 月，我在公众号发了一篇文章。",
      "第一天，几十个阅读。第二天，几百。第三天，过千。第四天，还在涨。",
      "第五天打开后台，我看到那个数字时，脑子里只有一个很俗的念头：原来我也能写出十万加。",
      "那不是成功。只是一次被看见。",
      "但对一个长期在现实系统里寻找位置的人来说，被陌生人看见，本身就是一件很重要的事。",
      "后来，AI 视频破过百万播放，内容收到过品牌合作，推特帖子也有过几万阅读。我把这些写出来，不是为了证明我已经赢了。",
      "恰恰相反。我还在路上。",
      "我只是越来越确认一件事：普通人要把自己放到外面。你的能力、判断、审美、经验，如果永远只留在脑子里，就不会形成任何机会。",
      "自媒体不是表演欲。它是普通人让自己被世界检索到的一种方式。",
    ],
    large: false,
  },
  {
    tag: "八",
    title: "我的第二套人生系统",
    paragraphs: [
      "我现在关注三件事：AI、投资、自媒体。",
      "AI 是生产力。它让我把很多原本做不了的事，变成可以试一试。",
      "投资是判断力。它逼我理解世界、控制欲望、接受波动，也提醒我：钱不是目的，自由才是。",
      "自媒体是影响力。它让我不再只等待别人发现我，而是主动把自己放到外界视野里。",
      "这三件事合在一起，就是我正在搭建的第二套人生系统。",
      "我不打算把自己包装成导师，也不想讲那种“普通人逆袭”的漂亮故事。现实没有那么爽，人生也不是短视频脚本。",
      "我只是一个常州普通人。",
      "有不错的开局，也有说不出口的不甘心；有家庭给的安全感，也有自己必须争取的自由；见过上一代人在现实系统里往上走，也见过一个旧系统慢慢退潮。",
      "所以当新的工具出现时，我不想再只站在旁边看。",
      "我想亲手搭一套属于自己的东西。",
      "如果你也觉得世界变得太快，手里的时间、钱和能力不知道该往哪放。",
      "那我们也许可以一起看一看。普通人到底还能怎样，重新拿回一点人生主动权。",
    ],
    large: false,
  },
];

export default function StoryPage() {
  return (
    <section className="min-h-screen w-full max-w-full px-6 sm:px-12 lg:px-20 py-24 overflow-x-hidden">
      <div className="w-full max-w-[640px] mx-auto min-w-0">

        <Link
          href="/"
          className="text-sm text-t-muted hover:text-amber-400 transition-colors block mb-16"
        >
          ← 首页
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-20"
        >
          <h1 className="font-display text-2xl sm:text-5xl text-t-primary mb-3 leading-tight max-w-full [overflow-wrap:anywhere] [word-break:break-all]">
            一个小城普通人的第二套人生系统
          </h1>
          <p className="text-sm text-t-muted leading-relaxed max-w-full [overflow-wrap:anywhere] [word-break:break-all]">
            我没有离开现实系统，只是开始在旁边搭一条自己的路。 · 约 12 分钟 · {chapters.length} 个章节
          </p>
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
                  <h2 className="font-display text-xl text-t-secondary leading-snug max-w-full [overflow-wrap:anywhere] [word-break:break-all]">
                    {chapter.title}
                  </h2>
                )}
              </div>

              <div className="space-y-5">
                {chapter.paragraphs.map((para, j) => (
                  <p
                    key={j}
                    className={`leading-relaxed max-w-full [overflow-wrap:anywhere] [word-break:break-all] ${
                      chapter.large
                        ? "text-base sm:text-2xl text-t-secondary font-light"
                        : "text-lg text-t-tertiary"
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
          <p className="text-sm text-t-muted mb-6">谢谢你读到这里。</p>
          <div className="flex gap-8">
            <Link
              href="/connect"
              className="text-sm text-amber-500/60 hover:text-amber-400 transition-colors"
            >
              加我微信 →
            </Link>
            <Link
              href="/business"
              className="text-sm text-t-muted hover:text-amber-400 transition-colors"
            >
              了解 1v1 →
            </Link>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
