import {MongoClient} from "mongodb"

const MONGO_URI = "mongodb://localhost:27017";
const DATABASE = "mindx-technology-school";

const db = {};

const connectToDatabase = async () => {
    try {
        const mongoClient = new MongoClient(MONGO_URI);
        await mongoClient.connect();

        console.log("Connected to database successfully");
        const database = mongoClient.db(DATABASE);
        db.posts = database.collection("posts");
        db.todos = database.collection("todos");
    } catch (error) {
        console.error("Error connecting to database".error);
        process.exit(1);
    };

}

export {connectToDatabase, db}