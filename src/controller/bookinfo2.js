/**
 * Created by Administrator on 2017/8/19 0019.
 */
const Book = require('../model/book');
const bookDao = require('../dao/bookDao');
const spiderRequest = require('../../spider/spiderRequest');
const bookList = require('../../settings/bookList');
const chapterList = require('../../settings/chapterList');
const Async = require('../tools/promise-async');

class BookInfoController{
    static updateABookInfo(url){
        let sr = new spiderRequest(url);
        let book;
        sr.getContent()
            .then(data=>{
                if(data&&data.bookinfo){
                    let bookinfo = data.bookinfo,
                        name = bookinfo.name,
                        author =  bookinfo.author;
                    book = new Book(name,author);
                }
                return book;
            })
            .then(book=>{
                return bookDao.queryBookByNameAndAuthor(book.name,book.author);
            })
            .then(data=>{
                if(data.length<1){
                    return bookDao.insert(book);
                }else{
                    return 'success';
                }
            })
            .then(data=>{
                console.log(data);
            })
            .catch(err=>{
                console.log('数据更新失败！');
            })
    }

}
chapterList.url = 'http://www.37zw.net/0/613/';
BookInfoController.updateABookInfo(chapterList);