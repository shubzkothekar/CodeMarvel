import { Box, TextField, Button } from "@mui/material";
import React from "react";
import { useState } from "react";
import MuiPhoneNumber from "material-ui-phone-number";
import axios from "axios";

const ContactInfo = () => {
	const [email, setEmail] = useState("");
	const [website, setWebsite] = useState("");
	const [mobile, setMobile] = useState("");
	const [loading, setLoading] = useState(false);

	const signUp = () => {
		const { getItem } = localStorage;

		const data = {
			email: localStorage.getItem("email"),
			password: localStorage.getItem("password"),
			type: localStorage.getItem("type"),
			image: localStorage.getItem("image"),
			name: localStorage.getItem("name"),
			about: localStorage.getItem("about"),
			stage: JSON.parse(localStorage.getItem("stage")),
			industries: JSON.parse(localStorage.getItem("industries")),
			interests: JSON.parse(localStorage.getItem("interests")),
			contactEmail: localStorage.getItem("contactEmail"),
			website: localStorage.getItem("website"),
			mobile: localStorage.getItem("mobile"),
		};
		return axios.post("http://localhost:3000/signup", data);
	};

	const handleNext = () => {
		localStorage.setItem("contactEmail", email);
		localStorage.setItem("website", website);
		localStorage.setItem("mobile", mobile);

		signUp()
			.then((result) => console.log(result))
			.catch((err) => console.log(err));
	};

	return (
		<div style={{ margin: "15% 25% 12% 25%" }}>
			<Box
				component="form"
				sx={{
					"& > :not(style)": { m: 2, width: "100%" },
				}}
				noValidate
				autoComplete="off"
			>
				<TextField
					label="Email"
					variant="outlined"
					required={true}
					onChange={(e) => setEmail(e.target.value)}
				/>
				<TextField
					id="outlined-basic"
					label="Website"
					variant="outlined"
					onChange={(e) => setWebsite(e.target.value)}
				/>
				{/*<TextField
					id="outlined-basic"
					label="City"
					variant="outlined"
					onChange={(e) => setCity(e.target.value)}
			/>*/}

				<MuiPhoneNumber
					variant="outlined"
					regions={["america", "europe", "asia", "oceania", "africa"]}
					label="Phone"
					defaultCountry={"in"}
					value={mobile}
					onChange={setMobile}
				/>
				<Button
					onClick={() => handleNext()}
					sx={{
						background: "#FF725E",
						padding: "12px",
						color: "white",
						"&:hover": {
							backgroundColor: "#FF725E",
							color: "white",
						},
					}}
					variant="contained"
				>
					Finish
				</Button>
			</Box>
		</div>
	);
};

export default ContactInfo;
