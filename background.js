
/*
chrome.runtime.onInstalled.addListener(() =>{
    chrome.storage.local.set({
        name:"Matias"
    });
    
});


chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse){
        if(request.msg == "nombre"){
            sendResponse({msg: "Matias"});
        }
    }
);
*/

let color = '#000000';
let ogcolor = '#ffffff'; //get web page background color

chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.set({ color });
    chrome.storage.sync.set({ ogcolor });
    console.log('Default background color set to %cgreen', `color: ${color}`);
  });