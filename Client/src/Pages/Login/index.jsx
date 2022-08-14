import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import axios from "axios";
const Login = () => {
	const [email, setEmail] = React.useState("");
	const [password, setPassword] = React.useState("");

	if (
		localStorage.getItem("user") !== "null" &&
		localStorage.getItem("user") !== null
	) {
		window.location.href = "/navbar";
	}

	const loginHandler = () => {
		axios
			.post("http://localhost:3000/login", {
				email: email,
				password: password,
			})
			.then((res) => {
				console.log(res);
				if (res.data !== "") {
					localStorage.setItem("user", res.data._id);
					window.location.href = "/navbar";
				} else {
					localStorage.setItem("user", null);
				}
			})
			.catch((err) => console.log(err));
	};

	return (
		<div style={{ margin: "20% 25% 25% 25%" }}>
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
					onChange={(e) => setEmail(e.target.value)}
				/>
				<TextField
					id="outlined-basic"
					type="password"
					label="Password"
					variant="outlined"
					onChange={(e) => setPassword(e.target.value)}
				/>

				<Button
					onClick={() => loginHandler()}
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
					Login
				</Button>
			</Box>
		</div>
	);
};

export default Login;
