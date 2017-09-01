/**
 * Created by Administrator on 2017/8/16 0016.
 */
module.exports = {
    url: 'http://www.biquku.com/xiaoshuodaquan/',
    encode: 'gbk',
    content: {
        'selector': '#main',
        'children':{
            'bookList':{
                'selector':'.novellist ul li a',
                'value':{
                    'name': ['text'],
                    'url': ['attr', 'href'],
                }
            }
        }

    }
}
