var mqtt = require('mqtt')
var client = mqtt.connect('mqtt://m23.cloudmqtt.com')

client.on('connect', function () {
    client.subscribe('solaire', {
        'qos': 1,
        'username': 'whymzouw',
        'password': 'qCmHSepEBmVr'
    }, function (err, granted) {
        console.log(err);
        console.log(granted);
    })
    client.publish('solaire', 'Hello mqtt!!!!', {
        'qos': 1
    });
});