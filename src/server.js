import express from 'express';
import bodyParser from 'body-parser';
import configViewEngine from './config/ViewEngine';
import startWebRoute from './route/web';
import testConnect from './config/connectDB';

require('dotenv').config();
let port = process.env.PORT;
let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

configViewEngine(app);
startWebRoute(app);
testConnect();


app.listen(port, () => {
    console.log('starting:' + port)
})