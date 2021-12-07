const router = require('express').Router();
const Pin = require('../models/Pins');

// create new pin
router.post('/', async (req, res) => {
    const newPin = new Pin(req.body);
    try{
        const savedPin = await newPin.save();
        res.status(200).json(savedPin)
    }
    catch(e){
        res.status(500);
        console.log(`Error creating pin: ${e}`)
    }
})

// Get all pins
router.get('/', async(req, res) => {
    try{
        const pins = await Pin.find();
        // ! must wait for the data before responding
        res.status(200).json(pins)
    } catch(e){
        console.log(`Error getting all pins: ${e}`)
    }
})


module.exports = router;