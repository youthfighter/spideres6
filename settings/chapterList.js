/**
 * Created by Administrator on 2017/8/19 0019.
 */
module.exports = {
    url: 'http://www.37zw.net/0/613/',
    encode:'gbk',
    content:{
        'selector':'#wrapper',
        'children':{
            'bookinfo':{
                'selector':'#info',
                'children':{
                    'name':{
                        'selector':'h1',
                        'eq':0,
                        'value':['text']
                    },
                    'author':{
                        'selector':'p',
                        'eq':0,
                        'value':['text']
                    },
                }

            },
            chapterList:{
                'selector':'#list dd a',
                'value':{
                    'name': ['text'],
                    'url': ['attr', 'href'],
                }
            }
        }
    }
}