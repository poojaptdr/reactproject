
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Header'
import Home from './Home'
import Contact from './Contact'
import About from './About'
import Service from './Service'
import Footer from './Footer'

function App() {
  return (
    <>
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/about' element={<About />} />
          <Route path='/service' element={<Service />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
