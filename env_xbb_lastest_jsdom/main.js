
let firsttime=+new Date()
const { VM, VMScript } = require("vm2")
const fs = require("fs");
const { JSDOM } = require('jsdom')
const path = require("path");
// const cheerio = require('cheerio')
// const bodomparse = require('xmldom').DOMParser
const {createCanvas}=require('canvas')
// const CryptoJS = require("crypto-js");  // npm install crypto-js
const express=require('express')
let run_path=path.resolve(__dirname, './run/');
let config_path = path.resolve(__dirname, './config/');
let tools_path=path.resolve(__dirname, './tools/');

const tools=require(`${config_path}/tools.config`)
const env=require(`${config_path}/env.config`)

fs.writeFileSync(`${run_path}/log.txt`,"")

//当前电脑是不是windows系统
isWindowSystem=true
console.log(`当前系统为win`,isWindowSystem)

//创建沙盒实例
const vm = new VM();

const configCode=fs.readFileSync(`${config_path}/config.js`)
//导入功能插件相关函数
const toolsCode =tools.getCode();
//导入浏览器环境相关
const envCode = env.getCode();
//导入全局初始化
const globalInit = tools.getFile("globalInit");
//导入用户初始化代码
const userInit = tools.getFile( "userInit");
//导入设置代理对象
const proxyObj =  tools.getFile("proxyObj");
//导入需要调试的代码
const jscode = fs.readFileSync(`${run_path}/run.js`)
//导入异步执行的代码
const asyncCode = tools.getFile("async");
//导入jquery的代码
const myReqCode=tools.getFile('myReqHelper')

// bodavm.memory.tag[0].__proto__=HTMLDocument.prototype
//整合代码
//导入日志代码
const log_code=fs.readFileSync(`${tools_path}/printLog.js`)
//测试
const globadlThis=fs.readFileSync(`${tools_path}/globalThis.js`)
// const codeTest=`${configCode}${log_code}${toolsCode}${envCode}${globalInit}${userInit}${changeDom}${proxyObj}${jscode}${asyncCode}`+"\r\n"+"debugger";
const last_deal=fs.readFileSync(`${run_path}/lastDeal.js`)

var window_config_code=''
//该目录下的代码只能在windows下运行
if (isWindowSystem){
    window_config_code=fs.readFileSync(`${tools_path}/winSystemFunc.js`)
    var boallundefined=  new xtd;
    // debugger
    vm.setGlobal('boallundefined',boallundefined)
}
// debugger
// const codeTest=`${configCode};;${toolsCode};${log_code}${envCode}${userInit};;${globadlThis}${globalInit}${proxyObj};;;;debugger;try{;${jscode}${asyncCode}}catch(e){console.log(e.message,e.stack);}finally{;${last_deal}};get_cookie`;
const codeTest=`${configCode};;${toolsCode};${log_code}${envCode}${userInit};;${globadlThis}${myReqCode}${window_config_code}${globalInit}${proxyObj};;;;debugger;;${jscode}${asyncCode};${last_deal};get_cookie`;

const app = express()
// app.get('./gethtml', async function (req, res) {
//     val =req.query 
    
// })
let bohtml_=fs.readFileSync(`${run_path}\\run.html`).toString('utf-8')
url='https://qikan.cqvip.com/Qikan/Search'


// bohtml_
const dom = new JSDOM(bohtml_, 
    {
        url: url,
        referrer: url,
        contentType: "text/html",
        includeNodeLocations: true,
        pretendToBeVisual: true,
        // runScripts: "dangerously",
    });


// debugger
console.log('jsdom 导入完成',+new Date()-firsttime)
// dom.window.onload = () => {
//     debugger
//     console.log("DOM loaded!");
//   };


bodaobj={
    window:dom.window,
    document:dom.window.document,
    location:dom.window.location,
    navigator:dom.window.navigator,
    navigation:dom.window.navigation
    // "bohtml_":bohtml_,
    // "JSDOM":JSDOM,
    // "url":url
}

// debugger
// iframe


//沙盒创建全局
vm.setGlobal('bofs', fs)
vm.setGlobal('isWindowSystem',isWindowSystem)
// // vm.setGlobal('bobo$',bobo$)
// // debugger
// vm.setGlobal('HookedFunction',HookedFunction)
vm.setGlobal('bodaobj',bodaobj)
vm.setGlobal('bocreateCanvas',createCanvas)

// let iframes=bobo$('iframe')
// console.log('iframes的个数---->',iframes.length)
// if (iframes.length>0){
//     //更好的处理方式为开length个 vm 但是太降低性能了,目前检测iframe 不严, 基本上就比较一下== 先用这个方式过
//     function Window(){}
//     window={
        
//     }
//     window.top=window
//     window.parent=window
//     window.self=window
//     window.__proto__=Window.prototype
//     // Object.setPrototypeOf(window,Window.prototype)
//     vm.setGlobal('createwindow2',window)

// }




// vm.run('debugger;!new function(){eval("this.a=1")}().a')

const script = new VMScript(codeTest, "./debugJS.js")

// const result = vm.run(script);
var getcookieapi=vm.run(script)


//
app.get('./ip', async function (req, res) {
    val = getcookieapi()
    res.send(val)
})
let lastime=+new Date()
console.log('花费时间:',lastime-firsttime)
// app.listen(3000)
//输出结果
debugger
console.log('结果:',getcookieapi())

fs.writeFileSync(`${run_path}/output.js`,codeTest)

