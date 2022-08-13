// import "./App.css";
import SignUpForm from "./components/SignUp";
import Contact from "./components/SignUp/contact";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { UserType } from "./Pages";
import About from "./components/Stepper/About";
import Stage from "./components/Stepper/Stage";
import ContactInfo from "./Pages/ContactInfo/index"
import SignUp from "./Pages/SignUp/index";

import BasicInfo from "./Pages/BasicInfo";
import Invest from "./components/Investors";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/user-type" element={<UserType />} />
        <Route exact path="/sign-up" element={<SignUp />} />
        <Route exact path="/contact" element={<ContactInfo />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/stage" element={<Stage />} />

        <Route exact path="/basic-info" element={<BasicInfo />} />

        {/*Investor Route*/}
        <Route exact path="/invest" element={<Invest/>}/>
      </Routes>
    </div>
  );
}

export default App;
