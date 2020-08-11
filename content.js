
window.onload = ()=>{
    console.log("Chrome extension go after loading.");
    let title = document.querySelector("title").innerHTML;
    if(title=="Producer"){
        sendMessage = document.querySelector("#key").innerHTML;
        chrome.runtime.sendMessage({"producer_message":sendMessage});

    }else if(title=="Consumer"){
        chrome.runtime.onMessage.addListener(
            (request, sender, sendResponse) =>{
                let display = document.querySelector("#message");
                display.innerHTML = request.producer_message;
                console.log("Receiving", request.producer_message);
                console.log(sender.tab?"from a content script: "+sender.tab.url:"from the extension");
            }
        );

    }
  
}
var sendMessage = null;