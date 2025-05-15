
const { sequelize, DataTypes } = require('../orm');

const Course = sequelize.define('Course', {
    Course_ID: {
        type: DataTypes.STRING(10),
        primaryKey: true
    },
    Title: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    Description: {
        type: DataTypes.STRING(500)
    },
    Credits: {
        type: DataTypes.INTEGER(2),
        allowNull: false
    },
    Level: {
        type: DataTypes.STRING(10)
    },
    Hours_Per_Week: {
        type: DataTypes.INTEGER(2)
    },
    Department_ID: {
        type: DataTypes.STRING(5)
    }

}, {
    tableName: 'COURSE',
    timestamps: false
});

module.exports = Course;