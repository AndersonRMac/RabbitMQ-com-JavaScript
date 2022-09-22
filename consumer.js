var amqp = require ('amqplib');
var queue = 'fila_viagens';

function consumer(){
    
    amqp.connect('amqp://localhost')
    .then (function(conn) {
        console.log('RabbitMQ Conectado!');

        return conn.createChannel();
    })
    .then(function(ch){
        ch.consume(queue, function(msg){
            // const obj = Buffer.from(msg.content)
            let obj = JSON.parse(msg.content);
            // const objs = obj.match(/{\w+}/)
            //let obj = msg.content.toString();
            console.log(obj);
            // console.log(JSON.parse(obj)[0])
            // console.log(obj[0]?.VEI_ID)
    })
  
})}

module.exports = {consumer}