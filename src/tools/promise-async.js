/**
 * Created by Administrator on 2017/8/21 0021.
 */
class Async{
    static parallel(tasks){
        if(!Array.isArray(tasks)){
            return new Error('need a Array arguments.');
        }
        let ts = tasks.map(task=>{
            return task();
        });
        return Promise.all(ts);
    }
    static eachLimit(arr,fun,lim=1){
        return new Promise((resolve,reject)=>{
            let it = 0;
            let curNum = 0;
            let result = [];
            let errFlag = false;
            if(lim>arr.length){
                lim=arr.length;
            }
            let doTask=(i)=>{
                curNum++;
                fun(arr[i],i)
                    .then((data)=>{
                        curNum--;
                        result.push(data);
                        if(!errFlag&&it<arr.length){
                            doTask(it++)
                        }else if(!errFlag&&curNum===0){
                            resolve(result);
                        }
                    })
                    .catch(err=>{
                        curNum--;
                        errFlag = true;
                        reject(err);
                    })
            }
            for(let i=0;i<lim;i++){
                doTask(it++);
            }
        });
    }
    /*
    * tasks [array] 返回值为promise的函数数组
    * limit [number] 最大并发量
    * */
    static parallelLimit(tasks,limit){
        if(!Array.isArray(tasks)){
            return new Error('need a Array arguments.');
        }
        let taskLimit = limit<tasks.length?limit:tasks.length,
            it = 0,
            curNum = 0,
            result = [];
        return new Promise(function(resolve,reject){
            for(var i=0;i<limit;i++){
                doTask(i);
                it++;
            }
            function doTask(i){
                ++curNum;
                tasks[i]()
                    .then(function(data){
                        --curNum;
                        result.push(data);
                        if(startFlag&&it<tasks.length){
                            doTask(it++);
                        }else if(curNum===0){
                            resolve(result);
                        }
                    })
                    .catch(function (err) {
                        reject(err);
                    });
            }
        });
    }
}
module.exports = Async;

/*let tasks = [1,2,3,4,5,6].map(function(value,index){
    return function(){
        return new Promise(function(resolve,reject){
            setTimeout(function(){
                resolve(`task${value}正在执行!`);
            },value*1000);
        });
    }
});*/
/*let task =(value,index)=>{
    if(index!=1){
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                console.log(`task${index}正在执行!`);
                resolve(index);
            },value*1000)
        });
    }else{
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                console.log(`task${index} error!`);
                reject(index);
            },value*1000)
        });
    }

};

Async.eachLimit([1,2,3,4,5],task,3)
    .then(function(data){
       console.log(data);
    })
    .catch(err=>{
        console.log(err);
    })*/
