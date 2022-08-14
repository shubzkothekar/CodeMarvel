import React from "react";
import { useMediaQuery } from "react-responsive";
import styled from "styled-components";
import { Accessibility } from "./accessible";
import { NavLinks } from "./navLinks";
import { DeviceSize } from "./responsive";
import { MobileNavLinks } from "./menuNavLinks";
import axios from "axios";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const NavbarContainer = styled.div`
	height: 60px;
	box-shadow: 0 1px 3px rgba(15, 15, 15, 0.13);
	display: flex;
	align-items: center;
	padding: 0 1.5em;
`;

const LeftSection = styled.div`
	display: flex;
`;

const MiddleSection = styled.div`
	display: flex;
	flex: 2;
	height: 100%;
	justify-content: center;
`;

const RightSection = styled.div`
	display: flex;
`;

export function Navbar(props) {
	const isMobile = useMediaQuery({ maxWidth: DeviceSize.mobile });
	const [data, setData] = React.useState("");

	React.useEffect(() => {
		if (
			localStorage.getItem("menu") !== "null" &&
			localStorage.getItem("menu") !== null
		) {
			axios
				.post("http://localhost:3000/find", {
					type: localStorage.getItem("menu"),
				})
				.then((res) => {
					console.log(res);
					if (res.data !== "") {
						setData(res.data);
					}
				})
				.catch((err) => {
					console.log(err);
				});
		} else {
			axios
				.post("http://localhost:3000/find", {
					type: "STARTUP",
				})
				.then((res) => {
					console.log(res);
					if (res.data !== "") {
						setData(res.data);
					}
				})
				.catch((err) => {
					console.log(err);
				});
		}
	}, [localStorage.getItem("menu")]);
	return (
		<div>
			<NavbarContainer>
				<MiddleSection>{!isMobile && <NavLinks />}</MiddleSection>
				<RightSection>
					{!isMobile && <Accessibility />}
					{isMobile && <MobileNavLinks />}
				</RightSection>
			</NavbarContainer>
			<div style={{ margin: "5%" }}>
				{data !== ""
					? data.map((d) => (
							<Card
								onClick={() => {
									window.location.href = `/user-profile/${d._id}`;
								}}
								sx={{ width: "30%" }}
							>
								<CardMedia
									component="img"
									height="210"
									image={d.image}
									alt="green iguana"
								/>
								<CardContent>
									<Typography gutterBottom variant="h5" component="div">
										{d.name}
									</Typography>
									<Typography variant="body2" color="text.secondary">
										{d.about}
									</Typography>
									<br></br>
								</CardContent>
							</Card>
					  ))
					: ""}
			</div>
		</div>
	);
}
