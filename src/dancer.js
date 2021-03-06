// Creates and returns a new dancer object that can step
var makeDancer = function (top, left, timeBetweenSteps) {

  // var dancer = {};


  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"><img src="TrumpWindshield.gif" alt="Trump" style="width:500px;height:200px;"></img></span>');
  this.timeBetweenSteps = timeBetweenSteps;
  //debugger;
  this.setPosition(top, left);
  this.step();



  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body

  // return dancer;
};


makeDancer.prototype.step = function () {
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step
  var obj = this;
  setTimeout(obj.step.bind(obj), this.timeBetweenSteps);
};
makeDancer.prototype.setPosition = function (top, left) {
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  //
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

makeDancer.prototype.lineup = function(top, left) {
  this.setPosition(top, left);
  //clock.tick();
};