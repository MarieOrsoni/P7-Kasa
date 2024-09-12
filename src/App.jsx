import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/index.jsx";
import Header from "./components/Header/header.jsx";
import Error from "./pages/Error/index.jsx";
import Footer from "./components/Footer/index.jsx";
import AboutUs from "./pages/AboutUs/AboutUs.jsx";
import Portfolio from "./components/Portfolio/index.jsx";
import PropertyDetails from "./pages/Accommodation/index.jsx";


import './App.scss';

function App() {
  return (
     <BrowserRouter> 
     <Header />

      <Routes> 
      <Route path="/" element={<Home />}></Route>    
      <Route path="/Footer" element={<Footer />}></Route>
      <Route path="/AboutUs" element={<AboutUs />}></Route>
      <Route path="/Properties" element={<Portfolio />}></Route>
      <Route path="/Accommodation/:id" element={<PropertyDetails />}></Route>

       

      <Route path="*" element={<Error />}></Route>
      
      </Routes>
      <Footer />
      </BrowserRouter>
      
  );
}
export default App;