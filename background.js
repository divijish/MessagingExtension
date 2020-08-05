console.log("Background script running");

let promise = (resolve) => {
    return new Promise(
        resolve
    );
};

let message = "";
let producerCount = 0, consumerCount = 0;

promise(
    () => {
        
        setTimeout(()=>{

            chrome.tabs.query({
                active:true,
                
            }, function(tabs){
                var tab = tabs[0];
                var url = tab.url;

                
            });

        
        },  200)
    }
).then(()=> console.log("Message promise"))

chrome.tabs.query({
    active:true,
    
}, function(tabs){
    var tab = tabs[0];
    var url = tab.url;    
});
var tabId = null;
chrome.runtime.onMessage.addListener(
    (request,sender,sendResponse)=>{
        console.log("sender",sender);
        console.log("request",request);

        chrome.tabs.query({url:"http://127.0.0.1:8081/*"},function(results){
            console.log("Result tab", results);
             tabId = results[0].id;

             chrome.tabs.sendMessage(
                tabId, {"receiverMessage":request.message});
        }
        );

        
    }
)

