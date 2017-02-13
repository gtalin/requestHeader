var express = require("express");
var app = express();

var port = process.env.PORT || 3000;

app.get("/api/whoami", tellWho);

function tellWho(req, res) {
  var user = {};
  var ip = req.headers["x-forwarded-for"] || req.connection.remoteAddress;
  //console.log(req.headers);
  user["ipaddress"] = ip;
  user["language"] = req.headers['accept-language'].split(",")[0];
  var regexp = /\(([^)]+)\)/;
  user["software"] = req.headers['user-agent'].match(regexp)[1];
  console.log(user);
  res.send(user);
}

app.listen(port);
