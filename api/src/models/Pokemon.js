const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('pokemon', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false
    },
    health: {
      type: DataTypes.INTEGER,
      defaultValue: 100,
    },
    attack: {
      type: DataTypes.INTEGER,
      defaultValue: 50,
    },
    defense: {
      type: DataTypes.INTEGER,
      defaultValue: 50
    },
    speed: {
      type: DataTypes.INTEGER,
      defaultValue: 50
    },
    height: {
      type: DataTypes.INTEGER,
      defaultValue: 5
    },
    weight: {
      type: DataTypes.INTEGER,
      defaultValue: 40
    }
  }, { timestamps: false });
};
