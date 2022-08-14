const express = require("express");
const client = require("./db");
const cors = require("cors");
const { signup, login, profile, find } = require("./api/index");

const app = express();
app.use(
	express.json({
		limit: "50mb",
	})
);
app.use(cors());

app.post("/signup", signup);
app.post("/login", login);
app.post("/profile", profile);
app.post("/find", find);

app.listen(3000, async () => {
	console.log("listening");
});
