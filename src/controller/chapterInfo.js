/**
 * Created by Administrator on 2017/8/29 0029.
 */
const chapterInfo = require('../../settings/chapterInfo');
const spiderRequest = require('../../spider/spiderRequest');
const Chapter = require('../model/chapter');
class ChapterController{
    static updateAChapterInfo(chapter){
        //保存一个章节
        chapterInfo.url = 'http://www.37zw.net/0/613/305978.html';
        return new spiderRequest(chapterInfo)
            .getContent()
            .then(data=>{
                chapter.chapterName = data.chapterName;
                chapter.content = data.content;
                return chapter.save()
            });
    }
}
let c = new Chapter(1,1,'111');
ChapterController.updateAChapterInfo(c)
    .then(data=>{
        console.log(data);
    });