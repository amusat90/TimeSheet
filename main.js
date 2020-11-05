var ul = document.getElementById('li-location');
var inputContent = document.getElementById('new-task-name');
var tdLocation = document.getElementById("td-location");
var totalCalcLoc = document.getElementById("total-calculation");

// var domLiElements = []; // HTML collection
var arrayOfObj = []; // array of objects
var index; // holds index position for both of the above
var totalCalc = new Task(0,0,0); //total time spent on tasks

function createTask() {
  if ( inputContent.value != "") {
    addUiTask();
  }
  else{
    alert("Please enter a valid task name");
  }
  inputContent.value = "";
}


function addUiTask() {
  arrayOfObj.push(new Task (0,0,0,inputContent.value,""));

  var newLi = document.createElement('a');
  ul.appendChild(newLi);
  newLi.className = 'list-group-item list-group-item-action';

  // adding the task name as TextNode Child
  var textNode = document.createTextNode(inputContent.value);
  newLi.appendChild(textNode);

  // button Delete
  var delBtn = document.createElement('button');
  delBtn.appendChild(document.createTextNode('Delete'));
  newLi.appendChild(delBtn);
  delBtn.addEventListener('click', deleteTask);
  delBtn.className = 'btn btn-secondary';

  // button Stop
  var stopBtn = document.createElement('button');
  stopBtn.appendChild(document.createTextNode('Stop'));
  newLi.appendChild(stopBtn);
  stopBtn.addEventListener('click', stopCounter);
  stopBtn.className = 'btn btn-secondary';

  // button Start
  var startBtn = document.createElement('button');
  startBtn.appendChild(document.createTextNode('Start'));
  newLi.appendChild(startBtn);
  startBtn.addEventListener('click', startCounter);
  startBtn.className = 'btn btn-secondary';

  // domLiElements.push(newLi);
}

function deleteTask(e) {
  var liElem = e.target.parentNode;
  index = getIndex(liElem);
  arrayOfObj.splice(index,1);  //removes array object
  liElem.remove();    //removes  HTML collection object
  renderDisplay();
  index = null;
}

function startCounter(e) {
  var liElem = e.target.parentNode;
  index = getIndex(liElem);
}

function stopCounter(e) {
  index = null;
}

setInterval( function() {
    if( index != null ) {
      add(index);
      renderDisplay();
    }
  },
  1000);
