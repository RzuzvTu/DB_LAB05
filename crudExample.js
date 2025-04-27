// crudExample.js
const pool = require('./db');

async function basicCrud() {
  let conn;
  try {
    conn = await pool.getConnection();

    const Student_ID = 'S10810001';
    const Name = '王小明';

    // 1. INSERT 新增
    let sql = 'INSERT INTO STUDENT (Student_ID, Name, Gender, Email, Department_ID) VALUES (?, ?, ?, ?, ?)';
    await conn.query(sql, [Student_ID, Name, 'M', 'wang@example.com', 'CS001']);
    console.log('已新增一筆學生資料');
    
    // 2. SELECT 查詢
    sql = 'SELECT * FROM STUDENT WHERE Department_ID = ?';
    const rows = await conn.query(sql, ['CS001']);
    console.log('查詢結果：', rows);

    // 3. UPDATE 更新
    sql = 'UPDATE STUDENT SET Name = ? WHERE Student_ID = ?';

    const result = await conn.query("SELECT * FROM STUDENT WHERE Student_ID = ?", [Student_ID])

    if(result.length === 0) {
      console.log('找不到該學號');
      return;
    }
    
    await conn.query(sql, [Name, Student_ID]);
    console.log('已更新學生名稱');

    // 4. DELETE 刪除
    sql = 'DELETE FROM STUDENT WHERE Student_ID = ?';

    const result_Del = await conn.query("SELECT * FROM STUDENT WHERE Student_ID = ?", [Student_ID])

    if(result_Del.length === 0) {
      console.log('找不到該學號');
      return;
    }

    await conn.query(sql, [Student_ID]);
    console.log('已刪除該學生');

  } catch (err) {
    console.error('操作失敗：', err);
  } finally {
    if (conn) conn.release();
  }
}
basicCrud();
