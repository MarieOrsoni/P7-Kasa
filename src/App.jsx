import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/index.jsx"
import NavBar from "./components/NavBar/index.jsx";
import Error from "./pages/Error/index.jsx";
import Footer from "./components/Footer/index.jsx";
import AboutUs from "./pages/AboutUs/AboutUs.jsx";
import Gallery from "./components/Gallery/index.jsx";
import PropertyDetails from "./pages/Accommodation/index.jsx"


import './App.scss';

function App() {
  return (
     <BrowserRouter> 
     <NavBar />

      <Routes> 
      <Route path="/" element={<Home />}></Route>    
      <Route path="/Footer" element={<Footer />}></Route>
      <Route path="/AboutUs" element={<AboutUs />}></Route>
      <Route path="/Properties" element={<Gallery />}></Route>
      <Route path="/Accommodation/:id" element={<PropertyDetails />}></Route>

       

      <Route path="*" element={<Error />}></Route>
      
      </Routes>
      <Footer />
      </BrowserRouter>
      
  );
}
export default App;