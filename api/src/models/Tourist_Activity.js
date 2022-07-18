const { DataTypes } = require('sequelize');

module.exports = ( sequelize ) => {

    sequelize.define('Tourist_Activity', {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        difficulty: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                min: 1,
                max: 5
            }
        },
        duration: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        season: {
            type: DataTypes.ENUM("Winter", "Summer", "Spring", "Autumn"),
        }
    },{
        timestamps: false
    })
}