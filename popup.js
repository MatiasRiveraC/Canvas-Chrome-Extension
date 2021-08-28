// Initialize button with user's preferred color
let darkMode = document.getElementById("darkMode");
let profile = document.getElementById("profile");

// When the button is clicked, inject setPageBackgroundColor into current page
darkMode.addEventListener("click", async () => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: setDarkMode,
    });
});

profile.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: redirect_profile,
  });
});


function redirect_profile(){
  window.location.href ="https://uandes.instructure.com/profile";
  console.log("REDIRECTING");
}


function setDarkMode(){
  chrome.runtime.sendMessage({msg: "darkMode"}, function(response){
    let darkMode = response.msg;
    let extras = document.querySelectorAll(".ic-DashboardCard__header_image, .ic-DashboardCard__header_hero, .avatar ");
    let header = document.getElementById("header");
      
  
    if(!darkMode){
      document.querySelector("body").style.filter = "invert(1) hue-rotate(180deg)";
      document.body.style.backgroundColor = "#000000";
      
      
      extras.forEach((item) => {
        item.style.filter = "invert(1) hue-rotate(180deg)"; 
      });
      
      header.style.filter = "invert(1) hue-rotate(180deg)"; 

      chrome.runtime.sendMessage({msg: "turnOn"}, function(response){});
    }
    else{
      document.querySelector("body").style.filter = "invert(0)";
      document.body.style.backgroundColor = "#ffffff";

      extras.forEach((item) => {
        item.style.filter = "invert(0) hue-rotate(0deg)"; 
      });

      header.style.filter = "invert(0) hue-rotate(0deg)"; 

      chrome.runtime.sendMessage({msg: "turnOff"}, function(response){});
    }

  });
}
  
