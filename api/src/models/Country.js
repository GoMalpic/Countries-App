const { DataTypes } = require('sequelize');
module.exports = (sequelize) => {
  sequelize.define('Country', {
    id:{
      type: DataTypes.CHAR(3),
      unique : true,
      allowNull: false,
      primaryKey: true,
      validate: {
        len: 3
      }
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    flag: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    continent: {
      type: DataTypes.STRING,
      allowNull: false
    },
    capital: {
      type: DataTypes.STRING,
      allowNull: false
    },
    subregion: {
      type: DataTypes.STRING,
      allowNull: true
    },
    area: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    population: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
  },
    {
      timestamps: false
    }
  );
};
