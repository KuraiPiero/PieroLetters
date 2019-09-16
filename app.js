/**echo "# PieroLetters" >> README.md
git init
git add README.md
git commit -m "first commit"
git remote add origin https://github.com/KuraiPiero/PieroLetters.git
git push -u origin master


…or push an existing repository from the command line

git remote add origin https://github.com/KuraiPiero/PieroLetters.git
git push -u origin master

import
…or import code from another repository
You can initialize this repository with code from a Subversion, Mercurial, or TFS project.**/

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
app.use(cors());
app.use(bodyParser.json())
require('dotenv/config');





//*Import Routes
const stockRoute = require('./routes/stock');
app.use('/api', stockRoute);

//*Middlewares


//!Routes

app.get('/', (req, res) => {
    res.send('Entering Piero Letters')
});

//TODO Mongo Connection
mongoose.connect(
    process.env.DB_CONNECTION, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    },
    () => {
        console.log("connect to DB");
    })


//?Server Listener
app.listen(9000);