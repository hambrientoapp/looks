const router = require('express').Router()

router.get('/look-of-awe-and-joy', (req, res) => res.status(200).json({ look: '{´◕ ◡ ◕｀}'}))

module.exports = router