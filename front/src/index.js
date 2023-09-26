import React from 'react';
import './style.css';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Header from './components/header';
import Error from './pages/error';
import Footer from './components/footer';
import Accommodation from './pages/accommodation';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/accommodation/:accommodationId" element={<Accommodation />} />
        <Route path='*' element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)
