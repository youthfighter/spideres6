/**
 * Created by Administrator on 2017/8/19 0019.
 */
module.exports={
    'queryChapterByBookIdAndChapterName':'select * from chapter where bookId=? and chapterName=?',
    'queryAll':'SELECT * FROM chapter',
    'insert':'INSERT INTO chapter(bookId,chapterName,content) VALUES(?,?,?)',
    'update':'UPDATE book SET bookId = ?,chapterName=?,content=? WHERE id = ? ',
    'delete':'DELETE FROM BOOK WHERE id = ?'
}