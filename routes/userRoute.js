const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
// const { findOne } = require("../models/User");

router.post("/register", async (req, res) => {
    try{
        // generate new pass
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);

        // create new user
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword
        })

        const user = await newUser.save();
        res.status(200).json(user)

    }catch(e){
        console.log(`Error registering user ${e}`)
    }
})

// login 
router.post("/login", async (req, res) => {
    try{
        // find  user
        const user = await User.findOne({username: req.body.username});
        !user && res.status(400).json("Wrong username or password");

        // validate password
        const validPassword = await bcrypt.compare(
            req.body.password,
            user.password
        );

        !validPassword && res.status(400).json("Wrong username or password")
        
        // SEND RES
        res.status(200).json({_id: user._id, username: user.username})
    } catch(e) {
        res.status(500)
        console.log(`Error logging in. ${e}`)
    }
})

module.exports = router;