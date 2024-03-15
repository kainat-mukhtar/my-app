import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./comp/Navbar";
import Tool from "./comp/Tool";
import One from "./comp/One";
import Home from "./comp/Home";
import About from "./comp/About";
import Contact from "./comp/Contact";
import Service from "./comp/Service";
import Footer from './comp/Footer';


function App() {
  return (
    <Router>
      <One/>
      <Navbar/>
      <Tool/>
      <Routes>
        
        <Route path="/" element={<Home/>}/>
       
        <Route path="/tool" element={<Tool/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contatc" element={<Contact/>}/>
        <Route path="/service" element={<Service/>}/>
       
      </Routes>
     
      <Footer/>
      
    </Router>
  );
}

export default App;
