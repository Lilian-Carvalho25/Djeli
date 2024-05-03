import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AboutUs from "./Pages/AboutUs/AboutUs";
import Home from "./Pages/Home/Home";

function RouterApp() {

    return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />}>Home</Route>
          <Route path="/sobrenos" element={<AboutUs />}>Sobre nós</Route>
        </Routes>
      </Router>
  
    )
  }
  
  export default RouterApp