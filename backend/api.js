const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const cors = require("cors");
const path = require('path');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());
app.use(express.static(path.join(__dirname , 'dist/mean')));
//app.use("/", express.static(path.join(__dirname, 'dist/mean')));
const New = require('./new.model.ts');
app.listen(5000, function(req,res){
    console.log("Port 5000 is running");
})
app.get("/locations", function(req,res){
    
  var x = "http://worldtimeapi.org/api/timezone/" ;
  
  request(x , function(error,response,body){
      
      console.log(response.statusCode);
      var result = JSON.parse(body);
      res.json(result);
})
})

app.post("/", function(req,res,body){
 location =  req.body.Location;
  console.log(location);
  //res.send(location);
  var base = "http://worldtimeapi.org/api/timezone/" ;
  var top = base + location;
  console.log(top);
    request(top , function(error,response,body){
        
        console.log(res.statusCode);
        var data = JSON.parse(body);
        var datetime = data.datetime;
        console.log(datetime);

        //var date = data.slice(0,10);
        //var time = t.slice[11,20];

        //console.log("Date is: " + date);
        //console.log("Time is: " + time);
       res.json(data);
 })
})
 /*
app.get("/", function(req,body,res){
  location = req.body.Location;
  var base = "http://worldtimeapi.org/api/timezone/" ;
  var top = base + location;
  console.log(top);
    request(top , function(error,response,body){
        
        console.log(res.statusCode);
        var data = JSON.parse(body);
        //console.log(data);
        //var time = data.datetime;
        //var date = time.slice(0,10);
        //var t = time.slice(11,20);

        //console.log("Date is: " + date);
        //console.log("Time is: " + time);
       res.send(data);
 })
})*/




 // error handler
 app.use(function (err, req, res, next) {
   console.error(err.message); // Log error message in our server's console
   if (!err.statusCode) err.statusCode = 500; // If err has no specified error code, set error code to 'Internal Server Error (500)'
   res.status(err.statusCode).send(err.message); // All HTTP requests must have a response, so let's send back an error with its status code and message
 });
