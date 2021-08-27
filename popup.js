// Initialize button with user's preferred color
let darkMode = document.getElementById("darkMode");

let lightMode = document.getElementById("lightMode");


//ic-DashboardCard__action-container class

chrome.storage.sync.get("color", ({ color }) => {
    darkMode.style.backgroundColor = color;
});

// When the button is clicked, inject setPageBackgroundColor into current page
darkMode.addEventListener("click", async () => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: setPageBackgroundColor,
    });
});

chrome.storage.sync.get("ogcolor", ({ ogcolor }) => {
    lightMode.style.backgroundColor = ogcolor;
});

// When the button is clicked, inject setPageBackgroundColor into current page
lightMode.addEventListener("click", async () => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: setPageBackgroundOGColor,
    });
});

  
  
  // The body of this function will be executed as a content script inside the
  // current page
  function setPageBackgroundColor() {
    chrome.storage.sync.get("color", ({ color }) => {
      document.body.style.backgroundColor = color;
    });
  }

  function setPageBackgroundOGColor() {
    chrome.storage.sync.get("ogcolor", ({ ogcolor }) => {
      document.body.style.backgroundColor = ogcolor;
    });
  }