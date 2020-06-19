const connection = require('../database/connection');
const crypto = require ('crypto');




module.exports = {

//*** Index, listagem dos campos ong */

async index(req, res){
    const ongs = await connection ('ongs').select('*');
    return res.json(ongs);
},
//**Criando uma ong com POST */
    async create(req, res){
    const { name, email, whatsapp, city, uf} = req.body;
    
    const id = crypto.randomBytes(6).toString('HEX');

   await connection('ongs').insert({
        id, 
        name,
        email,
        whatsapp,
        city,
        uf,
    })

    
    return res.json({ id });
    
 }
};