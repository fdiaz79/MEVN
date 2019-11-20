const express = require ('express');
const mongodb = require ('mongodb');

const router = express.Router();

//Get posts

// '/' points to /api/posts because we said so on index.js
router.get('/', (req, res) => {
    res.send("Hello Browser");
});

//Add posts


//Delet posts





module.exports = router;