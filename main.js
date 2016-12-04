var Cylon = require('cylon');
var mraa = require('mraa');

// var path = require('path');
// var busRoute = require( path.resolve( __dirname, "./busRoute.js" )).busRoute;

Cylon.robot(
  {connections: {
    edison: {adaptor: 'intel-iot'}
    },

    devices: {
      //digital
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
      buzzer: {
        driver: 'direct-pin',
        pin: 7,
        connection: 'edison'
      },
      //i2c
      screen: {
        driver: 'jhd1313m1',
        connection: 'edison'
      }
    },

    work: function(my) {
      // this is where the main app logic is going to live. helpful guide here on how to structure https://cylonjs.com/documentation/guides/working-with-robots/

      //dummy data
      var busRoute = [
        "SW Main & 6th",
        "SE Hawthorne & 12th",
        "SE Hawthorne & Cesar Chavez Blvd",
        "SE Foster & Powell",
        "SE Foster & 82nd",
        "SE Foster & 94th (I-205 Overpass)"
      ];

      //starting state
        // console.log(currentStop);

        //turn off green and blue leds.
        //turn on red led
        var ledSeries = [my.ledRed, my.ledGreen, my.ledBlue];
        var red = ledSeries[0];
        var green = ledSeries[1];
        var blue = ledSeries[2];

        red.turnOn();
        green.turnOff();
        blue.turnOff();

        //buzzerState variable set to off
        var buzzerState = 0;
        my.buzzer.digitalWrite(buzzerState);

        //assign currentStop variable
        var currentStop = 0;
        //screen should show position 0 of busRoute
        my.screen.setCursor(0,0);
        my.screen.write(busRoute[currentStop]);

      //function that cycles through LEDs
        //starts at beginning at end of loop
        var currentLight = 0;
        function changeLight() {
          //turn current light off
          ledSeries[currentLight].turnOff()
          //increase light counter
          if (currentLight < ledSeries.length - 1) {
            currentLight ++;
          } else {
            currentLight = 0;
          }
          //turn on next light
          ledSeries[currentLight].turnOn()
        }

        //function that writes current stop to screen;
        function changeStop() {
          //increase stop counter
          if (currentStop < busRoute.length - 1) {
            currentStop ++;
            //write next stop
            my.screen.setCursor(0,0);
            console.log(busRoute[currentStop]);
            my.screen.write(busRoute[currentStop]);
          } else {
          my.screen.setCursor(0,0);
            my.screen.write("End of Bus Route");
          }
        }

      //on event trigger (on button push)
      my.button.on('push', function() {
        console.log("Button pushed!");
        changeLight();
        changeStop();

        //increment current stop
        //increment light counter
        });

      }
    }
  ).start();


      // every((1).second(), my.led.toggle);
      // every((1).second(), my.ledRed.toggle);
      // every((1).second(), my.ledBlue.toggle);
      // every((1).second(), my.ledGreen.toggle);


        // my.buzzer.digitalWrite(value);
        // value = 1;
