const { MongoClient, ObjectID } = require("mongodb");

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, db) => {
	//mongodb module v3 (err, client)
	if (err) {
		return console.log("Unable to connect to MongoDB server");
	}
	console.log("Connected to MongoDB server");

	//findOneAndUpdate - returns the document updated as response

	db
		.collection("Users")
		.findOneAndUpdate(
			{ _id: ObjectID("5af212360ed492889227a148") },
			{ $set: { name: "Coldmayo" }, $inc: { age: 1 } },
			{ returnOriginal: false }
		).then(result =>console.log(result));

	// db.collection("Todos").findOneAndUpdate(
	// 	{
	// 		_id: ObjectID("5af210060ed492889227a147")
	// 	},
	// 	{
	// 		$set: {
	// 			completed: true
	// 		}
	// 	},
	// 	{
	// 		returnOriginal: false
	// 	}
	// ).then(result =>console.log(result));

	// db.close();     //v3: client.close();
});
