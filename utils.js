function getIndex(liElem) {
  // var child = e.target.parentNode;
  var index = 0;
  while( (liElem = liElem.previousElementSibling) != null ){
    index++;
  }
  return index ;
}

function Task( hours, minutes ,seconds, name, description) {
  this.hours = hours;
  this.minutes = minutes;
  this.seconds = seconds;
  this.name = name;
  this.description = description;
  this.time = "00:00:00";
}

function add(index) {
  arrayOfObj[index].seconds +=60 ;
  if (arrayOfObj[index].seconds >= 60) {
      arrayOfObj[index].seconds = 0;
      arrayOfObj[index].minutes ++;
      if (arrayOfObj[index].minutes >= 60) {
          arrayOfObj[index].minutes = 0;
          arrayOfObj[index].hours ++;
      }
  }
  arrayOfObj[index].time =
  (arrayOfObj[index].hours ? (arrayOfObj[index].hours > 9 ? arrayOfObj[index].hours : "0" + arrayOfObj[index].hours) : "00") + ":" +
  (arrayOfObj[index].minutes ? (arrayOfObj[index].minutes > 9 ? arrayOfObj[index].minutes : "0" + arrayOfObj[index].minutes) : "00") + ":" +
  (arrayOfObj[index].seconds > 9 ? arrayOfObj[index].seconds : "0" + arrayOfObj[index].seconds);

  renderDisplay();
}

function renderDisplay() {
  tdLocation.innerHTML = null;
  for (var i = 0; i < arrayOfObj.length; i++) {
    tdLocation.innerHTML += '<tr><td>'+ arrayOfObj[i].time+'</td></tr>';
  }
}

function renderTotalTime() {
  totalCalcLoc.innerHTML = null;

  for (var i = 0; i < arrayOfObj.length; i++) {
    totalCalc.hours += arrayOfObj[i].hours;
    totalCalc.minutes += arrayOfObj[i].minutes;
    totalCalc.seconds += arrayOfObj[i].seconds;
  }
  var statement = false;
  do {
    debugger;
    if(totalCalc.seconds >= 60) {
      totalCalc.seconds = 0;
      totalCalc.minutes ++;
        if (totalCalc.minutes >= 60) {
            totalCalc.minutes = 0;
            totalCalc.hours ++;
        }
    }
  }while ( (totalCalc.seconds> 60) || (totalCalc.minutes > 60) || (totalCalc.hours> 60));
  totalCalcLoc.innerHTML = "Total time spent today is: " + totalCalc.hours + ":" +totalCalc.minutes + ":" + totalCalc.seconds ;
}
