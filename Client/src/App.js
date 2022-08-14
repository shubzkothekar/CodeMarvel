// import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { UserType } from "./Pages";
import ContactInfo from "./Pages/ContactInfo/index";
import SignUp from "./Pages/SignUp/index";
import BasicInfo from "./Pages/BasicInfo";
import Categories from "./Pages/Categories";
import Login from "./Pages/Login/index";
import LandingPage from "./Pages/LandingPage/LandingPage";
import UserProfile from "./Pages/UserProfile/index"
import { Navbar } from "./Pages/Navbar";
import {Chats} from "./Pages/Chats"

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
        <Route path="/user-profile" element={<UserProfile/>}/>
		<Route path="/navbar" element={<Navbar/>}/>
		<Route path="/chats" element={<Chats/>}/>
			</Routes>
		</div>
	);
}

export default App;
