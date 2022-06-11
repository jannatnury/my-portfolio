import { Route, Routes } from 'react-router-dom';
import './App.css';
import AboutMe from './PortfolioContainer/AboutMe';
import Blogs from './PortfolioContainer/Blogs';
import Contact from './PortfolioContainer/Contact';
import DynamicProject from './PortfolioContainer/DynamicProject';
import Home from './PortfolioContainer/Home';
import NotFound from './PortfolioContainer/NotFound';
import Footer from './Shared/Footer';
import Navbar from './Shared/Navbar';

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/about' element={<AboutMe/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/blogs' element={<Blogs/>}></Route>
        <Route path="/projects/:id" element={   
            <DynamicProject/>
        }>
        </Route>
        <Route path='*' element={<NotFound/>}></Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
