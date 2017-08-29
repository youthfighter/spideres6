/**
 * Created by Administrator on 2017/8/18 0018.
 */
const baseDao = require('./baseDao');
const chapterMapper = require('../mapper/chapterMapper');

class bookDao extends baseDao{
    static queryChapter(name,author,chapter){
        return super.query(chapterMapper.queryBookByNameAndAuthor,[name,author,chapter]);
    }
    static queryAll(){
        return super.query(chapterMapper.queryAll);
    }
    static update(chapter){
        let modSqlParams = [chapter.bookId,chapter.chapterName,chapter.content,chapter.id];
        return super.query(chapterMapper.update,modSqlParams);
    }
    static insert(chapter){
        let modSqlParams = [chapter.bookId,chapter.chapterName,chapter.content];
        return super.query(chapterMapper.insert,modSqlParams);
    }
    static delete(chapter){
        let modSqlParams = [id];
        return super.query(chapterMapper.delete,modSqlParams);
    }
}