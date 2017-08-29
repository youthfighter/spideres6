/**
 * Created by Administrator on 2017/8/18 0018.
 */
const baseDao = require('./baseDao');
const Book = require('../model/book');
const bookMapper = require('../mapper/bookMapper');
class bookDao extends baseDao{
    static queryAll(){
        return super.query(bookMapper.queryAll);
    }
    static update(book){
        let modSqlParams = [book.name,book.author,book.lastUpdate,book.lastChapter,book.id];
        return super.query(bookMapper.update,modSqlParams);
    }
    static insert(book){
        let modSqlParams = [book.name,book.author,book.lastUpdate,book.lastChapter];
        return super.query(bookMapper.insert,modSqlParams);
    }
    static delete(id){
        let modSqlParams = [id];
        return super.query(bookMapper.delete,modSqlParams);
    }
}
/*let bd = new bookDao();
bd.queryAll()
    .then(function(result){
        console.log(result[0].id);
    });*/
 module.exports = bookDao;