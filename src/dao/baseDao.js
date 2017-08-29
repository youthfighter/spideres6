/**
 * Created by Administrator on 2017/8/18 0018.
 */
const mysqlConfig = require('../settings').mysql;
const mysql  = require('mysql');

class baseDao{
    static getConnection(){
        let self = this;
        let connection = mysql.createConnection(mysqlConfig);
        return new Promise(function(resolve,reject){
            connection.connect(function(err){
                if(err){
                    reject(err);
                }else{
                    resolve(connection);
                }
            });
        });
    }
    static query(mapper,modSqlParams){
        let self = this;
        return self.getConnection()
            .then(function(connection){
                return new Promise(function(resolve,reject){
                    connection.query(mapper,modSqlParams,function(err,result){
                        connection.end();
                        if(err){
                            console.log(err);
                            reject(err);
                        }else{
                            resolve(result);
                        }
                    });
                });
            });
    }
}

module.exports = baseDao;
