import { Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Home, About, Contact, Pricing, Error } from './pages';
import styled from 'styled-components';
import './index.css';
import Footer from './components/Footer';

function App() {
  const location = useLocation();

  return (
    <Wrapper>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </Wrapper>
  );
}

const Wrapper = styled.section`
  @media (min-width: 768px) {
  }
  @media (min-width: 1200px) {
  }
`;

export default App;
