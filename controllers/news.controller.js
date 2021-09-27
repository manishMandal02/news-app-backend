const asyncHandler = require('express-async-handler');

const { News } = require('../models/news.model');

//@desc get all news
//@route GET /api/news/
//@access Public
module.exports.getAllNews = asyncHandler(async (req, res) => {
  const news = await News.find({}).sort({ publishedDate: -1 });
  if (news.length > 0) {
    // news filter by date, time & read status *didn't create a utils fn as this is an assignment
    let allNews = news.filter((news) => news.isRead === false);
    // extracting the read news
    const readNews = news.filter((news) => news.isRead === true);
    // filtering the read news by date and time
    readNews.sort((a, b) =>
      new Date(b.publishedDate).getTime() > new Date(a.publishedDate).getTime()
        ? 1
        : new Date(a.publishedDate).getTime() > new Date(b.publishedDate).getTime()
        ? -1
        : 0
    );

    //merging the read news at the end of allNews array
    allNews = [...allNews, ...readNews];

    res.status(201);
    res.json({ status: 'success', news: allNews });
  } else {
    res.status(400);
    throw new Error('No news found');
  }
});

//@desc update news read status
//@route PUT /api/news/read
//@access Public
module.exports.updateNewsReadStatus = asyncHandler(async (req, res) => {
  const news = await News.findById(req.query.id);
  if (news) {
    news.isRead = true;
    await news.save();
    res.status(201);
    res.json({ status: 'success' });
  } else {
    res.status(400);
    throw new Error('News not found');
  }
});

//@desc update news read status
//@route PUT /api/news/read
//@access Public
module.exports.resetReadStatus = asyncHandler(async (req, res) => {
  await News.updateMany({ isRead: { $ne: false } }, { $set: { isRead: false } });
  res.json({ status: 'success' });
});
