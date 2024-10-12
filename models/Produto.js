// ORM - Sequelize
import Sequelize from "sequelize"

// Configuração do Sequelize
import connection from "../config/sequelize-config.js"

// .define cria a trabela no banco
const Produto = connection.define('produtos', {
    nome:{
        type: Sequelize.STRING,
        allowNull: false
    },

    preco:{
        type: Sequelize.STRING,
        allowNull: false
    },

    categoria: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

// Não força a criação da tabela caso já exista
Produto.sync({force: false})

export default Produto