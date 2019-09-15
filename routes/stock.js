const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Entering PieroLetters')
});

module.exports = router;