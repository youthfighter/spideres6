/**
 * Created by Administrator on 2017/8/18 0018.
 */
const BookDao = require("../dao/bookDao");
class Book{
    constructor(name,author,lastUpdate,lastChapter,id){
        this.name = name;
        this.author = author;
        this.lastUpdate = lastUpdate;
        this.lastChapter = lastChapter;
    }
    save(){
        let self = this;
        return new Promise((resolve,reject)=>{
            BookDao.queryBookByNameAndAuthor(self.name,self.author)
                .then((data)=>{
                    if(data.length>0){
                        return data[0];
                    }else{
                        return BookDao.insert(self)
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
        });
    }
}
/*let c = new Book('111','222');
c.save()
    .then(data=>{
        console.log(data);
    });*/
module.exports = Book;