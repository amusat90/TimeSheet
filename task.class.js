class Task {

  constructor(name) {
    this.toggle = false;
    this.check = false;
    this.name = name;
    this.time = {
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
    // this.description = "";
    this.interval = undefined;
  }

  toggleCounter(){
    this.toggle = ! this.toggle;

    if ( this.toggle === false ) {
      clearInterval(this.interval);
      renderAllTasks();
    }
    else{
      var self = this;
      this.interval = setInterval( function() {
          if (self.toggle == true ) {
            self.time.seconds ++;
            renderAllTasks();
          }
        },1000);
    }

  }

  toggleCheck(){
      this.check = ! this.check;
      renderAllTasks();
  }

}
