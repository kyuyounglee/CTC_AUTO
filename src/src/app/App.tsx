// ============================================================
// 앱 루트 — React Router + 레이아웃 (6개 스타일)
// ============================================================

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Providers } from './providers';
import { Sidebar } from '../components/layout/Sidebar';

import { Style1Page } from '../pages/Style1Page';
import { Style2Page } from '../pages/Style2Page';
import { Style3Page } from '../pages/Style3Page';
import { Style4Page } from '../pages/Style4Page';
import { Style5Page } from '../pages/Style5Page';
import { Style6Page } from '../pages/Style6Page';

export function App() {
  return (
    <Providers>
      <BrowserRouter>
        <Sidebar />
        <div className="main-area">
          <Routes>
            <Route path="/" element={<Navigate to="/style1" replace />} />
            <Route path="/style1" element={<Style1Page />} />
            <Route path="/style2" element={<Style2Page />} />
            <Route path="/style3" element={<Style3Page />} />
            <Route path="/style4" element={<Style4Page />} />
            <Route path="/style5" element={<Style5Page />} />
            <Route path="/style6" element={<Style6Page />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Providers>
  );
}
