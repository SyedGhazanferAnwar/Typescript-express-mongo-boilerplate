#!/usr/bin/env node
import * as dotenv from 'dotenv';
dotenv.config();

import * as express from 'express'
import helmet from 'helmet'
import * as bodyParser from 'body-parser'
import middlewares from './middlewares';

const app = express();

// set security HTTP headers
app.use(helmet());
app.use(
    bodyParser.urlencoded({
        extended: true,
    }),
);
app.use(bodyParser.json());

//Initializing Mongoose with connection String
import _ from "./MongooseInit"

const router = express.Router();

app.use(middlewares.morganMiddleware);
// Set the target area
app.use('/', router);
import routes from './routes'
routes(router);

app.use((error, _req, res, next) => {
    if (res.headerSent) {
        return next(error);
    }
    res.status(error.code || 500)
        .json({ message: error.message || "Unknown Error Occured" })
});
//Starting up the server
const port = process.env.PORT || 3000
app.listen(port);
console.log('Server running on port ' + port);
console.log(
    'Open http://localhost:' +
    port +
    '/ to view the heartbeat and test browser access!',
);