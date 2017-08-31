/**
 * Created by Administrator on 2017/8/31 0031.
 */
const spiderRequest = require('../../spider/spiderRequest');
const chapterList = require('../../settings/chapterList');
const Book = require('../model/book');
class BookSpider{
    constructor(url){
        this.url = url;
        this.result;
    }
    getResult(){
        let self = this;
        chapterList.url = self.url;
        return new spiderRequest(chapterList).getContent()
            .then(data=>{
                data.chapterList.map((value,index)=>{
                    return value.url = data.url+value.url;
                });
                self.result = data;
                return self.result;
            });
    }
    getBookInfo(){
        let self = this;
        if(self.result){
            let b = new Book(self.result.bookinfo.name,self.result.bookinfo.author);
            return Promise.resolve(b);
        }else{
            return self.getResult()
                .then(data=>{
                    return new Book(data.bookinfo.name,data.bookinfo.author);
                });
        }
    }
    getChapterList(){
        let self = this;
        if(self.result){
            return Promise.resolve(self.result.chapterList);
        }else{
            return self.getResult()
                .then(data=>{
                    return data.chapterList;
                });
        }
    }
}
class ChapterSpider{
    constructor(url){
        this.url = url;
        this.result;
    }
    getResult(){
        let self = this;
        chapterInfo.url = self.url;
        return new spiderRequest(chapterInfo).getContent()
            .then(data=>{
                self.result = data;
                return self.result;
            })
    }
    getContent(){
        let self = this;
        if(this.result){
            return Promise.resolve(this.result);
        }else{
            return self.getResult();
        }
    }
}
module.exports = BookSpider;
/*
let b = new BookSpider('http://www.37zw.net/0/613/');
b.getBookInfo()
    .then(data=>{
        console.log(data);
    });
b.getChapterList()
    .then(data=>{
        console.log(data);
    });*/
