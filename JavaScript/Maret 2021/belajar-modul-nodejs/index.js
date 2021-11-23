var moment = require("moment");
var salam = require("./salam");

console.log(salam.salamPagi());
console.log("Sekarang: " + moment().format('D MMMM YYYY, h:mm:ss a'));
