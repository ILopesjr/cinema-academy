const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('cinema_academy', 'root', 'password', {
  host: 'localhost',
  dialect: 'mysql',
});

try {
  sequelize.authenticate();
  console.log('Conectado com sucesso');
} catch (error) {
  console.log(`Não foi possível conectar: ${error}`);
}

module.exports = sequelize;
