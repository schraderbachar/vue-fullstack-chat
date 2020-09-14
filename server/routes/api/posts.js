const express = require('express');
const mongodb = require('mongodb');


//create route
const router = express.Router();


// get posts
        //putting the / references the api/posts becuase we directed that route to the posts file.
router.get('/', (req,res) => {
    res.send('Hello');
});

//add posts

//delete posts


//export so index.js can use it
module.exports = router;
