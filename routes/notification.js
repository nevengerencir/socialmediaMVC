const express = require('express');
const router = express.Router();
const notificationController = require('../controllers/notification')

router.get('/',notificationController.getIndex)
router.put('/likeOne',notificationController.likeOne)
router.put('/dislikeOne',notificationController.dislikeOne)
router.put('/markSeen',notificationController.markSeen)
router.delete('/deleteOne',notificationController.deleteOne)

module.exports = router