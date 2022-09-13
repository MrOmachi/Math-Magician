import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Calculator from './components/Calculator';
import Home from './components/pages/Home';
import Quotes from './components/Quotes';

// eslint-disable-next-line react/prefer-stateless-function
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Math-Magician" element={<Home />} />
        <Route path="Calculator" element={<Calculator />} />
        <Route path="Qoutes" element={<Quotes />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
