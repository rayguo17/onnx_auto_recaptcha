操作流程

content_script.js 
1. 识别出是jaccount登录页面，定位验证码所在位置，
2. 获取当前img传给service worker
3. 得到返回结果，填入验证码，执行点击操作

service worker/background.js
1. 初始化模型，加载模型
2. 得到图片之后，进行一些预处理
3. 得到结果之后，返回给content_script.js


service worker 没法load 其他file。真的是。。。