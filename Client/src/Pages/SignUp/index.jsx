import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useEffect } from "react";


const SignUp = () => {
	const [email, setEmail] = useState("");
	const [pass, setPass] = useState("");
	const [conPass, setConPass] = useState("");

	const handleNext = () => {
		localStorage.setItem("email", email);
		localStorage.setItem("password", pass);
		window.location.href = "/user-type";
	};

	return (
		
		<div style={{ margin: "15% 25% 15% 25%" }}>
			<Box
				component="form"
				sx={{
					"& > :not(style)": { m: 2, width: "100%" },
				}}
				noValidate
				autoComplete="off"
			>
				<TextField
					id="outlined-basic"
					type="email"
					label="Email"
					variant="outlined"
					onChange={(e) => {
						setEmail(e.target.value);
					}}
				/>
				<TextField
					id="outlined-basic"
					type="password"
					label="Password"
					variant="outlined"
					onChange={(e) => {
						setPass(e.target.value);
					}}
				/>
				<TextField
					id="outlined-basic"
					type="password"
					label="Confirm Password"
					variant="outlined"
					onChange={(e) => {
						setConPass(e.target.value);
					}}
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
					Sign Up
				</Button>
			</Box>
		
		</div>
	);
};

export default SignUp;
