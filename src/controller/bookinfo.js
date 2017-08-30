/**
 * Created by Administrator on 2017/8/19 0019.
 */
const Book = require('../model/book');
const bookDao = require('../dao/bookDao');
const spiderRequest = require('../../spider/spiderRequest');
const bookList = require('../../settings/bookList');
const chapterList = require('../../settings/chapterList');
const Async = require('../tools/promise-async');

class BookInfo{
    static updateABookInfo(url){
        chapterList.url = url;
        return new spiderRequest(chapterList)
            .getContent()
            .then(data=>{
                return new Book(data.bookinfo.name,data.bookinfo.author).save();
            })
    }
}
BookInfo.updateABookInfo('http://www.37zw.net/0/613/');
