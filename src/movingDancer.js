var makeMovingDancer = function (top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="dancer"><img src="homer.gif" alt="Homer" style="width:220px;height:220px;"></img></span>');
  this.setPosition(top, left);
};
makeMovingDancer.prototype = Object.create(makeDancer.prototype);
makeMovingDancer.prototype.constructor = makeMovingDancer;

makeMovingDancer.prototype.step = function () {

  makeDancer.prototype.step.call(this);
  var directions = ['left','top'];
  var plusMinus = ['+','-'];
  var dir = directions[Math.floor(Math.random() * directions.length)];
  var sign = plusMinus[Math.floor(Math.random() * plusMinus.length)];
  var currentLeft = this.$node.position().left;
  var currentTop = this.$node.position().top;
  //console.log(currentLeft, currentTop, $("body").width());
  if (currentLeft >= ($("body").width())*0.88) {
    this.$node.animate({left: '-=50'});
  } else if (currentLeft < 0) {
    this.$node.animate({left: '+=50'});
  }
  if (currentTop >= ($("body").height())*0.7) {
    this.$node.animate({top: '-=50'});
  }
  else if (currentTop < 0) {
    this.$node.animate({top: '+=50'});
  }
  else {
    this.$node.animate({[dir]: '+=100'});
  }
  //this.$node.animate({left: "+=50"});
};