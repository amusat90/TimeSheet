class View {

  renderTasksInterface( task  ){
    var parag = document.createElement('tr');
    parag.innerHTML = task.name;
    listOfTasks.appendChild( parag );
    parag.className = "task-item";

    var timeDisplayButton = document.createElement('a');
    timeDisplayButton.innerHTML = this.returnTimeCalculation( task.time.seconds );
    parag.appendChild( timeDisplayButton );

    var stopStartButton = document.createElement('button');
    stopStartButton.className= "btn btn-secondary";
    if ( task.toggle === false ) {
      stopStartButton.innerHTML = '<i class="fas fa-play"></i>'; // start
    }
    else {
      stopStartButton.innerHTML = '<i class="fas fa-pause"></i>'; //Pause
    }
    parag.appendChild( stopStartButton );
    stopStartButton.addEventListener('click', stopStartCounter);

    if ( task.check === false ) {
      var checkButton = document.createElement("button");
      checkButton.className= "btn btn-secondary";
      checkButton.innerHTML= '<i class="fas fa-check"></i>';  //check
      parag.appendChild(checkButton);
      checkButton.addEventListener('click', checkUncheckTask);
    }
    else {
      var deleteButton = document.createElement('button');
      deleteButton.className= "btn btn-secondary";
      deleteButton.innerHTML= '<i class="fas fa-trash"></i>' ; //Delete
      parag.appendChild(deleteButton);
      deleteButton.addEventListener('click', deleteTask);
      deleteButton.parentNode.style="text-decoration: line-through";
    }
  }




  returnTimeCalculation( taskSeconds ){
    var hours = Math.floor(taskSeconds / 60 / 60);
    var minutes = Math.floor(taskSeconds / 60) - (hours * 60);
    var seconds = taskSeconds % 60;
    var timeFormat  = (hours ? (hours > 9 ? hours : "0" + hours) : "00") + ":" +
                      (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" +
                      (seconds > 9 ? seconds : "0" + seconds);
    return timeFormat;
  }

  // changeStatus(e) {
  //   var button = e.target;
  //   if (button.className === 'btn btn-secondary' ) {
  //     button.className = 'btn btn-danger' ;
  //     button.innerText = "Delete";
  //     button.parentNode.style="text-decoration: line-through;";
  //   }
  //   else {
  //     deleteTask(e);
  //   }
  // }

}
