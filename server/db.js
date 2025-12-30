const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://tanishq1807:tigertk1234@cluster0.cavyrzb.mongodb.net/?appName=Cluster0"
    );
    console.log("MongoDB connected");
  } catch (err) {
    console.error("DB connection failed", err);
    process.exit(1);
  }
};

module.exports = connectDB;
