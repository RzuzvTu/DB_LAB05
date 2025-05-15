// models/Student.js
const { sequelize, DataTypes } = require('../orm');

const Student = sequelize.define('Student', {
  Student_ID: {
    type: DataTypes.STRING(9),
    primaryKey: true
  },
  Name: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  Birth_Date: {
    type: DataTypes.DATEONLY
  },
  Gender: {
    type: DataTypes.CHAR(1)
  },
  Email: {
    type: DataTypes.STRING(100)
  },
  Phone: {
    type: DataTypes.STRING(15)
  },
  Address: {
    type: DataTypes.STRING(200)
  },
  Admission_Year: {
    type: DataTypes.INTEGER(11)
  },
  Status: {
    type: DataTypes.STRING(10)
  },
  Department_ID: {
    type: DataTypes.STRING(5)
  }
}, {
  tableName: 'STUDENT',
  timestamps: false // 不使用預設的 createdAt 和 updatedAt 欄位
});

module.exports = Student;
