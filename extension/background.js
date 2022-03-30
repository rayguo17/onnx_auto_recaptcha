//const ort = require('onnxruntime-web');
//const pica = require('pica');

var session='';
var model_path='';
let wasm_path = '';

chrome.runtime.onInstalled.addListener( async ()=>{
    //session = await ort.InferenceSession.create('./common.onnx');
    model_path =  chrome.runtime.getURL('extension/common.onnx');
    wasm_path = chrome.runtime.getURL('extension/ort-wasm-simd.wasm');
    console.log(wasm_path);
    //console.log(session);
})

chrome.runtime.onMessage.addListener(async (req, sender, sendResponse)=>{

})