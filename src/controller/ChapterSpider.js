/**
 * Created by Administrator on 2017/8/31 0031.
 */
const spiderRequest = require('../../spider/spiderRequest');
const chapterInfo = require('../../settings/chapterInfo');
const Chapter = require('../model/chapter');
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
            return Promise.resolve(self.result.content);
        }else{
            return self.getResult()
                .then(data=>{
                    return data.content;
                });
        }
    }
}
module.exports = ChapterSpider;
/*
let cc = new ChapterSpider('http://www.37zw.net/0/613/305978.html');
cc.getContent()
    .then(result=>{
        console.log(result);
    })*/
