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
const bookListConfig = require('../settings/bookList');
/*new spiderRequest(bookListConfig).getContent()
    .then(data=>{
        return Async.eachLimit(data.bookList,fun2,1);
    })
    .then(data=>{
        console.log('本次更新完成!');
    })
    .catch(err=>{
        console.log('更新失败');
    })*/

const url = 'http://www.37zw.net/0/613/';
fun2({url:'http://www.37zw.net/0/613/'});
function fun2(value,index) {
    chapterListConfig.url = value.url;
    let chapterList;
    return new spiderRequest(chapterListConfig).getContent()
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
            Async.eachLimit(chapterList,fun,10);
            return bookId;
        })
        .then(bookId=>{
            // console.log(`更新${bookId}成功!`)
        })
}


function fun(value,index) {
    return new ChapterSpider(value.url).getContent()
        .then(content=>{
            return new Chapter(value.bookId,index+1,value.name,content).save();
        })
        .then((chapterId)=>{
        //console.log(`更新${value.name}成功!`);
            return chapterId;
        })
        .catch(err=>{
            console.log(err);
            return;
        })
}




