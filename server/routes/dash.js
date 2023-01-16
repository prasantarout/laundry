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


router.get('/count/:id', async (req, res) => {
    const mail = req.params.id;
    const count = await dash.count({ where :{
        userEmail : mail
    }
    })
    res.json({count : `${count}`})
})


router.get("/item/:id",async (req, res) => {
    const mail = req.params.id;
    const items = await dash.findAll({
        where:{
            userEmail : mail,
        }
    })
    res.json(items)
})

router.delete("/delete/:Id", async (req, res) => {
    const itemId = req.params.Id;
  
    await dash.destroy({
      where: {
        id: itemId ,
      },
    });
  
    res.json("DELETED SUCCESSFULLY");
});

module.exports = router;
