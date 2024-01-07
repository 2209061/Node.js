var MongoClient = require('mongodb').MongoClient;

var URL = "mongodb+srv://nafizDemo:I5Gh918btAwcEUCb@cluster0.4nghczq.mongodb.net/?retryWrites=true&w=majority";

MongoClient.connect(URL, function (error, MyMongoClient) {
    if (error) {
        console.log("Connection Fail", error);
    } else {
        console.log("Connection Success");
        InsertData(MyMongoClient);
    }
});

function InsertData(MyMongoClient) {
    var MyDataBase = MyMongoClient.db("school");
    var MyCollection = MyDataBase.collection("Students");

    var MyData = { name: "Nafiz", Roll: "01", Class: "12" };

    MyCollection.insertOne(MyData, function (error) {
        if (error) {
            console.log("Insert Fail", error);
        } else {
            console.log("Insert Success");
        }

        // Close the MongoClient connection after completing operations
        MyMongoClient.close();
    });
}