/**
 * Created by Administrator on 2017/8/29 0029.
 */
const chapterInfo = require('../../settings/chapterInfo');
const spiderRequest = require('../../spider/spiderRequest');
class ChapterInfoController{
    static updateAChapterInfo(url){
        chapterInfo.url = url;
        new spiderRequest(chapterInfo).getContent()
            .then((data)=>{
                console.log(data);
            })

    }
}
ChapterInfoController.updateAChapterInfo('http://www.37zw.net/0/613/305978.html');