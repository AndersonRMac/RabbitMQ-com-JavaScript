var amqp = require ('amqplib');


amqp.connect('amqp://localhost')
.then(function(conn) {
    console.log('Conectado!');

    return conn.createChannel();
})
.then(function(ch){
    console.log('Canal Criado');

    var msg = 'Nova viagem';
    ch.sendToQueue('viagens', new Buffer.from(msg))

    console.log('Mensagem recebida na fila: ', msg);
});

