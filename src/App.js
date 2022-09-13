import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Calculator from './components/Calculator';
import Home from './components/pages/Home';
import Quotes from './components/pages/Quotes';

// eslint-disable-next-line react/prefer-stateless-function
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Calculator" element={<Calculator />} />
        <Route path="Quotes" element={<Quotes />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
