import mongoose from "mongoose";

const dbConnect = async () => {
    try {
        console.log(process.env.MONGO_URI)
        await mongoose.connect(<string>process.env.MONGO_URI)
        console.log("DB CONNECTED");

    }
    catch (e) {
        console.log("DB not connected");
        process.exit(1)

    }
}

export default dbConnect