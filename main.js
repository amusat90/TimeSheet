var taskContainer = []; //empty array of objects containing all tasks;
const addTask = document.getElementById("addTask");
const nameOfTask = document.getElementById("nameOfTask");
const listOfTasks = document.getElementById("listOfTasks");
const totalTimeSpent = document.getElementById("totalTimeSpent");

var index;
var view = new View;

// click 'ADD'
addTask.addEventListener('click', function() {
  if ( nameOfTask.value != "") {
    createTask();
  }
  else{
    alert("Please enter a valid task name");
  }
  nameOfTask.value = null;
});
//press ENTER instead of clicking 'ADD'
nameOfTask.addEventListener('keyup', function(event) {
    if (event.keyCode === 13) {
      createTask();
      nameOfTask.value = null;
    }
});
//Array of TASK obj
function createTask() {
  taskContainer.push(new Task(nameOfTask.value));
  renderAllTasks();
}

function renderAllTasks() {
    listOfTasks.innerHTML = null;
    let totalSeconds = 0;
    for( var i = 0 ; i < taskContainer.length ; i ++){
        view.renderTasksInterface(taskContainer[i]);
        totalSeconds += taskContainer[i].time.seconds;
      }

    let renderTotalTimeSpent = document.getElementById("totalTimeSpent");
    renderTotalTimeSpent.innerHTML = view.returnTimeCalculation(totalSeconds) ;
    }

function checkUncheckTask(e) {
  var child = e.currentTarget.parentNode;
  getIndex(child);
  taskContainer[index].toggleCheck();
}

function deleteTask(e) {
  var child = e.currentTarget.parentNode;
  getIndex(child);
  child.remove();    //Removes task from DOM
  taskContainer.splice(index,1);  //Removes task from array of OBJ
}

function getIndex(child) {
  index = 0;
  while ( (child = child.previousElementSibling ) !== null) {
    index ++;
  }
}

function stopStartCounter(e) {
  var child = e.currentTarget.parentNode;
  getIndex(child);
  taskContainer[index].toggleCounter();
  for( var i = 0 ; i < taskContainer.length ; i ++){
      if (( taskContainer[i].toggle === true) && (i != index )) {
        taskContainer[i].toggleCounter() ;
      }
    }
}
