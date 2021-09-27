const express = require('express');

const { getAllNews, updateNewsReadStatus, resetReadStatus } = require('../controllers/news.controller');

const router = express.Router();

//GET - all news
router.get('/', getAllNews);

//PUT - mark news as read with id
router.put('/read', updateNewsReadStatus);

//PUT - mark news as read
router.put('/reset', resetReadStatus);

module.exports = router;
