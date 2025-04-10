import express from 'express';
import bodyParser from 'body-parser';
import viewEngine from './config/viewEngine';
import initWebRoutes from './route/web.js';
import connectDB from './config/connectDB.js';
require('dotenv').config();

let app = express();
// config app
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
viewEngine(app);
initWebRoutes(app);
connectDB();
let port = process.env.PORT || 6969;
app.listen(port, () => {
    // eslint-disable-next-line no-console
    console.log("Backend Nodejs is running on the port: " + port);
});