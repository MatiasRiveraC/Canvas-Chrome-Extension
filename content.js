
document.addEventListener("DOMContentLoaded", setDarmode());

function setDarmode(){
    
chrome.runtime.sendMessage({msg: "darkMode"}, function(response){
    let darkMode = response.msg;
    console.log(darkMode);
  
    if(darkMode){
      document.querySelector("body").style.filter = "invert(1) hue-rotate(180deg)";
      document.body.style.backgroundColor = "#000000";
    }

  });
}