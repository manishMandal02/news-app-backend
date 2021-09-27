const mongoose = require('mongoose');
const colors = require('colors');

const connectDB = async () => {
  try {
    //   update the temporary URI - *after assignmnet
    const conn = await mongoose.connect(
      `mongodb+srv://manish:mandal123@personal.2duks.mongodb.net/newsAppTest?retryWrites=true&w=majority`,
      {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
      }
    );

    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.bold);
  } catch (error) {
    console.error(`Error: ${error.message}`.red.underline.bold);
    process.exit(1);
  }
};

module.exports = { connectDB };
