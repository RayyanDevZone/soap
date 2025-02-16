import RegistrationPage from "./Components/RegistrationPage/RegistrationPage.jsx";
import ConfirmationPage from "./Components/ConfirmationPage/ConfirmationPage.jsx";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MiniRouting from "./MiniRouting";
import './App.css'; // Assuming the CSS is in App.css

const Routing = () => {
  return (
    <div className="background-style">
      <Router>
        <Routes>
          <Route path="/" element={<MiniRouting />} />  
          <Route path="/registration" element={<RegistrationPage />} />  
          <Route path="/confirmation" element={<ConfirmationPage />} />  
        </Routes>
      </Router>
    </div>
  );
}

export default Routing;
