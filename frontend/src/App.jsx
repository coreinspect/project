import { Routes, Route } from "react-router-dom";
import "./App.css";

import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import TermsOfService from "./pages/tos/Terms";
import HomePage from "./pages/HomePage";
import PrivacyPolicy from "./pages/privacy/Privacy";
import CodeOfConduct from "./pages/coc/Coc";

function App() {
   return (
      <div>
         <Routes>
            <Route index path="/" element={<HomePage />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/tos" element={<TermsOfService />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/coc" element={<CodeOfConduct />} />
         </Routes>
      </div>
   );
}

export default App;
