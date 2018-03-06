var mqtt = require('mqtt')
var client = mqtt.connect('mqtt://m23.cloudmqtt.com')

client.on('connect', function () {
    client.subscribe('solaire/a4ae9a00aea8', {
        'qos': 1,
        'username': 'whymzouw',
        'password': 'qCmHSepEBmVr'
    }, function (err, granted) {
        console.log(err);
        console.log(granted);
    })
    client.publish('solaire/a4ae9a00aea8', 'Hello mqtt!!!!', {
        'qos': 1
    });
});