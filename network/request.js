//封装axios，以便日后使用
import axios from 'axios';

// export function request(config) {
//     return new Promise((resolve,reject)=>{
//         //创建axios实例
//         const instance =axios.create({
//             baseURL:'http://123.207.32.32:8000',
//             timeout:5000
//         });
//         //发送网络请求
//         instance(config)
//             .then(res=>{resolve(res)})
//             .catch(err=>{reject(err)})
//
//     })
// }


export function request(config) {
        //创建axios实例
        const instance =axios.create({
            // baseURL:'http://123.207.32.32:8000',
            // baseURL:"http://111.229.111.185",
            baseURL:"http://localhsot:80",

            timeout:5000
        });
        //发送网络请求
        return  instance(config)
}

//在其他main.js中导入后可以直接使用


// import  {request} from './request.js'
// request ({
//     url:'/home/multidata'
// })
//     .then(res=>{
//         console.log(res);})
//     .catch(err=>{
//         console.log(err);});
