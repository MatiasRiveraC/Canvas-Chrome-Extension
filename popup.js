
let test = document.getElementById("test");
let profile = document.getElementById("profile");



test.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  chrome.scripting.insertCSS({
    target: { tabId: tab.id },
    files: ["style.css"]
  }); 
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: TEST,
  }); 
});

function TEST(){
  document.body.classList.toggle("dark-theme");
  if(document.body.classList.contains("dark-theme")){
    localStorage.setItem("theme", "dark");
  }else{
    localStorage.setItem("theme", "light");
  }
}



profile.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: redirect_profile,
  });
});


function redirect_profile(){
  window.location.href ="https://uandes.instructure.com/profile";
}

