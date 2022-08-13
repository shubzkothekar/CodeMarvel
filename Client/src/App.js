
import './App.css';
import SignUpForm from './components/SignUp';
import Contact from './components/SignUp/contact';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {

  return (
    <Router>
    <div className="App">
    <Routes>
    <Route exact path="/" element={<SignUpForm/>}/>
    <Route exact path="/contact" element={<Contact/>}/>
    </Routes>
    
    </div>
    </Router>
  );
}

export default App;
