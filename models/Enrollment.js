
const {sequelize,DataTypes} = require('../orm');

const Enrollment = sequelize.define('Enrollment',{
    Student_ID:{
        type:DataTypes.STRING(9),
        primaryKey:true
    },
    Course_ID:{
        type:DataTypes.STRING(10),
        primaryKey:true
    },
    Semester_ID:{
        type:DataTypes.STRING(6),
        primaryKey:true
    },
    Enrollment_Date:{
        type:DataTypes.DATEONLY
    },
    Grade:{
        type:DataTypes.FLOAT
    },
    Status:{
        type:DataTypes.STRING(10)
    }
},{
    tableName:'ENROLLMENT',
    timestamps:false
});

module.exports = Enrollment;