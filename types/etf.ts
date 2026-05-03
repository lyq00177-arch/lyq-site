export interface QdiiFund {
  code: string;
  cCode: string; // C 类份额代码
  name: string;
  feeRate: number; // 年运作费率 %
  purchaseLimit: string; // 申购上限，如 "100元" 或 "暂停申购"
  // dynamic fields fetched from API
  scale?: number; // 规模 亿元
  ytdReturn?: number; // 年初至今涨幅 %
  oneYearReturn?: number; // 近1年滚动 %
  changePct?: number; // 昨日涨跌 %
  trackError?: number; // 跟踪误差 %
  status?: "open" | "suspended"; // 申购状态
}

export interface EtfFund {
  code: string;
  name: string;
  trackingIndex: string;
  feeRate: number;
  // dynamic
  scale?: number;
  ytdReturn?: number;
  marketPrice?: number;
  nav?: number;
  premium?: number; // 溢价率 %
  changePct?: number;
  trackError?: number;
}

export interface EtfPageData {
  nasdaq: QdiiFund[];
  sp500: QdiiFund[];
  etf: EtfFund[];
  lastUpdate: string;
  usdCny?: number;
}
