const express = require('express');

const app = express();

//!Routes

app.get('/api', (req, res) => {
    res.send('Entering PieroLetters')
});

//?Server Listener
app.listen(9000)