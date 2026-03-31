export interface Project {
  title: string
  description: string
  techStack: string[]
  liveUrl?: string
  githubUrl?: string
  highlights: string[]
  category?: string
}

export const projects: Project[] = [
  {
    title: 'Infodeck IoT Platform',
    category: 'IoT · SaaS',
    description:
      '企業級 IoT 設備管理 SaaS 平台，支援 500+ 台設備即時監控，整合 LoRaWAN 網路伺服器與資產工單管理。',
    techStack: ['Vue 3', 'TypeScript', 'Node.js', 'AWS IoT', 'DynamoDB', 'gRPC'],
    liveUrl: 'https://www.infodeck.io',
    highlights: [
      '開發 31+ LoRaWAN API，支援 500+ 台 IoT 設備資料傳輸',
      '透過 SQS Job Queue 解耦非同步任務',
      '建立 1,300+ Jest 測試，達 78% 覆蓋率',
    ],
  },
  {
    title: 'Buildmoat Course Bot',
    category: 'Discord · AI',
    description:
      'Discord AI 課程助理機器人，整合 RAG 與意圖分類自動回應系統設計課程問題，服務 ~300 名學生。',
    techStack: ['TypeScript', 'LangChain', 'Groq', 'RAG', 'Discord.js'],
    liveUrl: 'https://www.buildmoat.org',
    highlights: [
      '整合 RAG 向量搜尋提升回答準確率',
      '意圖分類自動路由不同問題類型',
      '服務 300+ 名 System Design Bootcamp 學生',
    ],
  },
  {
    title: 'AmieRoad',
    category: 'EdTech · WordPress',
    description:
      '英文教育網站，整合會員訂閱、角色權限與購物折扣機制，支援線上內容與付費功能，服務約 250 名學生。',
    techStack: ['WordPress', 'PHP', 'WooCommerce', 'Ultimate Member'],
    liveUrl: 'https://www.amieroad.com',
    highlights: [
      '設計會員訂閱與角色權限系統',
      '整合 WooCommerce 訂閱折扣商業流程',
      '服務 250+ 名付費學生',
    ],
  },
]