const knex = require('knex');
const configuration = require('../../knexfile');


const connection = knex(configuration.development);

module.exports = connection;

//***Conexão com o banco de dados, foi chamado o knex para conexão na linha 1 */
//***Dado um caminho para configuration, onde passou a pasta do knexfile */
//*** definimos a conexão com o knex configuration.development */
//*** Exportado o modulo connection */