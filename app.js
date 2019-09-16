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
app.use('/api/stock', stockRoute);

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