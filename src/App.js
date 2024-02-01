import './App.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from 'react'; 
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/screens/Home';
import About from './components/screens/About';
import Contact from './components/screens/Contact';
import Gallary from './components/screens/Gallary';
import PageNotFound from './components/screens/PageNotFound';
import User from './components/screens/User';


function App() {
  return (
    <Router>
        <NavBar />
      <Routes>
          <Route path='/' element={<Home />} >
            <Route path='home' element={<Home />} />
            <Route path='user' element={<User />} />
            <Route path='user/:id' element={<User />} />
          </Route>
          <Route path='about' element={<About />} />
          <Route path='contact' element={<Contact />} />
          <Route path='gallary' element={<Gallary />} />
          <Route path='*' element={<PageNotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
