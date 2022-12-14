import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { AiTwotoneMail } from "react-icons/ai";
import { BsFillTelephoneInboundFill } from "react-icons/bs";
import { CgWebsite } from "react-icons/cg";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import { useParams } from "react-router-dom";
import axios from "axios";

const Item = styled(Paper)(({ theme }) => ({
	backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
	...theme.typography.body2,
	padding: theme.spacing(1),
	textAlign: "center",
	color: theme.palette.text.secondary,
}));

export default function BasicGrid() {
	let { id } = useParams();
	const [loading, setLoading] = React.useState(true);
	const [data, setData] = React.useState();

	React.useEffect(() => {
		axios
			.post("http://localhost:3000/profile", { _id: id })
			.then((res) => {
				console.log(res);
				if (res.data !== "") {
					setData(res.data);
					setLoading(false);
				}
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	return loading ? (
		<div></div>
	) : (
		<div style={{ marginTop: "3%", marginLeft: "5%", marginRight: "5%" }}>
			<Box>
				<Grid container spacing={2}>
					<Grid item xs={12} md={4} sm={4}>
						<Card sx={{ width: "100%" }}>
							<CardMedia
								component="img"
								height="210"
								image={data.image}
								alt="green iguana"
							/>
							<CardContent>
								<Typography gutterBottom variant="h5" component="div">
									{data.name}
								</Typography>
								<Typography variant="body2" color="text.secondary">
									{data.about}
								</Typography>
								<br></br>
								{/*<Button
									sx={{
										background: "#FF725E",
										padding: "8px",
										width: "100%",
										color: "white",
										"&:hover": {
											backgroundColor: "#FF725E",
											color: "white",
										},
									}}
									variant="contained"
								>
									Message
								</Button>*/}
							</CardContent>
						</Card>
					</Grid>
					<Grid item xs={12} md={8} sm={8}>
						<Card>
							<Box>
								<CardContent sx={{ flex: "1 0 auto" }}>
									<Typography
										variant="subtitle2"
										color="text.secondary"
										component="div"
										sx={{ padding: "2%" }}
									>
										Preferred Stage:
										<Stack direction="row" spacing={1} sx={{ padding: "1%" }}>
											{data.stage.map((el, index) => (
												<Chip key={index} label={el} />
											))}
										</Stack>
									</Typography>
									<Typography
										variant="subtitle2"
										color="text.secondary"
										component="div"
										sx={{ padding: "2%" }}
									>
										Industry:
										<Stack direction="row" spacing={1} sx={{ padding: "1%" }}>
											{data.industries.map((el, index) => (
												<Chip key={index} label={el} />
											))}
										</Stack>
									</Typography>
									<Typography
										variant="subtitle2"
										color="text.secondary"
										component="div"
										sx={{ padding: "2%" }}
									>
										Interests:
										<Stack direction="row" spacing={1} sx={{ padding: "1%" }}>
											{data.interests.map((el, index) => (
												<Chip key={index} label={el} />
											))}
										</Stack>
									</Typography>
									<hr></hr>
									<Typography
										variant="subtitle1"
										color="text.secondary"
										component="div"
										sx={{ padding: "2%" }}
									>
										<CgWebsite /> Website : {data.website}
									</Typography>
									<Typography
										variant="subtitle1"
										color="text.secondary"
										component="div"
										sx={{ padding: "2%" }}
									>
										<AiTwotoneMail /> Email : {data.contactEmail}
									</Typography>
									<Typography
										variant="subtitle1"
										color="text.secondary"
										component="div"
										sx={{ padding: "2%" }}
									>
										<BsFillTelephoneInboundFill /> Phone : {data.mobile}
									</Typography>
								</CardContent>
							</Box>
						</Card>
					</Grid>
				</Grid>
			</Box>
		</div>
	);
}
