/*
Javascript file for the eighth simulator exercise
*/

//Initilise the logical simulator and all objects in the simulator including walls,drone and coins
var logicalSim = new LogicalSimulator(76);
logicalSim.initGrid();
var compass = document.getElementById("drone");
drone.setDronePosition(76);
drone.initDrone();
logicalSim.indexTaken = [];
logicalSim.coinCount = 0;
//arrays to hold objects for this exercise
var coins = [13,37,39,41,43,73,79];
var coinArr = [];
var walls = [0,1,2,3,4,5,6,7,8,9,10,16,17,18,21,22,23,26,27,28,30,31,32,34,35,36,40,44,45,46,48,49,50,52,53,54,62,63,65,66,67,68,69,71,72,80,81,82,83,84,85,86,87,88,89];
var wallArr = [];
var coinMap = {};

//init positions
for (var i = 0; i < coins.length; i++) {
  coinArr[i] = new Coin(coins[i]);
}
for (var i = 0; i < walls.length; i++) {
  wallArr[i] = new Wall(walls[i]);
}

//insert new blocks to beginner.html
var toolbox2 = "<xml>";
toolbox2 +=  "<category name='Drone functions' colour='120'>";
toolbox2 +=  "<block type='take_off'></block>";
toolbox2 +=  "<block type='forward'></block>";
toolbox2 +=  "<block type='backward'></block>";
toolbox2 +=  "<block type='left'></block>";
toolbox2 +=  "<block type='right'></block>";
toolbox2 +=  "<block type='clockwise'></block>";
toolbox2 +=  "<block type='counterClockwise'></block>";
toolbox2 +=  "<block type='land'></block>";
toolbox2 +=  "</category>";
toolbox2 +=  "<sep gap='10'></sep>";
toolbox2 +=  "<category name='Loops' colour='320'>";
toolbox2 +=  "<block type='controls_repeat_ext'></block>";
toolbox2 +=  "<block type='controls_whileUntil'></block>";
toolbox2 +=  "<block type='math_number'></block>";
toolbox2 +=  "</category>";
toolbox2 +=  "<sep gap='10'></sep>";
toolbox2 +=  "<category name='Logic' colour='210'>";
toolbox2 +=  "<block type='controls_if'></block>";
toolbox2 +=  "<block type='helipad'></block>";
toolbox2 +=  "<block type='right_turn_available'></block>";
toolbox2 +=  "<block type='left_turn_available'></block>";
toolbox2 +=  "<block type='move_available'></block>";
toolbox2 +=  "</category>";
toolbox2 +=  "<sep gap='10'></sep>";
toolbox2 +=  "<category name='Exercise functions' colour='50'>";
toolbox2 +=  "<block type='coin_available_forward'></block>";
toolbox2 +=  "<block type='coin_available_right'></block>";
toolbox2 +=  "<block type='coin_available_left'></block>";
toolbox2 +=  "</category>"
toolbox2 +=  "</xml>";
//clear blocks from previous exercise
workspace.clear();
workspace.updateToolbox(toolbox2);

//prototype function to check in variable or object is in an array
Array.prototype.inArray = function inArray(value) {
  for(var i = 0; i < this.length; i++){
    if(this[i] === value)
      return true;
  }
  return false;
}

//prototype function to check if the exercise is complete
LogicalSimulator.prototype.isCompleted = function(){
  return this.coinCount === 7 && !drone.inFlight;
}

//prototype function to see where there's an available index in the indexTaken array
LogicalSimulator.prototype.getAvailableIndex = function () {
  var num = getRandomInt(0,89);
  while(this.indexTaken.inArray(num) || num === 67){
    num = getRandomInt(0,89);
  }

  this.indexTaken.push(num);
  return num;
}

//prototype function to clean simulator when exercise is done
LogicalSimulator.prototype.clean = function(){
  while(drone.facing != "up"){
    drone.clockwise(90);
  }
  logicalSim.initGrid();
  for(var i = 0; i < wallArr.length; i++){
    wallArr[i].clean();
  }
  for(var i = 0; i < coinArr.length; i++){
    coinArr[i].clean();
  }
}

//returns random integer between a max and min
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//function to check if coin ahead of the drone
function coinAhead(){
  return logicalSim.checkNextMove(drone.facing) === "Coin";
}

//function to check if coin is to the right of the drone
function coinRight(){
  return logicalSim.checkRight(drone.facing) === "Coin";
}

//function to check if coin is to the left of the drone
function coinLeft(){
  return logicalSim.checkLeft(drone.facing) === "Coin";
}
