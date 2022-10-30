const express = require('express')
const router = express.Router()
const profileController = require('../controllers/profile')
const { ensureAuth } = require('../middleware/auth')

router.get('/', ensureAuth, profileController.getProfile)
router.post('/postOne',profileController.postOne)

module.exports = router