/*##############################
  INJECT FLOATING MENU
################################*/

let inject_html = `<div id='floating_menu'
                      class='float_menu'
                      >
                      <div id='btn_lay_1'
                      class='float_menu_sub'
                      >
                        <button  
                          type='button' 
                          id='DarkMode'
                          class='float_menu_top_btn'
                          >Dark
                        </button>
                        <input  
                          type='color' 
                          id='color' 
                          style='color:white; 
                          background: #B8B7B7;
                          width:50px;height:50px;
                          border-radius: 15px;'
                          >
                        </input>
                        <button
                          type='button' 
                          id='ShowGradesBtn'
                          class='float_menu_top_btn'
                          >Grades
                        </button>
                      </div>
                      <div id='btn_lay_2'
                      class='float_menu_sub'
                      >
                      </div>
                      <div id='btn_lay_3'
                      class='float_menu_sub'
                      >
                      </div>
                      <div id='announce_lay'
                      class='announce_sub'
                      >
                      </div>
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
  document.getElementById('color').value = color; //set input color to local storage value

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


/*##############################
  API CALLS
################################*/

function removeArrValue(arr,value) {
  var index = arr.indexOf(value);
  if (index > -1) {
      arr.splice(index, 1);
  }
  return arr;
}

//https://uandes.instructure.com/dashboard-sidebar LISTA ACTIVIDADES


let coursesID = []; //all courses IDs
let coursesJson = []; //first name then id
//https://uandes.instructure.com/api/v1/users/self/favorites/courses?include[]=term&exclude[]=enrollments&sort=nickname   GET
let colors = ["#ff0000", "#00EEFF", "#FF6F00", "#FFEE00", "#00ff00", "#ff00ff", "#0000ff"];
let color = "gray";
const request = new XMLHttpRequest();
request.open("GET", "https://uandes.instructure.com/api/v1/users/self/favorites/courses?include[]=term&exclude[]=enrollments&sort=nickname");
request.send();
request.onload = () =>{
  //console.log(request);
  if(request.status == 200){
    

    //GET CHROME VALUES COLOR INSIDE THIS FOR LOOP (IT A THREAD)
    chrome.storage.local.get(["courses"], function(coursesGET){
    let courses = JSON.parse(request.response);
    for(course of courses){
      coursesID.push(course.id);
      if(colors.length == 0)
        color = "#FF6F00";
      else{
        color = colors[0];
      }

      removeArrValue(colors,color);
      /*
      if(localStorage.getItem(course.id) == null){ // check if course id != null in localstorage
        localStorage.setItem(course.id, color);
      }
      else{
        color = localStorage.getItem(course.id); //else get localstorage value
      }
      */
 
      

      if(Object.keys(coursesGET).length != 0){
        for(courseGET of coursesGET.courses){

          if(courseGET.id == course.id){
   
            color = courseGET.color;
            
            break;
          }
        }
      }
      coursesJson.push({"id": course.id, "name":course.name, "color":color}); //array of jsons
      let href = "href='https://uandes.instructure.com/courses/" +course.id+"'";

      document.getElementById("btn_lay_2").innerHTML += "<a "+ href + "><button title='" + course.name + "' style = 'border-radius: 25px; height:30px; width:30px; padding: 0px; background:" + color + ";' >" + course.name.substring(0,2) + "</button></a>";

    }
    
    //localStorage.setItem("courses", JSON.stringify(coursesJson));

    chrome.storage.local.set({ "courses": coursesJson }, function(){
     
    });

    //https://uandes.instructure.com/feeds/calendars/course_mDtcjS1Bhrg2aZNWMtrkVFw2AjNh0AnX4i7T7KK3.ics
    //json.calendar.ics
    //course = json.uuid
  });
  }
}

let coursesOrder = Array(coursesID.length); //order array

/*##############################
  API USER ID & API FUNCTION
##############################*/




const request3 = new XMLHttpRequest();
request3.open("GET", "https://uandes.instructure.com/api/v1/users/self"); // GET USER ID & current_score /100 = > NF*6 +1
request3.send();
request3.onload = () =>{
  //console.log(request3);
  if(request3.status == 200){
    let courses3 = JSON.parse(request3.response);

    //console.log(courses3.id);

    const request2 = new XMLHttpRequest();
    let userID =courses3.id; 
    request2.open("GET", "https://uandes.instructure.com/api/v1/users/"+ userID+ "/enrollments"); // GET USER ID & current_score /100 = > NF*6 +1
    request2.send();
    request2.onload = () =>{
      //console.log(request2);
      if(request2.status == 200){
        let courses2 = JSON.parse(request2.response);

        //console.log(courses2);
        for(course of courses2){
          let indexCourse = coursesID.indexOf(course.course_id);
          coursesOrder[indexCourse] = course.grades.current_score;
        }
        //console.log(coursesOrder);
        let counter = 0;
        for(grade of coursesOrder){
          let NF = (grade/100)*6 +1;
          NF = Math.round(NF * 10) / 10
          //console.log(NF);

          //add NF to html
          let href = "href='https://uandes.instructure.com/courses/" +coursesID[counter]+"/grades'"; 
          document.getElementById("btn_lay_3").innerHTML += "<a "+ href + "><button style = 'border-radius: 25px; height:30px; width:30px; padding: 0px;' >"+ NF+ "</button></a>";
          counter++;
        }

        
      }
    }

  }
}

//https://uandes.instructure.com/api/v1/planner/items?start_date=2021-09-20T03:00:00.000Z GET

const request4 = new XMLHttpRequest();
request4.open("GET", "https://uandes.instructure.com/api/v1/planner/items?start_date=2021-09-20T03:00:00.000Z"); 
request4.send();
request4.onload = () =>{
  //console.log(request4);
  if(request4.status == 200){
    let resp = JSON.parse(request4.response);
    console.log(resp);
    //context_name UANDES al dia
    //plannable.title Giving Day, Casting Pasapalabra, Concurso de Fotografía y mucho más
    //plannable_date 2021-09-20T15:04:56Z
    //html_url "/courses/12134/discussion_topics/138911"
    let counter =0;
    for(announce of resp){
      if(counter == 4) break;
      if(announce.plannable_type == "quiz" || announce.plannable_type == "assignment"){
        document.getElementById("announce_lay").innerHTML += "<div class='announce_subLay'><p>" + announce.context_name +"</p>" +announce.plannable_date.split("T")[0]+"<p></p><a href='" + announce.html_url+"'><p>" + announce.plannable.title +"</p></a></div>";
        counter++;
      }
    }
  }
}


/*##############################
  GRADE
################################*/
function clean_grades(grades){
  let f_grades = []
  for(let grade of grades) {
    let gradeStr = $(grade).text();
    let trash = ['Haga clic para probar un puntaje diferente'];
    let trash2 = ['El profesor no ha publicado esta calificación'];
    while(gradeStr.includes(trash)){
      gradeStr = gradeStr.replace(trash, '');
    }
    while(gradeStr.includes(trash2)){
      gradeStr = gradeStr.replace(trash2, '');
    }
    if(gradeStr.includes('-')) gradeStr = '0';
    if(gradeStr.includes('Entrega del examen')) gradeStr = '0';
    
  
    f_grades.push(gradeStr.trim());
  }
  return f_grades;
}

function clear_possibles(possibles){
  let f_possibles = []
  for(let possible of possibles){
    let possibleStr = $(possible).text();
  
  
    f_possibles.push(possibleStr.trim());
  }
  return f_possibles;
}

function createCell(cell, text, style) {
  var div = document.createElement('div'),
      txt = document.createTextNode(text); 
  div.appendChild(txt);                    
  div.setAttribute('class', style);       
  div.setAttribute('className', style);  
  cell.appendChild(div);                   
}


function appendColumn() {
  var tbl = document.getElementById('grades_summary');

  var grades = document.getElementsByClassName("grade");
  var possibles = document.getElementsByClassName("points_possible");
  let f_grades = clean_grades(grades);
  let f_possibles = clear_possibles(possibles);
  let counter = 0;


  for (var i = 0; i < tbl.rows.length; i++) {
   
    if(tbl.rows[i].id.includes("submission")){
      if(tbl.rows[i].id.includes("group") || tbl.rows[i].id.includes("final")){
        let values = f_possibles[counter].split("/");
        let num = 1+6*values[0]/values[1];

        createCell(tbl.rows[i].insertCell(tbl.rows[i].cells.length), Math.round(num * 100) / 100, 'grade_value');
        counter ++;
    
      }
      else{
        let num = 1+6*f_grades[counter]/f_possibles[counter];

        createCell(tbl.rows[i].insertCell(tbl.rows[i].cells.length), Math.round(num * 100) / 100, 'grade_value');
        counter ++;
      }
      
    }
  }
}

if(localStorage.getItem("grade") == null){
  localStorage.setItem("grade", "off");
}

let localGradeCheck = localStorage.getItem("grade");


if(localGradeCheck == "off"){
  document.body.classList.remove("grades-show")

}
else{
  document.body.classList.add("grades-show");
}

$("#ShowGradesBtn").click(function(){
  document.body.classList.toggle("grades-show");
  if(document.body.classList.contains("grades-show")){
    localStorage.setItem("grade", "on");
    
  }else{
    localStorage.setItem("grade", "off");
  }
});


try{
  appendColumn();
}
catch{

}

