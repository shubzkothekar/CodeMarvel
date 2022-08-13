import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import placeholderImg from "./imgplaceholder.jpeg";
const BasicInfo = () => {
	const [img, setImg] = React.useState(placeholderImg);
	const [name, setName] = React.useState("");
	const [about, setAbout] = React.useState("");

	const selectFile = () => {
		document.getElementById("userImg").click();
	};

	function renderImg(e) {
		const files = e.target.files[0];
		if (files) {
			const fileReader = new FileReader();
			fileReader.readAsDataURL(files);
			fileReader.addEventListener("load", function () {
				setImg(this.result);
			});
		}
	}

	const handleNext = () => {
		localStorage.setItem("image", img);
		localStorage.setItem("name", name);
		localStorage.setItem("about", about);

		window.location.href = "/categories";
	};

	return (
		<div style={{ margin: "3% 25% 3% 25%" }}>
			<Box
				component="form"
				sx={{
					"& > :not(style)": { m: 1, width: "100%" },
				}}
				noValidate
				autoComplete="off"
			>
				<input
					id="userImg"
					type="file"
					style={{ display: "none" }}
					required={true}
					onChange={renderImg}
					accept={"image/*"}
				/>
				<img
					style={{ border: "1px dashed black" }}
					src={img}
					onClick={selectFile}
				></img>
				<TextField id="outlined-basic" label="Name" variant="outlined" />
				<TextField
					id="outlined-multiline-static"
					label="About"
					multiline
					rows={4}
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
					Next
				</Button>
			</Box>
		</div>
	);
};

export default BasicInfo;
