// installs
const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const dotenv = require("dotenv");
const cors = require("cors");
// routes
const pinRoute = require('./routes/pinRoute')
const userRoute = require('./routes/userRoute');



dotenv.config();

const app = express();

// use
app.use(cors());
app.use(express.json());


// connect to the database
mongoose
.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
})
.then(console.log(`👽 Connected to DB!`))
.catch(e => console.log(`Error connecting to DB: ${e}`))


app.use("/pins", pinRoute);
app.use("/users", userRoute);

app.use(express.static(path.join(__dirname, "/frontend/build")));
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/frontend/build', 'index.html'));
  });

// Listening 
app.listen(process.env.PORT || 8000, () => {
    console.log(`🚀 Server is running!`)
})