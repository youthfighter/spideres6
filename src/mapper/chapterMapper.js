/**
 * Created by Administrator on 2017/8/19 0019.
 */
module.exports={
    'queryChapterByBookIdAndChapterIndex':'select * from chapter where bookId=? and chapterIndex=?',
    'queryAll':'SELECT * FROM chapter',
    'insert':'INSERT INTO chapter(bookId,chapterIndex,chapterName,content) VALUES(?,?,?,?)',
    'update':'UPDATE book SET bookId = ?,chapterName=?,content=? WHERE id = ? ',
    'delete':'DELETE FROM BOOK WHERE id = ?'
}