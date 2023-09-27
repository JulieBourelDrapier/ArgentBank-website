import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Header from './components/header';
import Home from './pages/home';
import SignIn from './pages/signIn';
import User from './pages/user';
import Footer from './components/footer';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/user" element={<User />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)
