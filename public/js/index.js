function addToDo() {
    var newTask = document.getElementById("newToDo").value;

    var newLi = document.createElement("li");
    newLi.setAttribute("class", "tasks");
    
    var txt = document.createTextNode(newTask);
    newLi.appendChild(txt);

    var ulContainer = document.getElementById("list");
    ulContainer.insertAdjacentElement('beforeend', newLi);
}

var button = document.getElementById("addTask");
button.addEventListener("click", addToDo);

document.querySelector("#list").addEventListener("click", function(e) {
    if (e.target.tagName === 'LI') { // have to put LI in all caps or it wont work
        e.target.classList.toggle("strikethrough");
    }
});