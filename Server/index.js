const express = require("express");
const client = require("./db");
const cors = require("cors");
const { signup } = require("./api/index");

const app = express();
app.use(express.json());
app.use(cors());

app.post("/signup", signup);

app.listen(3000, async () => {
	console.log("listening");
});
