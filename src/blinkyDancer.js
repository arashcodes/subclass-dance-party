var makeBlinkyDancer = function (top, left, timeBetweenSteps) {
  //var blinkyDancer = makeDancer(top, left, timeBetweenSteps);
  makeDancer.call(this, top, left, timeBetweenSteps);
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  //debugger;
  //this.oldStep = this.step;

  //return blinkyDancer;
  this.$node = $('<span class="blinky dancer"><img src="bobsburger.gif" alt="Homer" style="width:150px;height:200px;"></img></span>');
  this.setPosition(top, left);

};
makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);
makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;

makeBlinkyDancer.prototype.step = function () {
  // call the old version of step at the beginning of any call to this new version of step
  //this.oldStep();
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  // debugger;
  makeDancer.prototype.step.call(this);
  this.$node.toggle();
};