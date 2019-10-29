var makeMJDancer = function (top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="dancer"><img src="MJDancer.gif" alt="Michael Jackson" style="width:300px;height:300px;"></img></span>');
  this.setPosition($(window).height()*0.72, left);
};
makeMJDancer.prototype = Object.create(makeDancer.prototype);
makeMJDancer.prototype.constructor = makeMJDancer;

makeMJDancer.prototype.step = function () {

  makeDancer.prototype.step.call(this);

};