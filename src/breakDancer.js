
var movingDancer = function() {
  this.toggle();
};

var makeBreakDancer = function (top, left, timeBetweenSteps) {


  //debugger;
  //this.$nodeStatic = $('<span class="dancer staticBreakDancer"><img src="TrumpWindshield.gif" alt="Trump" style="width:500px;height:200px;"></img></span>');
  //this.$nodeStatic.onclick = movingDancer();
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="dancer breakDancer"><img src="TrumpWindshield.gif" alt="Trump" style="width:500px;height:200px;"></img></span>');


  this.setPosition($(window).height()*0.78, left);
};
makeBreakDancer.prototype = Object.create(makeDancer.prototype);
makeBreakDancer.prototype.constructor = makeBreakDancer;

makeBreakDancer.prototype.step = function () {

  makeDancer.prototype.step.call(this);

};

makeBreakDancer.prototype.movingDancer = function() {
  this.$node.toggle();
};

makeBreakDancer.prototype.setPosition = function(top, left) {
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
  //this.$nodeStatic.css(styleSettings);
  //this.$node.toggle(false);
  // this.$node.toggle();
};



