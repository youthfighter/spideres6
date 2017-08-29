/**
 * Created by Administrator on 2017/8/16 0016.
 */
let a = [];
for(var i=0;i<50000;i++){
    a.push({"bookname":new Date().getTime().toString()})
}
console.log(a);