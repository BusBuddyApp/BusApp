var Cylon = require('cylon');
var mraa = require('mraa');
Cylon.robot(
  {connections: {
    edison: {adaptor: 'intel-iot'}
    },

    devices: {
      led: {
        driver: 'led',
        pin: 13,
        connection: 'edison'
      },
      button: {
        driver: 'button',
        pin: 6,
        connection: 'edison'
      }
    },

    work: function(my) {
      // my.connections;
      // edison: []
      every((1).second(), my.led.toggle);
      my.button.on('push', function() {
        console.log("Button pushed!");
      });
    }
  }
).start();
