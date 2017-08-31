/**
 * Created by Administrator on 2017/8/30 0030.
 */
const spiderRequest = require('../spider/spiderRequest');
const bookList = require('../settings/bookList');
const chapterInfo = require('../settings/chapterInfo');
const Book = require('./model/book');
const Chapter = require('./model/chapter');
const BookSpider = require('./controller/BookSpider');
const ChapterSpider = require('./controller/ChapterSpider');
const Async = require('./tools/promise-async');
const chapterListConfig = require('../settings/chapterList');

const url = 'http://www.37zw.net/0/613/';
chapterListConfig.url = url;
let chapterList;
new spiderRequest(chapterListConfig).getContent()
    .then(result=>{
        chapterList = result.chapterList;
        chapterList.map(value=>{
            value.url = result.url + value.url;
            return value;
        });
        return new Book(result.bookinfo.name,result.bookinfo.author).save();
    })
    .then(bookId=>{
        chapterList.map((value,index)=>{
            value.bookId = bookId;
            return value;
        });
        return Async.eachLimit(chapterList,fun,10)
    })
    .then(result=>{
        console.log(result);
    })
    .catch(err=>{
        console.log(err);
    })

function fun(value,index) {
    return new ChapterSpider(value.url).getContent()
        .then(content=>{
            return new Chapter(value.bookId,index+1,value.name,content).save();
        })
        .then((chapterId)=>{
            return chapterId;
        })
        .catch(err=>{
            console.log(err);
            return;
        })
}



