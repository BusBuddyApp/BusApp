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
      ledRed: {
        driver: 'led',
        pin: 2,
        connection: 'edison'
      },
      ledGreen: {
        driver: 'led',
        pin: 3,
        connection: 'edison'
      },
      ledBlue: {
        driver: 'led',
        pin: 4,
        connection: 'edison'
      },
      button: {
        driver: 'button',
        pin: 6,
        connection: 'edison'
      },
      screen: {
        driver: 'jhd1313m1',
        connection: 'edison'
      }
    },

    work: function(my) {
      // my.connections;
      // edison: []
      every((1).second(), my.led.toggle);
      every((1).second(), my.ledRed.toggle);
      every((1).second(), my.ledBlue.toggle);
      every((1).second(), my.ledGreen.toggle);
      my.button.on('push', function() {
        console.log("Button pushed!");
      });
      my.screen.setCursor(0,0);
      my.screen.write("Hello World!");
      }
    }
  ).start();
