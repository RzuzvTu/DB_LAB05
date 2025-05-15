const sequelize = require('./orm').sequelize;
const Student = require('./models/Student');

(async () => {
    try {
      // 測試連線
      await sequelize.authenticate();
      console.log('資料庫連線成功');
  
      // 同步模型（如果資料表不存在會自動建立）
      await sequelize.sync(); // 可改成 { force: true } 或 { alter: true }
  
      // 建立一筆測試資料
      const user = await Student.create({ Student_ID: 'S12345678', Name: 'John' , Gender: 'M', Email: 'Test@mail.com', Department_ID: 'EE001'});
      console.log('成功新增用戶:', user.toJSON());
  
    } catch (error) {
      console.error('連線或操作錯誤:', error);
    } finally {
      await sequelize.close();
    }
  })();