// 智慧文集索引 —— 4 位大师 65 篇(数据来源:wise-hold.com/wisdom 公开资料)
// 正文运行时经 /api/wisdom?path= 服务端代理拉取;解析存 public/wisdom/<id>.analysis.html(由本站生成)

export type WisdomItem = { id: string; title: string; path: string; ext: string; type: string; hasAnalysis: boolean };
export type WisdomCategory = { id: string; title: string; icon: string; items: WisdomItem[] };
export type WisdomMaster = {
  id: string; name: string; nameEn: string; tagline: string;
  featuredQuote: string; avatar: string; categories: WisdomCategory[];
};

export const wisdomMasters: WisdomMaster[] = [
  {
    "id": "buffett",
    "name": "沃伦·巴菲特",
    "nameEn": "Warren Buffett",
    "tagline": "Berkshire Hathaway · 奥马哈先知",
    "featuredQuote": "Our favorite holding period is forever.",
    "avatar": "/wisdom/avatars/buffett.png",
    "categories": [
      {
        "id": "buffett/meetings",
        "title": "股东大会",
        "icon": "🏛️",
        "items": [
          {
            "id": "buffett__meetings__1957-1967股东大会",
            "title": "1957-1967股东大会",
            "path": "buffett/meetings/1957-1967股东大会.docx",
            "ext": "docx",
            "type": "docx",
            "hasAnalysis": true
          },
          {
            "id": "buffett__meetings__1968-1978 股东大会",
            "title": "1968-1978 股东大会",
            "path": "buffett/meetings/1968-1978 股东大会.docx",
            "ext": "docx",
            "type": "docx",
            "hasAnalysis": true
          },
          {
            "id": "buffett__meetings__1979-1989 股东大会",
            "title": "1979-1989 股东大会",
            "path": "buffett/meetings/1979-1989 股东大会.docx",
            "ext": "docx",
            "type": "docx",
            "hasAnalysis": true
          },
          {
            "id": "buffett__meetings__1990-2000 股东大会",
            "title": "1990-2000 股东大会",
            "path": "buffett/meetings/1990-2000 股东大会.docx",
            "ext": "docx",
            "type": "docx",
            "hasAnalysis": true
          },
          {
            "id": "buffett__meetings__2001-2010 股东大会",
            "title": "2001-2010 股东大会",
            "path": "buffett/meetings/2001-2010 股东大会.docx",
            "ext": "docx",
            "type": "docx",
            "hasAnalysis": true
          },
          {
            "id": "buffett__meetings__2011-2021 股东大会",
            "title": "2011-2021 股东大会",
            "path": "buffett/meetings/2011-2021 股东大会.docx",
            "ext": "docx",
            "type": "docx",
            "hasAnalysis": true
          },
          {
            "id": "buffett__meetings__2022-2025股东大会",
            "title": "2022-2025股东大会",
            "path": "buffett/meetings/2022-2025股东大会.docx",
            "ext": "docx",
            "type": "docx",
            "hasAnalysis": true
          }
        ]
      },
      {
        "id": "buffett/quotes",
        "title": "经典语录",
        "icon": "💬",
        "items": [
          {
            "id": "buffett__quotes__100条巴菲特经典语录",
            "title": "100条巴菲特经典语录",
            "path": "buffett/quotes/100条巴菲特经典语录.md",
            "ext": "md",
            "type": "article",
            "hasAnalysis": true
          },
          {
            "id": "buffett__quotes__巴菲特 25句致富名言",
            "title": "巴菲特 25句致富名言",
            "path": "buffett/quotes/巴菲特 25句致富名言.md",
            "ext": "md",
            "type": "article",
            "hasAnalysis": true
          },
          {
            "id": "buffett__quotes__巴菲特经典语录合集",
            "title": "巴菲特经典语录合集",
            "path": "buffett/quotes/巴菲特经典语录合集.md",
            "ext": "md",
            "type": "article",
            "hasAnalysis": true
          },
          {
            "id": "buffett__quotes__股神巴菲特名言合集",
            "title": "股神巴菲特名言合集",
            "path": "buffett/quotes/股神巴菲特名言合集.md",
            "ext": "md",
            "type": "article",
            "hasAnalysis": true
          }
        ]
      },
      {
        "id": "buffett/speeches",
        "title": "演讲与采访",
        "icon": "🎤",
        "items": [
          {
            "id": "buffett__speeches__1985巴菲特电视采访",
            "title": "1985巴菲特电视采访",
            "path": "buffett/speeches/1985巴菲特电视采访.md",
            "ext": "md",
            "type": "article",
            "hasAnalysis": true
          },
          {
            "id": "buffett__speeches__1990年巴菲特在斯坦福大学的演讲",
            "title": "1990年巴菲特在斯坦福大学的演讲",
            "path": "buffett/speeches/1990年巴菲特在斯坦福大学的演讲.md",
            "ext": "md",
            "type": "article",
            "hasAnalysis": true
          },
          {
            "id": "buffett__speeches__1991巴菲特对圣母大学对MBA学生的演讲",
            "title": "1991巴菲特对圣母大学对MBA学生的演讲",
            "path": "buffett/speeches/1991巴菲特对圣母大学对MBA学生的演讲.md",
            "ext": "md",
            "type": "article",
            "hasAnalysis": true
          },
          {
            "id": "buffett__speeches__1998巴菲特在佛罗里达大学商学院的演讲",
            "title": "1998巴菲特在佛罗里达大学商学院的演讲",
            "path": "buffett/speeches/1998巴菲特在佛罗里达大学商学院的演讲.md",
            "ext": "md",
            "type": "article",
            "hasAnalysis": true
          },
          {
            "id": "buffett__speeches__1998年巴菲特与比尔盖茨在华盛顿大学的对话",
            "title": "1998年巴菲特与比尔盖茨在华盛顿大学的对话",
            "path": "buffett/speeches/1998年巴菲特与比尔盖茨在华盛顿大学的对话.md",
            "ext": "md",
            "type": "article",
            "hasAnalysis": true
          },
          {
            "id": "buffett__speeches__2005堪萨斯商学院学生于伯克希尔总部与沃伦·巴菲特的问答",
            "title": "2005堪萨斯商学院学生于伯克希尔总部与沃伦·巴菲特的问答",
            "path": "buffett/speeches/2005堪萨斯商学院学生于伯克希尔总部与沃伦·巴菲特的问答.md",
            "ext": "md",
            "type": "article",
            "hasAnalysis": true
          },
          {
            "id": "buffett__speeches__2007年央视专访巴菲特",
            "title": "2007年央视专访巴菲特",
            "path": "buffett/speeches/2007年央视专访巴菲特.md",
            "ext": "md",
            "type": "article",
            "hasAnalysis": true
          },
          {
            "id": "buffett__speeches__2008巴菲特答Emory与Austin大学商学院学生问巴菲特答",
            "title": "2008巴菲特答Emory与Austin大学商学院学生问巴菲特答",
            "path": "buffett/speeches/2008巴菲特答Emory与Austin大学商学院学生问巴菲特答.md",
            "ext": "md",
            "type": "article",
            "hasAnalysis": true
          },
          {
            "id": "buffett__speeches__2010央视财经采访巴菲特",
            "title": "2010央视财经采访巴菲特",
            "path": "buffett/speeches/2010央视财经采访巴菲特.md",
            "ext": "md",
            "type": "article",
            "hasAnalysis": true
          },
          {
            "id": "buffett__speeches__2010年CNBC采访巴菲特全文",
            "title": "2010年CNBC采访巴菲特全文",
            "path": "buffett/speeches/2010年CNBC采访巴菲特全文.md",
            "ext": "md",
            "type": "article",
            "hasAnalysis": true
          },
          {
            "id": "buffett__speeches__2011年巴菲特与南京大学EMBA学生畅言谈投资与人生全中文纪录",
            "title": "2011年巴菲特与南京大学EMBA学生畅言谈投资与人生全中文纪录",
            "path": "buffett/speeches/2011年巴菲特与南京大学EMBA学生畅言谈投资与人生全中文纪录.md",
            "ext": "md",
            "type": "article",
            "hasAnalysis": true
          },
          {
            "id": "buffett__speeches__2013巴菲特与马里兰大学MBA学生的交流发言",
            "title": "2013巴菲特与马里兰大学MBA学生的交流发言",
            "path": "buffett/speeches/2013巴菲特与马里兰大学MBA学生的交流发言.md",
            "ext": "md",
            "type": "article",
            "hasAnalysis": true
          },
          {
            "id": "buffett__speeches__2015沃伦·巴菲特答Ivey商学院MBA学生问沃伦·巴菲特答",
            "title": "2015沃伦·巴菲特答Ivey商学院MBA学生问沃伦·巴菲特答",
            "path": "buffett/speeches/2015沃伦·巴菲特答Ivey商学院MBA学生问沃伦·巴菲特答.md",
            "ext": "md",
            "type": "article",
            "hasAnalysis": true
          },
          {
            "id": "buffett__speeches__2016年巴菲特与8所大学MBA学生见面会的20个问答",
            "title": "2016年巴菲特与8所大学MBA学生见面会的20个问答",
            "path": "buffett/speeches/2016年巴菲特与8所大学MBA学生见面会的20个问答.md",
            "ext": "md",
            "type": "article",
            "hasAnalysis": true
          },
          {
            "id": "buffett__speeches__2017年CNBC采访巴菲特",
            "title": "2017年CNBC采访巴菲特",
            "path": "buffett/speeches/2017年CNBC采访巴菲特.md",
            "ext": "md",
            "type": "article",
            "hasAnalysis": true
          },
          {
            "id": "buffett__speeches__2017年哥伦比亚大学——人生最美好的事是什么？巴菲特：没考上哈佛大学",
            "title": "2017年哥伦比亚大学——人生最美好的事是什么？巴菲特：没考上哈佛大学",
            "path": "buffett/speeches/2017年哥伦比亚大学——人生最美好的事是什么？巴菲特：没考上哈佛大学.md",
            "ext": "md",
            "type": "article",
            "hasAnalysis": true
          },
          {
            "id": "buffett__speeches__2017年巴菲特对话北京大学学生：最好的投资是投资自己",
            "title": "2017年巴菲特对话北京大学学生：最好的投资是投资自己",
            "path": "buffett/speeches/2017年巴菲特对话北京大学学生：最好的投资是投资自己.md",
            "ext": "md",
            "type": "article",
            "hasAnalysis": true
          },
          {
            "id": "buffett__speeches__2018年巴菲特再度邀请北大光华学子共进午餐问答全记录",
            "title": "2018年巴菲特再度邀请北大光华学子共进午餐问答全记录",
            "path": "buffett/speeches/2018年巴菲特再度邀请北大光华学子共进午餐问答全记录.md",
            "ext": "md",
            "type": "article",
            "hasAnalysis": true
          },
          {
            "id": "buffett__speeches__2019年5月雅虎财经专访巴菲特",
            "title": "2019年5月雅虎财经专访巴菲特",
            "path": "buffett/speeches/2019年5月雅虎财经专访巴菲特.md",
            "ext": "md",
            "type": "article",
            "hasAnalysis": true
          },
          {
            "id": "buffett__speeches__2020年沃伦·巴菲特接受CNBC专访",
            "title": "2020年沃伦·巴菲特接受CNBC专访",
            "path": "buffett/speeches/2020年沃伦·巴菲特接受CNBC专访.md",
            "ext": "md",
            "type": "article",
            "hasAnalysis": true
          },
          {
            "id": "buffett__speeches__2022巴菲特和查理罗斯对谈",
            "title": "2022巴菲特和查理罗斯对谈",
            "path": "buffett/speeches/2022巴菲特和查理罗斯对谈.md",
            "ext": "md",
            "type": "article",
            "hasAnalysis": true
          },
          {
            "id": "buffett__speeches__2023年伯克希尔股东大会",
            "title": "2023年伯克希尔股东大会",
            "path": "buffett/speeches/2023年伯克希尔股东大会.md",
            "ext": "md",
            "type": "article",
            "hasAnalysis": true
          },
          {
            "id": "buffett__speeches__2024年伯克希尔股东大会",
            "title": "2024年伯克希尔股东大会",
            "path": "buffett/speeches/2024年伯克希尔股东大会.md",
            "ext": "md",
            "type": "article",
            "hasAnalysis": true
          },
          {
            "id": "buffett__speeches__2025年伯克希尔股东大会",
            "title": "2025年伯克希尔股东大会",
            "path": "buffett/speeches/2025年伯克希尔股东大会.md",
            "ext": "md",
            "type": "article",
            "hasAnalysis": true
          }
        ]
      }
    ]
  },
  {
    "id": "munger",
    "name": "查理·芒格",
    "nameEn": "Charlie Munger",
    "tagline": "Daily Journal · 多元思维模型践行者",
    "featuredQuote": "反过来想，总是反过来想。",
    "avatar": "/wisdom/avatars/munger.png",
    "categories": [
      {
        "id": "munger/quotes",
        "title": "经典语录",
        "icon": "💬",
        "items": [
          {
            "id": "munger__quotes__查理芒格50 条语录",
            "title": "查理芒格50 条语录",
            "path": "munger/quotes/查理芒格50 条语录.md",
            "ext": "md",
            "type": "article",
            "hasAnalysis": true
          }
        ]
      },
      {
        "id": "munger/speeches",
        "title": "演讲与采访",
        "icon": "🎤",
        "items": [
          {
            "id": "munger__speeches__2018_94岁查理芒格2018年2月访谈",
            "title": "2018_94岁查理芒格2018年2月访谈",
            "path": "munger/speeches/2018_94岁查理芒格2018年2月访谈.md",
            "ext": "md",
            "type": "article",
            "hasAnalysis": true
          },
          {
            "id": "munger__speeches__2018_《喻见》专访芒格对话实录（上）",
            "title": "2018_《喻见》专访芒格对话实录（上）",
            "path": "munger/speeches/2018_《喻见》专访芒格对话实录（上）.md",
            "ext": "md",
            "type": "article",
            "hasAnalysis": true
          },
          {
            "id": "munger__speeches__2018_《喻见》专访芒格对话实录（下）",
            "title": "2018_《喻见》专访芒格对话实录（下）",
            "path": "munger/speeches/2018_《喻见》专访芒格对话实录（下）.md",
            "ext": "md",
            "type": "article",
            "hasAnalysis": true
          },
          {
            "id": "munger__speeches__2018_《红周刊》独家对话查理芒格",
            "title": "2018_《红周刊》独家对话查理芒格",
            "path": "munger/speeches/2018_《红周刊》独家对话查理芒格.md",
            "ext": "md",
            "type": "article",
            "hasAnalysis": true
          },
          {
            "id": "munger__speeches__2019_CNBC专访芒格",
            "title": "2019_CNBC专访芒格",
            "path": "munger/speeches/2019_CNBC专访芒格.md",
            "ext": "md",
            "type": "article",
            "hasAnalysis": true
          },
          {
            "id": "munger__speeches__2019_DailyJournal年会文字记录",
            "title": "2019_DailyJournal年会文字记录",
            "path": "munger/speeches/2019_DailyJournal年会文字记录.md",
            "ext": "md",
            "type": "article",
            "hasAnalysis": true
          },
          {
            "id": "munger__speeches__2019_独家专访查理·芒格：我是孔子思想在美国的实践者",
            "title": "2019_独家专访查理·芒格：我是孔子思想在美国的实践者",
            "path": "munger/speeches/2019_独家专访查理·芒格：我是孔子思想在美国的实践者.md",
            "ext": "md",
            "type": "article",
            "hasAnalysis": true
          },
          {
            "id": "munger__speeches__2020年_芒格对话：谈人生人性与投资",
            "title": "2020年_芒格对话：谈人生人性与投资",
            "path": "munger/speeches/2020年_芒格对话：谈人生人性与投资.md",
            "ext": "md",
            "type": "article",
            "hasAnalysis": true
          },
          {
            "id": "munger__speeches__2020年_芒格最新访谈：对中国进行了非常大的投资，从现在开始的一年，最糟糕的情况将会彻底地被抛在后面",
            "title": "2020年_芒格最新访谈：对中国进行了非常大的投资，从现在开始的一年，最糟糕的情况将会彻底地被抛在后面",
            "path": "munger/speeches/2020年_芒格最新访谈：对中国进行了非常大的投资，从现在开始的一年，最糟糕的情况将会彻底地被抛在后面.md",
            "ext": "md",
            "type": "article",
            "hasAnalysis": true
          },
          {
            "id": "munger__speeches__2022_Daily Journal 年会文字记录（问题1-30）",
            "title": "2022_Daily Journal 年会文字记录（问题1-30）",
            "path": "munger/speeches/2022_Daily Journal 年会文字记录（问题1-30）.md",
            "ext": "md",
            "type": "article",
            "hasAnalysis": true
          },
          {
            "id": "munger__speeches__2022_Daily Journal 年会文字记录（问题31-40）",
            "title": "2022_Daily Journal 年会文字记录（问题31-40）",
            "path": "munger/speeches/2022_Daily Journal 年会文字记录（问题31-40）.md",
            "ext": "md",
            "type": "article",
            "hasAnalysis": true
          },
          {
            "id": "munger__speeches__2022_Daily Journal 年会文字记录（问题41-49）",
            "title": "2022_Daily Journal 年会文字记录（问题41-49）",
            "path": "munger/speeches/2022_Daily Journal 年会文字记录（问题41-49）.md",
            "ext": "md",
            "type": "article",
            "hasAnalysis": true
          },
          {
            "id": "munger__speeches__查理-芒格十大演讲",
            "title": "查理-芒格十大演讲",
            "path": "munger/speeches/查理-芒格十大演讲.md",
            "ext": "md",
            "type": "article",
            "hasAnalysis": true
          }
        ]
      }
    ]
  },
  {
    "id": "duan",
    "name": "段永平",
    "nameEn": "Duan Yongping",
    "tagline": "H&H International · OPPO / vivo 创始人",
    "featuredQuote": "做对的事情，把事情做对。",
    "avatar": "/wisdom/avatars/duan.png",
    "categories": [
      {
        "id": "duan/business",
        "title": "经营与人生",
        "icon": "📄",
        "items": [
          {
            "id": "duan__business__1998_段永平对步步高所有营销人员的讲话",
            "title": "1998_段永平对步步高所有营销人员的讲话",
            "path": "duan/business/1998_段永平对步步高所有营销人员的讲话.md",
            "ext": "md",
            "type": "article",
            "hasAnalysis": false
          },
          {
            "id": "duan__business__1999_段永平",
            "title": "1999_段永平",
            "path": "duan/business/1999_段永平.md",
            "ext": "md",
            "type": "article",
            "hasAnalysis": false
          },
          {
            "id": "duan__business__2011年段永平学长在浙江大学的毕业演讲",
            "title": "2011年段永平学长在浙江大学的毕业演讲",
            "path": "duan/business/2011年段永平学长在浙江大学的毕业演讲.md",
            "ext": "md",
            "type": "article",
            "hasAnalysis": false
          },
          {
            "id": "duan__business__2018段永平斯坦福大学53问",
            "title": "2018段永平斯坦福大学53问",
            "path": "duan/business/2018段永平斯坦福大学53问.md",
            "ext": "md",
            "type": "article",
            "hasAnalysis": false
          },
          {
            "id": "duan__business__2025段永平方略访谈",
            "title": "2025段永平方略访谈",
            "path": "duan/business/2025段永平方略访谈.md",
            "ext": "md",
            "type": "article",
            "hasAnalysis": false
          },
          {
            "id": "duan__business__2025段永平浙大",
            "title": "2025段永平浙大",
            "path": "duan/business/2025段永平浙大.md",
            "ext": "md",
            "type": "article",
            "hasAnalysis": false
          },
          {
            "id": "duan__business__段永平论快乐人生",
            "title": "段永平论快乐人生",
            "path": "duan/business/段永平论快乐人生.md",
            "ext": "md",
            "type": "article",
            "hasAnalysis": false
          }
        ]
      },
      {
        "id": "duan/investment",
        "title": "投资语录",
        "icon": "💰",
        "items": [
          {
            "id": "duan__investment__段永平 2021 年经典语录",
            "title": "段永平 2021 年经典语录",
            "path": "duan/investment/段永平 2021 年经典语录.md",
            "ext": "md",
            "type": "article",
            "hasAnalysis": false
          },
          {
            "id": "duan__investment__段永平80 条语录",
            "title": "段永平80 条语录",
            "path": "duan/investment/段永平80 条语录.md",
            "ext": "md",
            "type": "article",
            "hasAnalysis": false
          },
          {
            "id": "duan__investment__段永平语录100条",
            "title": "段永平语录100条",
            "path": "duan/investment/段永平语录100条.md",
            "ext": "md",
            "type": "article",
            "hasAnalysis": false
          }
        ]
      }
    ]
  },
  {
    "id": "lilu",
    "name": "李录",
    "nameEn": "Li Lu",
    "tagline": "Himalaya Capital · 喜马拉雅资本创始人",
    "featuredQuote": "真正的价值投资，是对人类文明进步的信仰。",
    "avatar": "/wisdom/avatars/lilu.png",
    "categories": [
      {
        "id": "lilu/files",
        "title": "文章与报告",
        "icon": "📚",
        "items": [
          {
            "id": "lilu__价值投资在中国的展望-李录2015-10-23北大演讲.pdf",
            "title": "价值投资在中国的展望-李录2015-10-23北大演讲",
            "path": "lilu/价值投资在中国的展望-李录2015-10-23北大演讲.pdf",
            "ext": "pdf",
            "type": "pdf",
            "hasAnalysis": false
          },
          {
            "id": "lilu__全球价值投资与时代2024年12月.pdf",
            "title": "全球价值投资与时代2024年12月",
            "path": "lilu/全球价值投资与时代2024年12月.pdf",
            "ext": "pdf",
            "type": "pdf",
            "hasAnalysis": false
          },
          {
            "id": "lilu__推荐阅读书籍.pdf",
            "title": "推荐阅读书籍",
            "path": "lilu/推荐阅读书籍.pdf",
            "ext": "pdf",
            "type": "pdf",
            "hasAnalysis": false
          },
          {
            "id": "lilu__李录2019年年度书评 2019.11.19.pdf",
            "title": "李录2019年年度书评 2019.11.19",
            "path": "lilu/李录2019年年度书评 2019.11.19.pdf",
            "ext": "pdf",
            "type": "pdf",
            "hasAnalysis": false
          },
          {
            "id": "lilu__李录谈现代化-从人类文明史角度看当今中美关系走向.pdf",
            "title": "李录谈现代化-从人类文明史角度看当今中美关系走向",
            "path": "lilu/李录谈现代化-从人类文明史角度看当今中美关系走向.pdf",
            "ext": "pdf",
            "type": "pdf",
            "hasAnalysis": false
          },
          {
            "id": "lilu__李录谈现代化大字号.pdf",
            "title": "李录谈现代化大字号",
            "path": "lilu/李录谈现代化大字号.pdf",
            "ext": "pdf",
            "type": "pdf",
            "hasAnalysis": false
          }
        ]
      }
    ]
  }
];
