
document.addEventListener("DOMContentLoaded", setDarkmode());

function setDarkmode(){
    
chrome.runtime.sendMessage({msg: "darkMode"}, function(response){
    let darkMode = response.msg;
    console.log(darkMode);
  
    if(darkMode){
      

      let extras = document.querySelectorAll(".ic-DashboardCard__header_image, .ic-DashboardCard__header_hero, .avatar");
      extras.forEach((item) => {
        item.style.filter = "invert(1) hue-rotate(180deg)"; 
      });

      let header = document.getElementById("header");
      header.style.filter = "invert(1) hue-rotate(180deg)"; 

      document.querySelector("body").style.filter = "invert(1) hue-rotate(180deg)";
      document.body.style.backgroundColor = "#000000";
      
    }

  });
}

