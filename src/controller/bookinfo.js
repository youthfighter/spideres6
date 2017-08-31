/**
 * Created by Administrator on 2017/8/19 0019.
 */
const Book = require('../model/book');
const bookDao = require('../dao/bookDao');
const spiderRequest = require('../../spider/spiderRequest');
const bookList = require('../../settings/bookList');
const chapterList = require('../../settings/chapterList');
const chapterInfo = require('../../settings/chapterInfo');
const Async = require('../tools/promise-async');

class BookInfo{
    static updateABookInfo(url){
        chapterList.url = url;
        let chapterArr = [];
        return new spiderRequest(chapterList)
            .getContent()
            .then(data=>{
                chapterArr = data.chapterList;
                return new Book(data.bookinfo.name,data.bookinfo.author).save();
            })
            .then((bookId)=>{
                console.log(bookId,chapterArr);
            })
    }
    static updateChapters(arr){
        Async.eachLimit(arr,(value,index)=>{
            chapterInfo.url = value.url;
            return new spiderRequest(chapterInfo)
                .getContent()
                .then(data=>{
                    chapter.bookId = '123';
                    chapter.chapterIndex = index;
                    chapter.chapterName = data.chapterName;
                    chapter.content = data.content;
                    return chapter.save()
                })
        },10)
    }
}
BookInfo.updateABookInfo('http://www.37zw.net/0/613/');
