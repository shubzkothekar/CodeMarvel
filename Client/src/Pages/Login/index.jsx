import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
const index = () => {
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
					id="outlined-basic"
					type="email"
					label="Email"
					variant="outlined"
				/>
				<TextField
					id="outlined-basic"
					type="password"
					label="Password"
					variant="outlined"
				/>

				<Button
					onClick={() => (window.location.href = "/user-type")}
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
					Login
				</Button>
			</Box>
		</div>
	);
};

export default index;
