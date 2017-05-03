"use strict";

/* eslint-disable no-console */
let compression = require("compression");
let express = require("express");
let path = require("path");
let app = express();
let bodyParser = require("body-parser");
let Mailchimp = require( "mailchimp-v3-api");
let homepageConfiguration = require("../src/homepageConfiguration");

app.set("port", 3001);

app.use(compression());

app.use(bodyParser.urlencoded({
  extended: false
}));

app.use(express.static(path.join(__dirname, "../dist")));

app.post("/login/", bodyParser.json({ type: "application/json" }), function (req, res) {
  let mailchimpAPI = new Mailchimp({
    key: homepageConfiguration.api_key,
    debug: false,
    location: homepageConfiguration.location
  });

  mailchimpAPI
    .post("/lists/"+homepageConfiguration.list_id+"/members/", req.body)
    .then(function(response){
      res.send(response);
    });
});

app.listen(app.get("port"), function() {
  console.log("Running production build...");
});
