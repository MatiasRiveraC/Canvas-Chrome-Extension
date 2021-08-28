
chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse){
        if(request.msg == "darkMode"){
            sendResponse({msg: darkMode});
        }
        else if(request.msg == "turnOff"){
            darkMode = false;
        }
        else if(request.msg == "turnOn"){
            darkMode = true;
        }
    }
);


let color = '#000000';
let ogcolor = '#ffffff'; //get web page background color
let darkMode = false;

chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.set({ color });
    chrome.storage.sync.set({ ogcolor });
    chrome.storage.local.set({darkMode });
  });

