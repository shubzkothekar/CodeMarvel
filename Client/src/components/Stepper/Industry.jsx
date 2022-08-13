import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Chip from "@mui/material/Chip";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
	PaperProps: {
		style: {
			maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
			width: "250",
		},
	},
};

const names = ["Ideation", "Validation", "Early traction", "Scaling"];

function getStyles(name, IdeaName, theme) {
	return {
		fontWeight:
			IdeaName.indexOf(name) === -1
				? theme.typography.fontWeightRegular
				: theme.typography.fontWeightMedium,
	};
}

export default function Stage() {
	const theme = useTheme();
	const [IdeaName, setIdeaName] = React.useState([]);

	const handleChange = (event) => {
		const {
			target: { value },
		} = event;
		setIdeaName(
			// On autofill we get a stringified value.
			typeof value === "string" ? value.split(",") : value
		);
	};

	return (
		<FormControl sx={{ width: "80vw" }}>
			<InputLabel id="demo-multiple-chip-label">
				Preffered Startup Stage
			</InputLabel>
			<Select
				labelId="demo-multiple-chip-label"
				id="demo-multiple-chip"
				multiple
				value={IdeaName}
				onChange={handleChange}
				input={
					<OutlinedInput
						id="select-multiple-chip"
						label="Preffered Startup Stage"
					/>
				}
				renderValue={(selected) => (
					<Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
						{selected.map((value) => (
							<Chip key={value} label={value} />
						))}
					</Box>
				)}
				MenuProps={MenuProps}
			>
				{names.map((name) => (
					<MenuItem
						key={name}
						value={name}
						style={getStyles(name, IdeaName, theme)}
					>
						{name}
					</MenuItem>
				))}
			</Select>
		</FormControl>
	);
}
