const express = require ('express');
const Ong_Controller = require('./controllers/Ong_Controller');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');
const routes = express.Router();


//***Criando uma rota para login */
routes.post('/sessions', SessionController.create);

//**Rotas de listagem e criação das ongs*/
routes.post('/ongs', Ong_Controller.create);
routes.get('/ongs', Ong_Controller.index);


//***Rotas POST e GET do incidents */
routes.post('/incidents', IncidentController.create);
routes.get('/incidents', IncidentController.index);
routes.delete('/incidents/:id', IncidentController.delete);


///**Rota ProfilleController para listar casos especificos de uma ong */

routes.get('/profile', ProfileController.index);
module.exports = routes;