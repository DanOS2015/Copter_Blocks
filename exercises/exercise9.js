/*
Javascript file for the ninth simulator exercise
*/

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
  if(this.checkPointCollected.length === 0){
    return false;
  }
  for(var i =0; i < this.checkPointCollected.length; i++){
    if( this.checkPointCollected[i] != (i+1)){
      return false;
    }
  }
  return true;
}

//prototype function to clean simulator when exercise is done
LogicalSimulator.prototype.clean = function(){
  while(drone.facing != "up"){
    drone.clockwise(90);
  }
  logicalSim.initGrid();
  for (var i = 1; i < 6; i++) {
    checkPoints[i].clean();
  }
  for (var i = 0; i < walls.length; i++) {
    walls[i].clean();
  }
}

//prototype function to see where there's an available index in the indexTaken array
LogicalSimulator.prototype.getAvailableIndex = function () {
  var num = getRandomInt(0,89);
  while(this.indexTaken.inArray(num) || num === 76){
    num = getRandomInt(0,89);
  }

  this.indexTaken.push(num);
  return num;
};

//return random integer between a min and a max
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//Initilise the logical simulator and all objects in the simulator including walls,drone and checkpoints
var logicalSim = new LogicalSimulator(76);
logicalSim.initGrid();

var compass = document.getElementById("drone");
drone.setDronePosition(76);

drone.initDrone();

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
toolbox2 +=  "</xml>";
//clear blocks from previous exercise
workspace.clear();
workspace.updateToolbox(toolbox2);

logicalSim.indexTaken = [];

//arrays to hold objects
var wallsIndex = [0,1,2,3,4,5,6,7,8,9,17,18,26,27,35,36,44,45,53,54,62,63,71,72,80,81,82,83,84,85,86,87,88,89];
var checkPoints = [];
var walls = [];
logicalSim.checkPointCollected = [];

//init wall and checkpoint positions
for (var i = 0; i < wallsIndex.length; i++) {
  walls[i] = new Wall(wallsIndex[i]);
  logicalSim.indexTaken[i] = wallsIndex[i];
}
for (var i = 1; i < 6; i++) {
  checkPoints[i] = new CheckPoint(logicalSim.getAvailableIndex(), i);
}
