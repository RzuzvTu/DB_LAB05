const { Enrollment, Student, Course } = require('./models');

async function findUngraded() {
  try {
    const results = await Enrollment.findAll({
      where: {
        Grade: null
      },
      include: [
        {
          model: Student,
          as: 'Student',
          attributes: ['Student_ID', 'Name']
        },
        {
          model: Course,
          as: 'Course',
          attributes: ['Course_ID', 'Title']
        }
      ]
    });

    console.log('未評分的選課記錄：');
    results.forEach(enrollment => {
      const student = enrollment.Student;
      const course = enrollment.Course;
      console.log(`學生：${student.Name} (${student.Student_ID}), 課程：${course.Title} (${course.Course_ID})`);
    });
  } catch (err) {
    console.error('查詢失敗：', err);
  }
}

findUngraded();