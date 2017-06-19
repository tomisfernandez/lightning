var Galileo = require("galileo-io");
var board = new Galileo();

board.on("ready", function() {
  var byte = 0;
  this.pinMode(12, this.MODES.INPUT);

  setInterval(function() {
     board.digitalRead(12, function(data){
          console.log(data);
      });
  }, 10000);
});
