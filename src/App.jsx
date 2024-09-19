import { BrowserRouter as Router } from "react-router-dom";

import Header from "./components/Header/header.jsx";
import RouterComponent from "./components/Router/index.jsx";
import Footer from "./components/Footer/index.jsx";



import './styles/App.scss'

function App() {
  return (
      <div className="main-container">
     <Router> 
     <Header />
     <RouterComponent />
      <Footer />
      </Router>
      </div>
  );
}
export default App;