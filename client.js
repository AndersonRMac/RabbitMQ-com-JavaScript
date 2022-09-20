var amqp = require ('amqplib');
var queue = 'fila_viagens';

 function client(){
    
    amqp.connect('amqp://localhost')
    .then (function(conn) {
        console.log('RabbitMQ Conectado!');

        return conn.createChannel();
    })
    .then(function fila(ch) {
 
        console.log('Fila criada!');
        ch.assertQueue(queue,{durable: true})
        

        setInterval(function(){
            console.log('-> Enviando Mensagem');
            ch.sendToQueue(queue, new Buffer.from('Mensagem que enviei 2!'))

        }, 5000);

            
    });
    
}  


module.exports = {client}
