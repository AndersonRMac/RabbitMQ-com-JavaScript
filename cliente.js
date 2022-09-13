var amqp = require ('amqplib');
const Viagens = require('./model/viagensDto');
var fila = 'fila_viagens';

amqp.connect('amqp://localhost')
.then(function(conn) {
    console.log('Conectado!');

    return conn.createChannel();
})
.then(function(ch){
    console.log('Fila Criada!');

    var viagens = new Viagens;
    viagens._IGN_OFF = 333;
    viagens._VEI_ID = 222;

    var tratado = JSON.stringify(viagens);

    ch.assertQueue(fila, {durable:true})
    ch.sendToQueue(fila, new Buffer.from(tratado))
    console.log('Mensagem enviada...');

    console.log('Mensagem recebida na fila: ', tratado);
});

