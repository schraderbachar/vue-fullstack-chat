const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

//middleware
app.use(bodyParser.json());
app.use(cors());

// get the posts
const posts = require('./routes/api/posts');

//any route that uses api/posts will be directed to posts
app.use('/api/posts', posts);

const port = process.env.PORT || 5000;


//start the server
app.listen(port, () => console.log(`Server started on port ${port}`) );