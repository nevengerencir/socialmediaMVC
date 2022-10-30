const express = require('express');
const router = express.Router();
const notificationController = require('../controllers/notification')
const { ensureAuth } = require('../middleware/auth')


router.get('/', ensureAuth, notificationController.getIndex)
router.put('/likeOne',notificationController.likeOne)
router.put('/dislikeOne',notificationController.dislikeOne)
router.put('/markSeen',notificationController.markSeen)
router.delete('/deleteOne',notificationController.deleteOne)

module.exports = router