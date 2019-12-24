const router = require('express').Router()

router.get('/look-of-awe-and-joy', (req, res) => res.status(200).json({ look: '{´◕ ◡ ◕｀}'}))
router.get('/derp-look', (req, res) => res.status(200).json({ look: '¯\(◉◡◔)/¯'}))
router.get('/look-of-i-am-happy-with-it', (req, res) => res.status(200).json({ look: 'ʘ‿ʘ'}))
router.get('/cute-look', (req, res) => res.status(200).json({ look: '•‿•'}))

module.exports = router