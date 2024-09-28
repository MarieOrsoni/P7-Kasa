import { Routes, Route } from "react-router-dom";
import Home from "../../pages/Home/index.jsx";
import Error404 from "../../pages/Error/index.jsx";
import AboutUs from "../../pages/about-us/about-us.jsx";
import PropertyDetails from "../../pages/Accommodation/index.jsx";

function RouterComponent() {
  return (
    <Routes>
      <Route path="/" element={<Home />} exact />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/accommodation/:id" element={<PropertyDetails />} />  
      <Route path="*" element={<Error404 />} />
    </Routes>
  );
}
export default RouterComponent;
