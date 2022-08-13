import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Industry from "./Industry";
import Stage from "./Stage";
import Interests from "./Interests";

const Categories = () => {
	return (
		<div style={{ margin: "20% 25% 25% 25%" }}>
			<Stage />
			<Industry />
			<Interests />
			<div>
				<Button
					fullwidth
					sx={{
						width: "100%",
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
			</div>
		</div>
	);
};

export default Categories;
