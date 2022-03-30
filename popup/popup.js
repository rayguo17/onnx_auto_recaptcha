window.onload = ()=>{
    console.log("haha");
    let save_btn = document.getElementById("saveJaccount");
    let save_form = document.getElementById("jaccount-form");
    save_form.addEventListener('submit',submit_handler);
    console.log(save_btn);
    save_btn.addEventListener('click',click_handler);
}
let submit_handler = function(e){
    e.preventDefault();
    let jac_in = document.getElementById("JUsername");
    let pas_in = document.getElementById("JPassword");
    let jaccount = jac_in.value;
    let password = pas_in.value;
    chrome.storage.sync.set({ "jaccount":jaccount,"password":password });
    console.log("on submit");
}
