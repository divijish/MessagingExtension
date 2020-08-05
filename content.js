console.log("Chrome extension go");

let sendMessage = document.querySelector("#sendMessage");

if(sendMessage!=undefined)
sendMessage.addEventListener("click", ()=>{

    let message = document.querySelector("#messageBox").value;
    console.log(message);

    chrome.runtime.sendMessage({"message":message});
})

chrome.runtime.onMessage.addListener(
    (request, sender, sendResponse)=>{

        let display = document.querySelector("#display");
        display.innerHTML = request.receiverMessage;

        console.log("Receiving: ", request.receiverMessage)
        console.log(sender.tab?"from a content script: "+sender.tab.url:"from the extension");
       
    }
)

