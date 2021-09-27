const express = require('express');
const colors = require('colors');
const cors = require('cors');

const { connectDB } = require('./config/db');

const newsRoutes = require('./routes/news.route');

const { notFoundError, errorHandler } = require('./middlewares/errorHandlerMiddleware');

const app = express();

//connecting to mongodb
connectDB();

//using cors for cross-origin support
app.use(cors());

app.options('*', cors());

// index page messsage
app.get('/', (req, res) => {
  res.send('Server is running....');
});

//news routes
app.use('/api/news', newsRoutes);

//error middleware for not found errors
app.use(notFoundError);
//error middleware
app.use(errorHandler);

const PORT = 8000;

app.listen(PORT, console.log(`Server running on Port ${PORT}`.green.bold));
