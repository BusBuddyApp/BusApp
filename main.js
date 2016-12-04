var Cylon = require('cylon');
var mraa = require('mraa');
Cylon.robot(
  {connections: {
    edison: {adaptor: 'intel-iot'},
    arduino: {adaptor: 'firmata', port: '/dev/ttyACM0'}
    },

    devices: {
      led: {driver: 'led', pin: 13},
      button: {driver: 'button', pin: 6}
    },

    work: function(my) {
      every((1).second(), my.led.toggle);
      my.button.on('push', function() {
        console.log("Button pushed!");
      });
    }
  }
).start();
