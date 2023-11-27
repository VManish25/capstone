const mongoose = require("mongoose");
const colors = require("colors");
require("dotenv").config()
const connectDB = async() => {
try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false,
    });

    console.log(`MongoDB connected: ${conn.connection.host}`.cyan.underline);
} catch (error) {
    console.error(`Error: ${error.message}`.red.bold);
    process.exit(1);
}
};

module.exports = connectDB;