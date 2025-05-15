
const { sequelize, DataTypes } = require('../orm');

const Department_ID = sequelize.define('Department_ID', {
    Department_ID: {
        type: DataTypes.STRING(5),
        primaryKey: true
    },
    Name: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    Location: {
        type: DataTypes.STRING(100)
    },
    Phone: {
        type: DataTypes.STRING(15)
    },
    Established_Year: {
        type: DataTypes.INTEGER(6)
    },
    Chair_ID: {
        type: DataTypes.STRING(9)
    },
    College: {
        type: DataTypes.STRING(50)
    }
}, {
    tableName: 'DEPARTMENT',
    timestamps: false
});

module.exports = Department_ID;