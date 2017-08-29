/**
 * Created by Administrator on 2017/8/19 0019.
 */
const Book = require('../model/book');
const bookDao = require('../dao/bookDao');
const spiderRequest = require('../../spider/spiderRequest');
const bookList = require('../../settings/bookList');
const chapterList = require('../../settings/chapterList');
const Async = require('../tools/promise-async');
let num = 0;
class BookInfo{
    static saveABookInfo(url){
        return function () {
            chapterList.url = url;
            let sr = new spiderRequest(chapterList);
            return new Promise((resolve,reject)=>{
                sr.getContent()
                    .then((data)=>{
                        if(data&&data.bookinfo){
                            let bookinfo = data.bookinfo,
                                name = bookinfo.name,
                                author =  bookinfo.author;
                            let book = new Book(name,author);
                            resolve(bookDao.insert(book));
                        }else{
                            reject('bookinfo is null');
                        }

                    })
                    .catch((err)=>{
                        reject(err);
                    });
            });
        }
    }
    updateBookInfo(){
        let self = this;
        let sr = new spiderRequest(bookList);
        sr.getContent()
            .then(function(result){
                let tasks = [];
                if(Array.isArray(result)){
                    tasks =  result.map(function(item,index){
                        return BookInfo.saveABookInfo(item.url);
                    });
                    //console.log(tasks);
                    //tasks = tasks.slice(0,20);
                }
                return tasks;
            })
            .then(tasks=>{
                return Async.parallel(tasks,20);
            })
            .then(data=>{
                console.log(data);
            })
            .catch(err=>{
                console.log('error');
            });
    }
}
let bi = new BookInfo();
bi.updateBookInfo();
// BookInfo.saveABookInfo('http://www.37zw.net/0/613/')