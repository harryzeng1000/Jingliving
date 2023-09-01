import "./styles.css";
import Navbar from "./components/Navbar"
import Home from "./routes/Home";
import About from "./routes/About";
import Shop from "./routes/Shop";
import Contact from "./routes/Contact";
import { Routes,Route } from "react-router-dom"



export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element = {<Home/>}/>
        <Route path="/contact" element = {<Contact/>}/>
        <Route path="/shop" element = {<Shop/>}/>
        <Route path="/about" element = {<About/>}/>
      </Routes>
      <Navbar/>
        
    </div>
  );
}
