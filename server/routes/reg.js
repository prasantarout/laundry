const express = require('express');
const router = express.Router();
// First we will destructure the data that we are sending to the data base
const { user2 } = require('../models/');
const { sign } = require('jsonwebtoken');  
const { validateToken } = require("../middlewares/AuthMiddleware")  
const bcrypt = require('bcrypt');

router.get("/", async (req, res) => {
    const listOfUsers = await user2.findAll();
    res.json(listOfUsers);
})

router.get("/byId/:id", async (req,res) => {
    const id = req.params.id;
    const details = await user2.findAll({
        where: {
            id : id
        }
    });
    res.json(details);
})


// Body is just a object containing all requests that you sending
router.post('/', async (req, res) => {
    const post = req.body;
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(req.body.userPassword, salt)
    console.log(hashedPassword);
    const user = await user2.findOne({ where: { userEmail: req.body.userEmail} })
    if(user){
        res.json({message:"you already have an account with this Email"});
    }
    else{
        await user2.create({
            userName: req.body.userName,
            userEmail: req.body.userEmail,
            userPhone: req.body.userPassword,
            userPassword: hashedPassword,
        });
        res.json({message: "sucesssfully registered"});
    }
});

 router.put("/update/id", async (req, res) => {
    if (req.body.userId === req.params.id) {
      if (req.body.password) {
        const salt = await bcrypt.genSalt(10);
        req.body.password = await bcrypt.hash(req.body.password, salt);
      }
      try {
        const updatedUser = await user2.findByIdAndUpdate(
          req.params.id,
          {
            $set: req.body,
          },
          { new: true }
        );
        res.status(200).json(updatedUser);
      } catch (err) {
        res.status(500).json(err);
      }
    } else {
      res.status(401).json("You can update only your account!");
    }
  });

//   router.post('/changepassword', function (req, res) {
//     user2.findByUsername(req.body.UserName, (err, user) => {
//         if (err) {
//             res.send(err);
//         } else {
//             user2.changePassword(req.body.userPassword, 
//             req.body.newpassword, function (err) {
//                 if (err) {
//                     res.send(err);
//                 } else {
//                     res.send('successfully change password')
//                 }
//             });
//         }
//     });
//  });

router.post('/login',async (req, res) => {
    const {userEmail, userPassword} = req.body;
    const user = await user2.findOne({ where: { userEmail: userEmail} })

    if (!user) {
        res.json({error:"user doesn't exist"})
    } 
    await bcrypt.compare(userPassword, user.userPassword)
    .then(async (match) => {
        if(!match){
            res.json({error : "wrong username or password combination"});
        }
        const userToken = sign({mail:user.userEmail,id: user.id}, "secret");
        res.json(userToken);
    })
    .catch((error) => {
        console.log(error);
    })
});


router.get("/auth", validateToken, (req, res) => {
    res.json(req.user);
  });

module.exports = router;