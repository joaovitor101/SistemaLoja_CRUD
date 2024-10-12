// ORM - Sequelize
import Sequelize from "sequelize"

// Configuração do Sequelize
import connection from "../config/sequelize-config.js"

// .define cria a trabela no banco
const Pedido = connection.define('pedidos', {
    numero:{
        type: Sequelize.INTEGER,
        allowNull: false
    },

    valor:{
        type: Sequelize.FLOAT,
        allowNull: false
    },

})

// Não força a criação da tabela caso já exista
Pedido.sync({force: false})

export default Pedido