var ColorPicker = function(event){
    console.log(event.target.value);
    //save color value to id on globalCourses
}

function saveChanges(){
    console.log("Values saved!");
    //save json to chrome.storage
}

let globalCourses = null;

chrome.storage.local.get(["courses"], function(courses){
    globalCourses = courses.courses;
 
    for(course of globalCourses){ //setting up divs

        document.getElementById("mainDiv").innerHTML += '<div class=subContainer><p class=courseName>'+ course.name + "</p><input id ='I" + course.id+"'type='color' value='" + course.color+"'></input></div>";
    }
    document.getElementById("footDiv").innerHTML += '<button id=saveBtn>Save changes</button>'; //save Btn
    document.getElementById("saveBtn").addEventListener("click", saveChanges, false);
    let id = "";
    for(course of globalCourses){ //setting up eventListeners
        id = "I"+course.id;
        console.log(id);
        document.getElementById(id).addEventListener('change', ColorPicker,false); //change not input
    }

});

/*
let courses = {"courses":[
    {"id":15991, "name": "Arquitectura de Computadores", "color":"#ff0000"},
    {"id":16023, "name": "ARTIFICIAL INTELLIGENCE", "color":"#ff0000"},
    {"id":16015, "name": "INTR. A LA INGENIERIA DE SOFTW", "color":"#ff0000"},
    {"id":16022, "name": "Proyecto Desarrollo Software", "color":"#ff0000"},
    {"id":16006, "name": "TERMODINAMICA", "color":"#ff0000"},
    {"id":12134, "name": "UANDES al dia", "color":"#ff0000"}]}
*/


