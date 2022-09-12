var amqp = require ('amqplib');
const Viagens = require('../model/viagens');
var fila = 'fila_viagens'

amqp.connect('amqp://localhost')
.then(function(conn) {
    console.log('Conectado!');

    return conn.createChannel();
})
.then(function(ch){
    console.log('Canal Criado');
    console.log('Fila Criada!');

    var viagens = new Viagens;
    viagens._EQP_SRN = 111;
    viagens._VEI_ID = 222;

    ch.assertQueue(fila, {durable:true})
    ch.sendToQueue(fila, new Buffer.from(viagens))

    console.log('Mensagem recebida na fila: ', msg);
});

