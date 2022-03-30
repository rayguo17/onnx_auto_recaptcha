操作流程

content_script.js 
1. 识别出是jaccount登录页面，定位验证码所在位置，
2. 获取当前img传给service worker
3. 得到返回结果，填入验证码，执行点击操作

service worker/background.js
1. 初始化模型，加载模型
2. 得到图片之后，进行一些预处理
3. 得到结果之后，返回给content_script.js


service worker 没法load,只能使用webpack，但是这样太麻烦了，作为一个实验性质的项目，先在content_script里面把所有逻辑完成了。

浏览器端运行时库采用onnx runtime web
训练好的模型使用的是 ddddocr的model common.onnx
图像处理使用了pica
