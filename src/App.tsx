import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ScrollToTop } from '@/components/layout/ScrollToTop';
import { Home } from '@/pages/Home';
import { ChiSiamo } from '@/pages/ChiSiamo';
import { Alloggi } from '@/pages/Alloggi';
import { LavoraConNoi } from '@/pages/LavoraConNoi';
import { Contatti } from '@/pages/Contatti';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-white">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/chi-siamo" element={<ChiSiamo />} />
            <Route path="/alloggi" element={<Alloggi />} />
            <Route path="/lavora-con-noi" element={<LavoraConNoi />} />
            <Route path="/contatti" element={<Contatti />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
