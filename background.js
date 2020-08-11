console.log("Background script running");


var tabId = null;
chrome.runtime.onMessage.addListener(
    (request,sender,sendResponse)=>{
        console.log("sender",sender);
        console.log("request",request);

        chrome.tabs.query({title:"Consumer"},results => {
            console.log("Result tab", results);
             tabId = results[0].id;

             chrome.tabs.sendMessage(
                tabId, {"producer_message":request.producer_message});
        }
        );

        
    }
)

