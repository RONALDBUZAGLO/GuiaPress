const Sequelize = require('sequelize');

const connection = new Sequelize('guiapress','root','123456',{
    host: 'mysql743.umbler.com',
    dialect:'mysql',
    timezone: '-04:00',
});
 

module.exports = connection;