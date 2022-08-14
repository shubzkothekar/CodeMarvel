const client = require("../db");
const { ObjectId } = require("mongodb");

module.exports = async (req, res) => {
	try {
		let result = await client
			.db("codefury")
			.collection("users")
			.findOne({ _id: ObjectId(req.body._id) });
		res.status(200).send(result);
	} catch (error) {
		res.json(error);
	}
};
