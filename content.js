let inject_html = `<div>
                    <button  
                      type='button' 
                      id='DarkMode' 
                      style='color:white; 
                      background: red; 
                      top: 8%; left: 87%;z-index: 999999;
                      position: fixed; transform: translate(-50%, -50%);'
                      >Dark mode
                    </button>
                    <button  
                      type='button' 
                      id='Files' 
                      style='color:white; 
                      background: red; 
                      top: 8%; left: 91%;z-index: 999999;
                      position: fixed; transform: translate(-50%, -50%);'
                      >Files
                    </button>
                  </div>`;
$(inject_html).appendTo("body");
$('head').append('<link rel="stylesheet" href="style.css" type="text/css" />');

if(localStorage.getItem("theme") == null){
  localStorage.setItem("theme", "light");
}

let localData = localStorage.getItem("theme");
console.log(localData);

if(localData == "light"){
  document.body.classList.remove("dark-theme")

}
else{
  document.body.classList.add("dark-theme");
}

$("#DarkMode").click(function(){
  document.body.classList.toggle("dark-theme");
  if(document.body.classList.contains("dark-theme")){
    localStorage.setItem("theme", "dark");
  }else{
    localStorage.setItem("theme", "light");
  }
});

$("#Files").click(function(){
  window.location.href ="https://uandes.instructure.com/files";
});

