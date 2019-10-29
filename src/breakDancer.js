var makeBreakDancer = function (top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="dancer breakDancer"><img src="TrumpWindshield.gif" alt="Trump" style="width:500px;height:200px;"></img></span>');
  this.setPosition($(window).height()*0.78, left);
};
makeBreakDancer.prototype = Object.create(makeDancer.prototype);
makeBreakDancer.prototype.constructor = makeBreakDancer;

makeBreakDancer.prototype.step = function () {

  makeDancer.prototype.step.call(this);

};