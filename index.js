const { chain } = require('lodash');
const { recebeViagem } = require('./model/ViagemDto');
const conexao = require('./client');
const { consumer } = require('./consumer');

conexao.client();
consumer();
viagens();

function viagens() {
 console.log('esperando as viagens');

   
}