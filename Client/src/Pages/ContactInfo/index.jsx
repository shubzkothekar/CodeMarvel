import { Box, TextField, Button } from "@mui/material";
import React from "react";
import { useState } from "react";
import MuiPhoneNumber from "material-ui-phone-number";

const ContactInfo = () => {
	const [email, setEmail] = useState("");
	const [website, setWebiste] = useState("");
	const [mobile, setMobile] = useState("");
	const [city, setCity] = useState("");
	return (
		<div style={{ margin: "20% 25% 25% 25%" }}>
			<Box
				component="form"
				sx={{
					"& > :not(style)": { m: 1, width: "100%" },
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
					onChange={(e) => setWebiste(e.target.value)}
				/>
				<TextField
					id="outlined-basic"
					label="City"
					variant="outlined"
					onChange={(e) => setCity(e.target.value)}
				/>

				<MuiPhoneNumber
					variant="outlined"
					regions={["america", "europe", "asia", "oceania", "africa"]}
					label="Phone"
					defaultCountry={"in"}
					onChange={(e) => setMobile(e.target.value)}
				/>
				<Button
					sx={{
						background: "#FF725E",
						padding: "8px",
						color: "white",
						"&:hover": {
							backgroundColor: "#FF725E",
							color: "white",
						},
					}}
					variant="contained"
				>
					Next
				</Button>
			</Box>
		</div>
	);
};

export default ContactInfo;
