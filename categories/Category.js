const Sequelize = require('sequelize');
const connection = require("../database/database");

const Category = connection.define('categories',{
    title:{
        type: Sequelize.STRING,
        allowNull: false,
    }, 
    slug:{
        type: Sequelize.STRING,
        allowNull:false,
    }
});

//usar para forçar a criação, comentar ou deletar após executar a primeira vez
//para evitar que a tabela seja recriada apagando os dados todas as vezes
// Category.sync({force:true});

module.exports = Category;

