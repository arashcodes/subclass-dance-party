var breakDancer = function (top, left, timeBetweenSteps) {
  //var blinkyDancer = makeDancer(top, left, timeBetweenSteps);
  makeDancer.call(this, top, left, timeBetweenSteps);
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  //debugger;
  //this.oldStep = this.step;

  //return blinkyDancer;
};
breakDancer.prototype = Object.create(makeDancer.prototype);
breakDancer.prototype.constructor = breakDancer;

breakDancer.prototype.step = function () {
  // call the old version of step at the beginning of any call to this new version of step
  //this.oldStep();
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  // debugger;
  makeDancer.prototype.step.call(this);
  this.$node.toggle();
};