import { BrowserRouter as Router } from "react-router-dom";
import RouterComponent from "./components/Router/index.jsx";
import Header from "./components/Header/header.jsx";
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