const express = require('express')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const path = require('path');
const cors = require('cors');

const recepiHandller = require('./route/recepiHandller')


const app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
dotenv.config();
app.use(cors());

//mongoose connection
mongoose
    .connect(process.env.MONGO_CONNECTION_STRING, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('connection successfull'))
    .catch((err) => console.log(err))


app.use('/', recepiHandller)

app.listen(process.env.PORT, () =>
    console.log(`Express app listening on port ${process.env.PORT}!`))