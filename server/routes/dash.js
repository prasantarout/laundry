const express = require('express');
const router = express.Router();
// First we will destructure the data that we are sending to the data base
const { dash } = require('../models/');

router.get("/", async (req, res) => {
    const listOfUsers = await dash.findAll();
    res.json(listOfUsers);
})


router.post("/", async (req, res) => {
    const post = req.body;
    await dash.create(post);
    res.json({message : "your request has been added"});
})

module.exports = router;

router.get('/count/:id', async (req, res) => {
    const mail = req.params.id;
    const count = await dash.count({ where :{
        userEmail : mail
    }, 
    })
    res.json({count : `${count}`})
})