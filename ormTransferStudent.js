const { sequelize, Student, Course, Enrollment } = require('./models');

async function transferStudent(studentId, oldDeptId, newDeptId) {
  const t = await sequelize.transaction();

  try {
    // 更新學生所屬系所
    await Student.update(
      { Department_ID: newDeptId },
      { where: { Student_ID: studentId }, transaction: t }
    );

    // 標記舊系所必修課為「轉系退選」
    const oldRequiredCourses = await Course.findAll({
      where: {
        Department_ID: oldDeptId
      },
      transaction: t
    });

    const oldCourseIds = oldRequiredCourses.map(c => c.Course_ID);

    await Enrollment.update(
      { Status: '退選' },
      {
        where: {
          Student_ID: studentId,
          Course_ID: oldCourseIds
        },
        transaction: t
      }
    );

    // 加選新系所的必修課程
    const newRequiredCourses = await Course.findAll({
      where: {
        Department_ID: newDeptId
      },
      transaction: t
    });

    const currentSemester = '112-2';

    for (const course of newRequiredCourses) {
      await Enrollment.create({
        Student_ID: studentId,
        Course_ID: course.Course_ID,
        Semester_ID: currentSemester,
        Status: '修課中',
        Enrollment_Date: new Date() 
      }, { transaction: t });
    }

    // 提交交易
    await t.commit();
    console.log(`學生 ${studentId} 已從 ${oldDeptId} 轉到 ${newDeptId}`);
  } catch (err) {
    await t.rollback();
    console.error('轉系處理失敗：', err);
  }
}

transferStudent('S10811001', 'CS001', 'EE001');