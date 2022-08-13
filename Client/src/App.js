import "./App.css";
import SignUpForm from "./components/SignUp";
import Contact from "./components/SignUp/contact";
import { Routes, Route } from "react-router-dom";
import { SignUp } from "./Pages";
import Stage from "./components/Stepper/Stage";

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<SignUp />} />
				<Route exact path="/sign-up" element={<SignUpForm />} />
				<Route exact path="/contact" element={<Contact />} />

				<Route exact path="/stage" element={<Stage />} />
			</Routes>
		</div>
	);
}

export default App;
