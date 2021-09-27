const { connectDB } = require('./config/db');
const { News } = require('./models/news.model');

const news = require('./data');

// connecting to mongodb
connectDB();

//populates db with news data
const populateNews = async () => {
  try {
    const insertedNews = await News.insertMany(news);
    console.log('News Added');
  } catch (err) {
    console.log(err);
  }
};

populateNews();
