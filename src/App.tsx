import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ScrollToTop } from '@/components/layout/ScrollToTop';
import { LandingPage1 } from '@/pages/LandingPage1';
import { LandingPage2 } from '@/pages/LandingPage2';
import { LandingPage3 } from '@/pages/LandingPage3';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-white">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Navigate to="/landingpage1" replace />} />
            <Route path="/landingpage1" element={<LandingPage1 />} />
            <Route path="/landingpage2" element={<LandingPage2 />} />
            <Route path="/landingpage3" element={<LandingPage3 />} />
            <Route path="*" element={<Navigate to="/landingpage1" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
