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
                    <input  
                      type='color' 
                      id='color' 
                      style='color:white; 
                      background: red;
                      width:20px;height:20px; 
                      top: 8%; left: 91%;z-index: 999999;
                      position: fixed; transform: translate(-50%, -50%);'
                      >
                    </input>
                  </div>`;
$(inject_html).appendTo("body");
$('head').append('<link rel="stylesheet" href="style.css" type="text/css" />');

/*##############################
  CHANGE COLOR
################################*/


window.addEventListener('load', function () {
  if(localStorage.getItem("color") == null){
    localStorage.setItem("color", "#2d3b45");
  }
  
  let color = localStorage.getItem("color");

  let nodesSpan = document.querySelectorAll('span');
  for(let node of nodesSpan) node.style.color = color;
  let nodesP = document.querySelectorAll('p');
  for(let node of nodesP) node.style.color = color;
  let nodesH3 = document.querySelectorAll('h3');
  for(let node of nodesH3) node.style.color = color;
  let nodesDiv = document.querySelectorAll('div');
  for(let node of nodesDiv) node.style.color = color;
  let nodesA = document.querySelectorAll('a');
  for(let node of nodesA) node.style.color = color;
  let nodesLi = document.querySelectorAll('li');
  for(let node of nodesLi) node.style.color = color;
  let nodesB = document.querySelectorAll('li');
  for(let node of nodesB) node.style.color = color;
})


let colorInput = document.querySelector('#color');

colorInput.addEventListener("input", updateFirst, false);
colorInput.addEventListener("change", watchColorPicker, false);




function updateFirst(event) {
  var p = document.querySelector("p");
  var h3 = document.querySelector("h3");
  var div = document.querySelector("div");
  var span = document.querySelector("span");
  var a = document.querySelector("a");
  var li = document.querySelector("li");
  var b = document.querySelector("b");
  if (p) {
    p.style.color = event.target.value;
  }
  if (h3) {
    h3.style.color = event.target.value;
  }
  if (div) {
    div.style.color = event.target.value;
  }
  if (span) {
    span.style.color = event.target.value;
  }
  if (a) {
    a.style.color = event.target.value;
  }
  if (li) {
    li.style.color = event.target.value;
  }
  if (b) {
    b.style.color = event.target.value;
  }
  localStorage.setItem("color", event.target.value);
}

function watchColorPicker(event) {
  document.querySelectorAll("p").forEach(function(p) {
    p.style.color = event.target.value;
  });
  document.querySelectorAll("h3").forEach(function(h3) {
    h3.style.color = event.target.value;
  });
  document.querySelectorAll("div").forEach(function(div) {
    div.style.color = event.target.value;
  });
  document.querySelectorAll("span").forEach(function(span) {
    span.style.color = event.target.value;
  });
  document.querySelectorAll("a").forEach(function(a) {
    a.style.color = event.target.value;
  });
  document.querySelectorAll("li").forEach(function(li) {
    li.style.color = event.target.value;
  });
  document.querySelectorAll("b").forEach(function(b) {
    b.style.color = event.target.value;
  });
  localStorage.setItem("color", event.target.value);
}

/*##############################
  DARK MODE
################################*/


if(localStorage.getItem("theme") == null){
  localStorage.setItem("theme", "light");
}

let localData = localStorage.getItem("theme");


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


