import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

// importing routes
import postRoutes from './routes/posts.js';

// initalizing app in express. app instance now has access to the express methods
const app = express();
dotenv.config();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());


// connecting routes to app
// setting up the starting path for all the routes ionside of the posts.js
// every route inside of the postroutes will start with post
// you cannot specify the routes before the cors --> this elimated the cors error
// this has to be put BEFORE the app.use cors
app.use('/posts', postRoutes)

app.get('/', (req, res) => {
    res.send('Welcome to dev knowledge!');
})

// connecting app to mongo
const PORT = process.env.PORT || 5000;

// connect takes two params; one with the connection url, the other with all the options
// new url / use unified stop warnings and some errors in the console
// returns a promise, you need then and a catch
// then, listening on the port above then run function when/if successful
// catch is just catching an area
mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message));

// this stops warnings in the console
mongoose.set('useFindAndModify', false)