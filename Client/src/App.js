// import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { UserType } from "./Pages";
import ContactInfo from "./Pages/ContactInfo/index";
import SignUp from "./Pages/SignUp/index";
import BasicInfo from "./Pages/BasicInfo";
import Categories from "./Pages/Categories";
import Login from "./Pages/Login/index";
import LandingPage from "./Pages/LandingPage/LandingPage";

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/user-type" element={<UserType />} />
				<Route exact path="/sign-up" element={<SignUp />} />
				<Route exact path="/contact" element={<ContactInfo />} />
				<Route exact path="/basic-info" element={<BasicInfo />} />
				<Route exact path="/categories" element={<Categories />} />
				<Route exact path="/login" element={<Login />} />
				<Route path="/" element={<LandingPage />} />
			</Routes>
		</div>
	);
}

export default App;
