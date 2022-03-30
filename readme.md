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

工作量：
1. onnx runtime web 放到chrome extension 中运行应该是第一个，没有什么参考资料，只能自己摸索，做了一些前期工作包括

    * a) 在web端部署，使用完整的pica和onnxruntime web，花了一些时间去了解ddddocr里面模型的处理逻辑，并且使用js进行重现；
    * b) 搜索资料关于chrome extension manifest v3, 改了很多方案，因为不清楚chrome extension取扩展包里面的文件的逻辑，发现是chrome的API，并且需要在manifest里体现(web_accessible_resources)
    * c) 由于onnx runtime web 使用到了他们自己写的wasm 文件，而他们去获取wasm文件的逻辑是定义在库里面的，因此需要去更改库里面的取文件逻辑，（chrome extension 取文件要先用chrome.getURL来获取URL，才能用fetch去获取data。

2. 参考了一些其他插件的实现逻辑，包括但不限于autoverify(自动识别验证码），AutoJump（自动外链跳转）,Jaccount Captcha （一位学长做的jaccount自动验证码识别插件）

3. onnx runtime web 运行和python 的运行时库，表现不一样，好像只会读取字符的前一半，在调试的过程中，一直找不到原因，因此只能更改图像预处理的逻辑，使用canvas扩大图片长度一倍，且右边都是空白页。