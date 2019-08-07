var enter = document.getElementById("enter");
var reset = document.getElementById("reset");
var userlist = document.getElementById("userlist");
var ul = document.getElementById("unorderlist");
var li = document.querySelector("li");




function createandinsertlist(){
	var li=document.createElement("li");
	// var btn=document.createElement("BUTTON");
	li.appendChild(document.createTextNode(userlist.value));
	// li.appendChild(btn);
	// btn.innerHTML = "x";
	ul.appendChild(li);
	userlist.value="";
}

function enterkeyclicked(){
	if(userlist.value.length>0){
         createandinsertlist();
	}
}

function keypressed(event){
	if(userlist.value.length>0 && event.which===13){
         createandinsertlist();
	} 
}

function resetpressed(){
	
	while (ul.firstChild) {
    ul.removeChild(ul.firstChild);
}}

function listpressed(event){
	// console.log(event.target);
	// this.classList.toggle("list");
	var clicked = event.target.classList.toggle("list");
    if(clicked){
    	    var btn=document.createElement("BUTTON");
    	    btn.innerHTML = "x";
			btn.classList.add("deleteButton");
			event.target.appendChild(btn);

			btn.addEventListener("click", function() {
				event.target.remove();
			});
		} else {
			event.target.getElementsByClassName("deleteButton")[0].remove();
		}
    }



enter.addEventListener("click",enterkeyclicked);
userlist.addEventListener("keypress",keypressed);
reset.addEventListener("click",resetpressed);
ul.addEventListener("click",listpressed);
