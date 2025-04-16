import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Import delle pagine
import Home from './pages/Home';
import ChiSiamo from './pages/ChiSiamo';
import Posts from './pages/Posts';

const App = () => {
  return (
    <BrowserRouter>
      {/* Definizione delle rotte SPA */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chi-siamo" element={<ChiSiamo />} />
        <Route path="/posts" element={<Posts />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
