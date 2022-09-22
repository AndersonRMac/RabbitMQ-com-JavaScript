var amqp = require ('amqplib');
const { recebeViagem } = require('./model/ViagemDto');
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
            // console.log(JSON.stringify(recebeViagem))
            ch.sendToQueue(queue, Buffer.from(JSON.stringify(recebeViagem)))

        }, 5000);

            
    });
    
}  


module.exports = {client}
