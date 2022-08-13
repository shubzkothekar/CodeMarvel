import './App.css';
import SignUpForm from './components/SignUp';
import Contact from './components/SignUp/contact';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { SignUp } from './Pages';

function App() {

  return (
   
    <div className="App">
    <Routes>
     <Route path="/" element={<SignUp/>}/>
    <Route exact path="/sign-up" element={<SignUpForm/>}/>
    <Route exact path="/contact" element={<Contact/>}/>
    </Routes>
    </div>
   
  );
}

export default App;
