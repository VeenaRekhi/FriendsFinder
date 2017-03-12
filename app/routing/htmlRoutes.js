// ===============================================================================
// DEPENDENCIES
// We need to include the path package to get the correct file path for our html
// ===============================================================================
var path = require("path");


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // HTML GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases the user is shown an HTML page of content
  // ---------------------------------------------------------------------------

  app.get("/survey", function(req, res) {
    
    res.sendFile(path.join(__dirname, "/../public/survey.html"));
  });

  app.get("/enroll", function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/enroll.html"));
  });

  app.get("/images", function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/images/img1.jpeg"));
  });


  // If no matching route is found default to home
  app.use(function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/home.html"));
  });
};
