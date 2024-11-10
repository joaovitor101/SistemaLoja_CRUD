import Sequelize from "sequelize";
import conection from "../config/sequelize-config.js";

const User = conection.define("users", {
	email: {
		type: Sequelize.STRING,
		allowNull: false,
	},
	senha: {
		type: Sequelize.STRING,
		allowNull: false,
	},
});

User.sync({ force: false });
export default User;
