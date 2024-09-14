require("dotenv").config();
const express = require("express");  
//const mongoose = require("mongoose"); 
const path = require('path'); 

const app = express(); 
app.use(express.json()); 
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

/*MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => {
    console.log("Connected to MongoDB successfully");
  })
  .catch((error) => {
    console.log("Error with connecting to MongoDB:", error);
  }); */


const PORT = process.env.PORT || 3000; 


app.get("/home", (req, res) => {
  res.render("main"); 
});

app.listen(PORT, () => {
  console.log(`App listening on port 3000`);
});
