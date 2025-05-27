const mongoose = require("mongoose");

// Optional: Log the DB connection string (be careful with credentials in production)
console.log("Connecting to MongoDB:", process.env.DB);

mongoose.connect(process.env.DB)
  .then(() => console.log("MongoDB connected successfully"))
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });

module.exports = mongoose;