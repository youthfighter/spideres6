/**
 * Created by Administrator on 2017/8/16 0016.
 */
/*
module.exports = {
    url: 'http://www.biquku.com/xiaoshuodaquan/',
    encode: 'gbk',
    content: {
        'selector': '#main .novellist',
        'children': {
            'bookIndex': {
                'selector': 'h2',
                'value': ['text']
            },
            'bookList': {
                'selector': 'ul li a',
                // 'eq': 0,
                'value': {
                    'name': ['text'],
                    'url': ['attr', 'href'],
                }
            }
        }
    }
}*/
module.exports = {
    url: 'http://www.biquku.com/xiaoshuodaquan/',
    encode: 'gbk',
    content: {
        'selector': '#main .novellist ul li a',
        'value':{
            'name': ['text'],
            'url': ['attr', 'href'],
        }
    }
}
