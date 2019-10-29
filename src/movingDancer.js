var makeMovingDancer = function (top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="dancer"><img src="homer.gif" alt="Homer" style="width:220px;height:220px;"></img></span>');
};
makeMovingDancer.prototype = Object.create(makeDancer.prototype);
makeMovingDancer.prototype.constructor = makeMovingDancer;

makeMovingDancer.prototype.step = function () {

  makeDancer.prototype.step.call(this);

  var directions = ['left','top'];
  var dir = directions[Math.floor(Math.random() * directions.length)];

  this.$node.animate({[dir]: '+=50'});
};