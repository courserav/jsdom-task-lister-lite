document.addEventListener("DOMContentLoaded", () => {
  // your code here
  console.log("The DOM has loaded")
});


let taskForm = document.getElementById("create-task-form")
let taskList = document.getElementById("tasks")

taskForm.addEventListener("submit", function(e) {
  e.preventDefault()
  let text = document.getElementById("new-task-description")
  taskList.innerHTML += `<li class="task-item">${text.value} <input type=button class="done-button" value="Done"></button></li>`

  let doneButtons = document.getElementsByClassName("done-button")

  for (let i = 0; i < doneButtons.length; i++){
    doneButtons[i].addEventListener("click", function(e){
      e.preventDefault()
      this.parentElement.remove()
    }, false)
  }  
  
}, false)


