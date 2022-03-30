

var global_config = {
    img_src_address:'',
    index:2,
    offset:20
}



function getBase64(url, callback) {
	if(url.indexOf('http')==-1){
		return callback ? callback(url) : null;
	}
  var Img = new Image(),
  dataURL = '';
  Img.src = url;
  Img.setAttribute('crossOrigin', 'Anonymous');
  Img.onload = function() {
    var canvas = document.createElement('canvas'),
    width = Img.width,
    height = Img.height;
    canvas.width = width;
    canvas.height = height;
    canvas.getContext('2d').drawImage(Img, 0, 0, width, height);
    dataURL = canvas.toDataURL('image/jpeg',0.01*gobal_config.speed);
    return callback ? callback(dataURL) : null;
  };
}




function write(value){
	var inputs = document.getElementsByTagName("input");
	for(var i=0;i<inputs.length;i++){
		for(var j=0;j<inputs[i].attributes.length;j++){
				if(inputs[i].attributes[j].nodeValue.indexOf("驗證碼")!=-1 || inputs[i].attributes[j].nodeValue.indexOf("验")!=-1 || inputs[i].attributes[j].nodeValue.indexOf("code")!=-1){
					inputs[i].value=value;
					gobal_config.VerfitySIGN = true;
				}
		}
	}
}

setTimeout(async ()=>{
    try {
        let model_path = chrome.runtime.getURL("extension/common.onnx");
        let session = await ort.InferenceSession.create(model_path);
        // let inputs = document.getElementsByTagName("input");
        // for(let i=0;i<inputs.length;i++){
        //     for(let j=0;j<inputs[i].attributes.length;j++){
        //         if(inputs[i].attributes[j].nodeValue.indexOf("驗證碼")!=-1 || inputs[i].attributes[j].nodeValue.indexOf("验")!=-1 || inputs[i].attributes[j].nodeValue.indexOf("code")!=-1){
        //             let img_src = inputs[i].parentNode.getElementsByTagName("img")[0].src
        //             console.log(img_src)
        //                 gobal_config.img_src_address = img_src;
        //                 getBase64(img_src,image_base64=>{
        //                     var imgs = document.getElementsByTagName("img");
        //                     for (var i=0;i<imgs.length;i++) {
        //                         if(imgs[i].currentSrc==gobal_config.img_src_address){
        //                             imgs[i].src = image_base64;
        //                         }
        //                     }
        //                     image_base64 = image_base64.match(/64,(.*?)$/)[1];
        //                     chrome.runtime.sendMessage({data:image_base64})
        //                 });
        //         }
        //     }
        // }
    } catch (error) {
        console.log(error);
    }
})
