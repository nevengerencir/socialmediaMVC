const express = require('express');
const router = express.Router();
const notificationController = require('../controllers/notification')
router.get('/',notificationController.getIndex)
router.put('/like',notificationController.like)
router.put('/markSeen',notificationController.markSeen)
module.exports = router