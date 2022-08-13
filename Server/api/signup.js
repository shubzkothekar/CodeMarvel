const client = require("./../db");

module.exports = async (req, res) => {
	try {
		let result = client.db("codefury").collection("users").insertOne(req.body);
		res.status(200).send(result);
	} catch (error) {
		res.json(error);
	}
};
