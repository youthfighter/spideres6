/**
 * Created by Administrator on 2017/8/19 0019.
 */
module.exports={
    'queryAll':'SELECT * FROM book',
    'insert':'INSERT INTO book(name,author,lastUpdate,lastChapter) VALUES(?,?,?,?)',
    'update':'UPDATE book SET name = ?,author=?,lastUpdate=?,lastChapter=? WHERE id = ? ',
    'delete':'DELETE FROM BOOK WHERE id = ?'
}