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
        console.log('mensagem recebida: ', msg.content.toString());
        
    })
  
})}

module.exports = {consumer}