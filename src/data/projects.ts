import type { Project } from '../types/project'

export type { Project } from '../types/project'

export const projects: readonly Project[] = [
  {
    title: 'Infodeck IoT Platform',
    category: 'IoT · SaaS',
    description:
      '企業級 IoT 設備管理 SaaS 平台，支援 500+ 台設備即時監控，整合 LoRaWAN 網路伺服器與資產工單管理。',
    techStack: ['Vue 3', 'TypeScript', 'Node.js', 'AWS IoT', 'DynamoDB', 'gRPC'],
    links: [
      { label: 'Official Website ', href: 'https://www.infodeck.io/' },
      { label: 'Live Demo', href: 'https://app.infodeck.io/' },
      { label: 'API Doc', href: 'https://app.infodeck.io/api-docs' },
    ],
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
    title: 'Buildmoat 程式實戰營助教',
    category: 'Bootcamp · Community',
    description:
      '擔任程式實戰營助教，於約 500 人規模技術社群中，透過程式碼解析與問題拆解，協助 100+ 名學員提升解題與實作能力。',
    techStack: ['Mentoring', 'TypeScript', 'System Design'],
    liveUrl: 'https://www.buildmoat.org',
    highlights: [
      '於約 500 人規模技術社群中帶領實戰練習與答疑',
      '以程式碼解析與問題拆解協助學員建立解題思路',
      '累積協助 100+ 名學員強化解題與實作能力',
    ],
  },
  {
    title: 'AlphaLab（阿爾發實驗室）',
    category: 'FinTech · WordPress',
    description:
      '使用 WordPress 與 PHP 自訂模板，優化網站前端介面與內容呈現，提供加密貨幣與金融投資平台的教學與操作指南。',
    techStack: ['WordPress', 'PHP', 'HTML/CSS'],
    liveUrl: 'https://alphalab.site',
    highlights: [
      '開發與維護 WordPress 模板，提升頁面排版與使用者體驗',
      '整合文章分類與共用卡片元件，展示各分類下之平台教學內容',
      '優化前端排版與圖文呈現，使資訊更直觀易讀',
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
  {
    title: '個人作品集（本網站）',
    category: 'React · Frontend',
    description:
      '以 React、TypeScript 與 Vite 建立個人作品集，含自動化測試與 CI/CD。',
    techStack: ['React', 'TypeScript', 'Vite', 'Vitest', 'GitHub Actions'],
    liveUrl: 'https://allenli0110.github.io/allen-portfolio/',
    githubUrl: 'https://github.com/AllenLi0110/allen-portfolio',
    highlights: [
      'React Router、懶載入、404 與 Error Boundary 等路由與容錯',
      'Vitest、ESLint 與 GitHub Actions 串接 lint／測試／建置與 GitHub Pages 部署',
      '深色模式、響應式版面與專案技術篩選等互動體驗',
    ],
  },
]