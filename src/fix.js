const fs = require('fs');
const files = [
  'src/pages/Style6Page.tsx',
  'src/pages/Style5Page.tsx',
  'src/pages/Style2Page.tsx',
  'src/pages/AnalyticsPage.tsx',
  'src/features/dashboard/components/TrendAnalyticsPanel.tsx',
  'src/features/dashboard/components/KpiSummary.tsx',
  'src/features/dashboard/components/ExecutiveKpiBar.tsx',
  'src/features/dashboard/components/AiInsightPanel.tsx',
  'src/mocks/data/dashboard.ts'
];

files.forEach(f => {
  if (fs.existsSync(f)) {
    let content = fs.readFileSync(f, 'utf8');
    content = content.replace(/종합 성과 지수:/g, "'종합 성과 지수':");
    fs.writeFileSync(f, content);
  }
});
