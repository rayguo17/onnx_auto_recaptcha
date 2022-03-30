// const ort = require('onnxruntime-web');
// const pica = require('pica');

var session='';
console.log('i am load!')
chrome.runtime.onInstalled.addListener( async ()=>{
    //session = await ort.InferenceSession.create('./common.onnx');
    console.log(session);
})

chrome.runtime.onMessage.addListener(async (req, sender, sendResponse)=>{

})