var winston = require('winston');

var mqtt = require('mqtt')
var client = mqtt.connect('mqtt://test.mosquitto.org')



const logger = winston.createLogger({
  transports: [
    new winston.transports.Console({}),
    new winston.transports.File({ 
      filename: 'combined.log'
     })
  ]
});


client.on('connect', function () {
  client.subscribe('solaire', {
    'qos': 1
  }, function (err, granted) {
    logger.log({
      level: 'error',
      message: err
    });
    logger.log({
      level: 'info',
      message: granted
    });
  });
})

client.on('message', function (topic, message) {
  // message is Buffer
  logger.log({
    level: 'info',
    message: message.toString()
  });
  //   client.end()
})