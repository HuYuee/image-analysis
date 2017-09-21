var EXIF = require("exif-js");
var request = require("request");
var cheerio = require("cheerio");

request(
  "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1505989317393&di=5b63a3b9f6a6dd00b4d2edd5be0714f4&imgtype=jpg&src=http%3A%2F%2Fb.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2Ffcfaaf51f3deb48f856b141ef91f3a292cf578eb.jpg",
  function(error, response, body) {
    console.log("error:", error); // Print the error if one occurred
    console.log("statusCode:", response && response.statusCode); // Print the response status code if a response was received
    var $ = cheerio.load(body);
    EXIF.getData($('#photos>img')[0], function() {
      console.log(EXIF.getAllTags(this));
      EXIF.getTag(this, "Orientation");
      var make = EXIF.getTag(this, "Make");
        var model = EXIF.getTag(this, "Model");
    });
  }
);
