import mongoose from "mongoose";
import { configDotenv } from "dotenv";

configDotenv();

const mongodbURI = process.env.MONGO_URI;

const connectToDB = async () => {
    try {
        await mongoose.connect(mongodbURI, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log("connected to db.");
    } catch (error) {
        console.error("error occured during connecting to db.", error);
    }
};

export default connectToDB;
