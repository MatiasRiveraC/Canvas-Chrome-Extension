// Initialize button with user's preferred color
let darkMode = document.getElementById("darkMode");


// When the button is clicked, inject setPageBackgroundColor into current page
darkMode.addEventListener("click", async () => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: setDarkMode,
    });
});


function setDarkMode(){
  chrome.runtime.sendMessage({msg: "darkMode"}, function(response){
    let darkMode = response.msg;
  
    if(!darkMode){
      document.querySelector("body").style.filter = "invert(1) hue-rotate(180deg)";
      document.body.style.backgroundColor = "#000000";
      chrome.runtime.sendMessage({msg: "turnOn"}, function(response){});
    }
    else{
      document.querySelector("body").style.filter = "invert(0)";
      document.body.style.backgroundColor = "#ffffff";
      chrome.runtime.sendMessage({msg: "turnOff"}, function(response){});
    }

  });
}
  
