import { renderToString } from 'react-dom/server';
import { MemoryRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesIndexPage } from './pages/ServicesIndexPage';
import { ServiceDetailPage } from './pages/ServiceDetailPage';
import { TargetGroupPage } from './pages/TargetGroupPage';
import { ContactPage } from './pages/ContactPage';

export function render(url: string): string {
  return renderToString(
    <MemoryRouter initialEntries={[url]}>
      <div className="min-h-screen flex flex-col bg-[#FAF7F8] text-[#1F1F1F]">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesIndexPage />} />
            <Route path="/services/:slug" element={<ServiceDetailPage />} />
            <Route path="/target-group" element={<TargetGroupPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </MemoryRouter>
  );
}
