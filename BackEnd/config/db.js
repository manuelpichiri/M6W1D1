const mongoose = require("mongoose");
require("dotenv").config();

const initConnection = async () => {
  try {
    await mongoose.connect(process.env.DB_URL);
  } catch (error) {
    console.log("db connection error", error);
    throw error;
    process.exit(1);
  }
};

const startServer = async (port, server) => {
  await initConnection();
  server.listen(port, () => {
    console.log(`server running on port ${port}`);
  });
};

module.exports = startServer;
