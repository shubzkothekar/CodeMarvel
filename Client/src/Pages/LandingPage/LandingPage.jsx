import React from "react";
// import ReactPlayer from 'react-player'
import "./LandingPage.css";

const LandingPage = () => {
	return (
		<div className="landing-page">
			<div className="background">
				<img src="assets/blob.svg" className="blob" />
			</div>
			<div className="landing-page-content">
				<section className="landing-content">
					<h1>Accelerate your Startup.</h1>
					<p>
						Fuel your start. Run Your Idea is the gateway to Maker's
						first-of-its kind, global network of startup support. A platform
						that connects startups and investors for funding, support, and
						mentorship.
					</p>
					<div className="action-box">
						<button
							onClick={() => (window.location.href = "/login")}
							className="btn-login"
						>
							<strong>Log In</strong>
						</button>
						<button
							onClick={() => (window.location.href = "/sign-up")}
							className="btn-sign-up"
						>
							<strong>Sign Up</strong>
						</button>
					</div>
				</section>
				<section className="header-image-container">
					<img src="assets/sponsor.svg" alt="header-image" />
				</section>
			</div>
		</div>
	);
};
export default LandingPage;
