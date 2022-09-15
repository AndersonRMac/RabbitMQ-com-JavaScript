var amqp = require ('amqplib');
var queue = 'fila_viagens';

async function RabbitConnection(){
    
    await amqp.connect('amqp://localhost')
    .then (function(conn) {
        console.log('Conectado!');

        return conn.createChannel();

    })
    .then(function fila(ch) {
 
        console.log('Fila criada!');
        ch.assertQueue(queue,{durable: true})
            
    })
    
}  


module.exports = {RabbitConnection}
