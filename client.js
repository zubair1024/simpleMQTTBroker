var mqtt = require('mqtt')
var client = mqtt.connect('mqtt://test.mosquitto.org')

client.on('connect', function () {
    client.subscribe('solaire', {
        'qos': 1
    }, function (err, granted) {
        console.log(err);
        console.log(granted);
    })
    client.publish('solaire', 'Hello mqtt', {
        'qos': 1
    });
});