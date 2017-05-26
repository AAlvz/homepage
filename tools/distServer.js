"use strict";

/* eslint-disable no-console */
let bodyParser = require("body-parser");
let compression = require("compression");
let express = require("express");
let homepageConfiguration = require("./homepageConfiguration");
let jsonParser = bodyParser.json({ type: "application/json" });
let Mailchimp = require( "mailchimp-v3-api");
let path = require("path");

let app = express();

app.set("port", 3000);

app.use(compression());

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, "../dist")));

app.post("/login/", jsonParser, function (req, res) {
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
