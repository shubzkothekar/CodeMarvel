const { MongoClient, ServerApiVersion } = require("mongodb");
const uri =
	"mongodb+srv://codefury:codefury5.0@cluster0.3dn0dmu.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	serverApi: ServerApiVersion.v1,
});

client.connect((err) => {
	if (err) {
		console.log(err);
	} else {
		console.log("db connected");
	}
});

// const dbconnect = async () => {
// 	if (connection) {
// 		console.log("db connected");
// 		return connection;
// 	} else {
// 		client.connect(async (err, cl) => {
// 			if (!err) {
// 				connection = await cl.db("codefury");
// 				console.log("db connected");
// 				return connection;
// 			} else {
// 				console.log(err);
// 			}
// 		});
// 	}
// };

module.exports = client;
