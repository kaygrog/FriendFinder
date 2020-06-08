// Dependencies
var express = require("express");
var path = require("path");

// Set up the Express app
var app = express();
var PORT = process.env.PORT || 3000;

// Set up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory
app.use(express.static("app/public"));

// Routes
require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);

// Start the server to begin listening
app.listen(PORT, function () {
  console.log(`App listening on PORT ${PORT}`);
});
