/**
 * Created by Administrator on 2017/8/19 0019.
 */
module.exports = {
    encode:'gbk',
    content: {
        'selector': '.box_con',
        'children':{
            'chapterName':{
                'selector':'.bookname h1',
                'value':['text']
            },
            'content':{
                'selector':'#content',
                'value': ['html']
            }
        }
    }
}