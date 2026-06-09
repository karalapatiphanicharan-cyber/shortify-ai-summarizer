const express = require('express');
const router = express.Router();
const { getHealth, summarizeText } = require('../controllers/summaryController');

router.get('/health', getHealth);
router.post('/summarize', summarizeText);

module.exports = router;
