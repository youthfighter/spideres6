/**
 * Created by Administrator on 2017/8/18 0018.
 */
const ChapterDao = require("../dao/chapterDao");
class Chapter{
    constructor(bookId,chapterIndex,chapterName,content){
        this.bookId = bookId;
        this.chapterIndex = chapterIndex;
        this.chapterName = chapterName;
        this.content = content;
    }
    save(){
        let self = this;
        return new Promise((resolve,reject)=>{
            ChapterDao.queryChapter(self.bookId,self.chapterIndex)
                .then((data)=>{
                    if(data.length>0){
                        return data[0];
                    }else{
                        return ChapterDao.insert(self)
                    }
                })
                .then(data=>{
                    let id;
                    if(data.insertId){
                        id = data.insertId
                    }else if(data.id){
                        id = data.id;
                    }
                    resolve(id);
                })
                .catch(err=>{
                    reject(err);
                })
        })
    }
}
/*let c = new Chapter(3,1,'111','222');
c.save();*/
module.exports = Chapter;