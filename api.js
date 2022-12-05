const express = require("express");
var bodyParser = require("body-parser");
var app = express();
const cors = require("cors");
app.use(cors());
var PORT = 8000;
var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({ extended: false });
var mongoose = require("mongoose");
var Schema = mongoose.Schema;
mongoose.connect("mongodb://localhost:27017/Reg");

var db = mongoose.connection;
db.on("open",()=>{console.log("db conn successful")});

// var userDataSchema = new Schema(
//   {
//     name: String,
//     age: Number,
//     telephone: Number,
//   },
//   { collection: "user_dets" }
// );

// var UserData = mongoose.model("UserData", userDataSchema);

app.get("/Disp", urlencodedParser, (req, res)=>{
    console.log("inside Disp")
    // UserData.find()
    //     .then(function(doc){
    //         res.render('api', {items:doc});
    //     })
    db.collection('user_dets').find({}).toArray((error,collection)=>{
        if(error)
        {
            throw error;
        }
        console.log(collection);
        res.json(collection);
    })
})

app.post("/Reg", urlencodedParser, (req, res) => {
//   const addData = new UserData({
//     name: req.body.name,
//     age: req.body.age,
//     telephone: req.body.telephone
var data = req.body;
db.collection('user_dets').insertOne(data,(err,collection)=>{
    if(err)
    {
        throw err;
        res.json({record:'not succ'});
    }
    console.log("data entered successfully");
    res.json(data);
});


  });

//   addData.save((err, doc) => {
//     if (err) return console.log(err);
//     console.log(doc);

  // if(req)
  // {
  //     console.log(req.body);
  //     res.json({response : "GET Request Called"});

  // }
  // else{
  //     res.json({response: "GET Request error"})
  // }

app.listen(PORT, function (err) {
  if (err) console.log(err);
  console.log("Server listening on PORT", PORT);
});
