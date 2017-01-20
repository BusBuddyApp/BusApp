Bus Buddy
============================
Submission for an Iot Hackathon hosted by [Women Who Code PDX](https://www.womenwhocode.com/portland). The theme was [sustainable cities] (https://www.meetup.com/Women-Who-Code-Portland/events/234636808/)

[Video Demonstration] (https://www.youtube.com/watch?v=vCHmPBC24ko&t=6s "Video Demo")

BusBuddy is a nodeJS application running on an Intel Edison platform that uses 3 different colored LEDs, an LCD screen, a button, and a buzzer and Bluetooth Low Energy (BLE) to create a simple way of notifying passengers on a bus the optimal window for pulling the cord indicating they would like to exit at the next stop. Bus stations will be equipped with BLE beacons so that when a bus drives past or stops at a station the LED will change color, the LCD will automatically update, and a buzzer will sound to get passengers attention. If a passenger knows that they are a certain number of stops away they can predict which color will light up for their stop if reading the screen or unable to read street signs. If a bus has to reroute or a technical failure prevents automatic updates, the bus driver may press a button that triggers the same actions.

In the future a mobile application will be available so a passenger can see the full route and select their stop. They will receive notifications and vibrations when their stop is approaching. This application will not rely on cellular data but rather be activated by pairing with the bus computer over bluetooth.
