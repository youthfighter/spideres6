/**
 * Created by Administrator on 2017/8/19 0019.
 */
let a = { bookinfo: { name: '混沌剑神', author: '作    者：心星逍遥' }};
let arr = [a.bookinfo.name,a.bookinfo.author,a.bookinfo.aa];
console.error(arr);
function aa() {
    return new Promise((resolve,reject)=>{
        reject("212");
    })
}
function bb() {
    return aa()
        .then((data)=>{
            return data;
        })
        .catch(err=>{
            return;
        })
}
bb().then(data=>{
    console.log('end',data);
})
