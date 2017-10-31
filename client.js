var mqtt = require('mqtt')
var client = mqtt.connect('mqtt://test.mosquitto.org')

client.on('connect', function () {
    client.subscribe('presence')
    setInterval(function () {
        client.publish('presence', 'Hello mqtt');
    }, 1);
});