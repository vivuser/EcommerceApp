import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/pages/layout";
import Home from "./components/pages/home";
import Contact from "./components/pages/Contact";
import Loginreg from "./components/pages/Authen/loginreg";
import SendPasswordResetEmail from "./components/pages/Authen/sendpasswordresetemail";
import ResetPassword from "./components/pages/Authen/resetpaddword";
import Dashboard from "./components/pages/dashboard";



function App() {
  return (
   <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element= {<Home />} />
          <Route path="contact" element= {<Contact />} />
          <Route path="/login" element= {<Loginreg />} />
          <Route path="/password-reset" element= {<SendPasswordResetEmail />} />
          <Route path="reset" element= {<ResetPassword />} />
        </Route>
        <Route path="/dashboard" element= {<Dashboard />} />
        <Route path="*" element={<h1>Error 404 Page Not Found!! </h1>}/>
      </Routes>
    </BrowserRouter>
   </>
  );
}

export default App;
