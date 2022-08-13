import {
	TextField,
	Select,
	InputLabel,
	MenuItem,
	FormControl,
	Grid,
	Button,
} from "@mui/material";
import React, { useState } from "react";

function Contact() {
	const data = {
		email: "",
		city: "",
		website: "",
		mobile: "",
		password: "",
		confirm: "",
		statename: "",
	};

	const [email, setEmail] = useState("");
	const [city, setCity] = useState("");
	const [website, setWebiste] = useState("");
	const [mobile, setMobile] = useState("");
	const [password, setPassword] = useState("");
	const [confirm, setConfirm] = useState("");
	const [statename, setStateName] = useState("");
	const handleSubmit = () => {};
	// console.log(imageUrl)
	return (
		<div>
			<div className="form">
				<Grid item xs={12} md={8}>
					<TextField
						label="Email"
						variant="outlined"
						fullWidth
						style={{ height: "5px " }}
						required={true}
						onChange={(e) => setEmail(e.target.value)}
					/>
				</Grid>
				<br></br>
				<br></br>
				<Grid item xs={12} md={8}>
					<TextField
						label="City"
						variant="outlined"
						fullWidth
						style={{ height: "5px " }}
						required={true}
						onChange={(e) => setCity(e.target.value)}
					/>
				</Grid>
				<br></br>
				<br></br>
				<FormControl fullWidth>
					<InputLabel id="demo-simple-select-label">State</InputLabel>
					<Select
						id="margin-normal"
						margin="normal"
						label="Stage"
						required={true}
						onChange={(e) => setStateName(e.target.value)}
					>
						<MenuItem value="Ideation">Ideation</MenuItem>
						<MenuItem value="Validation">Validation</MenuItem>
						<MenuItem value="Early">Early</MenuItem>
						<MenuItem value="Traction">Traction</MenuItem>
					</Select>
				</FormControl>
				<br></br>
				<br></br>
				<Grid item xs={12} md={8}>
					<TextField
						id="outlined-basic"
						fullWidth
						label="Website"
						variant="outlined"
						required={true}
						onChange={(e) => setWebiste(e.target.value)}
					/>
				</Grid>
				<br></br>
				<Grid item xs={12} md={8}>
					<TextField
						id="outlined-basic"
						fullWidth
						label="Phone"
						variant="outlined"
						type="phone"
						required={true}
						onChange={(e) => setMobile(e.target.value)}
					/>
				</Grid>
				<br></br>
				<Grid item xs={12} md={8}>
					<TextField
						id="outlined-basic"
						fullWidth
						label="Password"
						variant="outlined"
						type="password"
						required={true}
						onChange={(e) => setPassword(e.target.value)}
					/>
				</Grid>
				<br></br>
				<Grid item xs={12} md={8}>
					<TextField
						id="outlined-basic"
						fullWidth
						label=" Confirm Password"
						variant="outlined"
						type="password"
						required={true}
						onChange={(e) => setConfirm(e.target.value)}
					/>
				</Grid>{" "}
				<Button
					style={{ marginTop: "20px", width: "100%" }}
					variant="raised"
					onClick={handleSubmit}
				>
					Submit
				</Button>
			</div>
		</div>
	);
}

export default Contact;
