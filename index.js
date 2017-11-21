var mqtt = require('mqtt')
var client = mqtt.connect('mqtt://test.mosquitto.org')

client.on('connect', function () {
  client.subscribe('solaire', {
    'qos': 1
  }, function (err, granted) {
    console.log(err);
    console.log(granted);
  });
})

client.on('message', function (topic, message) {
  // message is Buffer
  console.log(message.toString())
  //   client.end()
})