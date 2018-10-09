
Blockly.JavaScript['takeoff'] = function(block) {
  var code = 'takeoff()\n';
  return code;
};

Blockly.JavaScript['land'] = function(block) {
  var code = 'land()\n';
  return code;
};

Blockly.JavaScript['stop'] = function(block) {
  var code = 'stop()\n';
  return code;
};

Blockly.JavaScript['turn_clockwise'] = function(block) {
  var number_speed = block.getFieldValue('speed');
  var code = 'clockwise(' + number_speed + ')\n';
  return code;
};

Blockly.JavaScript['turn_counter_clockwise'] = function(block) {
  var number_speed = block.getFieldValue('speed');
  var code = 'counterClockwise(' + number_speed + ')\n';
  return code;
};

Blockly.JavaScript['go_up'] = function(block) {
  var number_speed = block.getFieldValue('speed');
  var code = 'up(' + number_speed + ')\n';
  return code;
};

Blockly.JavaScript['go_down'] = function(block) {
  var number_speed = block.getFieldValue('speed');
  var code = 'down(' + number_speed + ')\n';
  return code;
};

Blockly.JavaScript['go_left'] = function(block) {
  var number_speed = block.getFieldValue('speed');
  var code = 'left(' + number_speed + ')\n';
  return code;
};

Blockly.JavaScript['go_right'] = function(block) {
  var number_speed = block.getFieldValue('speed');
  var code = 'right(' + number_speed + ')\n';
  return code;
};

Blockly.JavaScript['go_forward'] = function(block) {
  var number_speed = block.getFieldValue('speed');
  var code = 'front(' + number_speed + ')\n';
  return code;
};

Blockly.JavaScript['go_backward'] = function(block) {
  var number_speed = block.getFieldValue('speed');
  var code = 'back(' + number_speed + ')\n';
  return code;
};

Blockly.JavaScript['wait'] = function(block) {
  var number_speed = block.getFieldValue('speed');
  number_speed = number_speed * 1000;
  var code = 'stopAfter(' + number_speed + ')\n';
  return code;
};


/*
 *  functions that the drone blocks call
*/

function takeoff(){
  client.takeoff();
  console.log("Taking off");

}

function land(){
  client
  .after(1, function() {
    this.land();
    console.log("Landing");
  })
}

function stopAfter(delay){

  client
  .after(delay, function() {
    this.stop();
    console.log("Stopping after");
  })
  .after(2000,function(){
    console.log("time to stop");
  })
}
function stop(){
  client
  .after(5000, function() {
    this.stop();
    console.log("Stopping");
  })
}

function clockwise(number_speed){
  client
  .after(1, function() {
    this.clockwise(number_speed/10);
    console.log("turning clockwise at " + number_speed + " MPH");
  })

}
function counterClockwise(number_speed){
  client
  .after(1, function() {
    this.counterClockwise(number_speed/10);
    console.log("turning counterClockwise at " + number_speed + " MPH");
  })

}

function up(number_speed) {
  client
  .after(1, function() {
    this.up(number_speed/10);
    console.log("Going up at " + number_speed + " MPH");
  })

}

function down(number_speed) {
  client
  .after(1, function() {
    this.down(number_speed/10);
    console.log("Going down at " + number_speed + " MPH");
  })

}

function left(number_speed) {
  client
  .after(1, function() {
    this.left(number_speed/10);
    console.log("Going left at " + number_speed + " MPH");
  })

}

function right(number_speed) {
  client
  .after(1, function() {
    this.right(number_speed/10);
    console.log("Going right at " + number_speed + " MPH");
  })

}

function front(number_speed) {
  client
  .after(1, function() {
    this.front(number_speed/10);
    console.log("Going forward at " + number_speed + " MPH");
  })

}

function back(number_speed) {
  client
  .after(1, function() {
    this.back(number_speed/10);
    console.log("Going backward at " + number_speed + " MPH");
  })

}
