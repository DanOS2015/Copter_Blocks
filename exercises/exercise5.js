/*
Javascirpt file for the fifth simulator exercise
*/

//Initilise the logical simulator and all objects in the simulator including walls,drone and helipad
var logicalSim = new LogicalSimulator(73);
logicalSim.initGrid();
logicalSim.sheepCount = 0;
var compass = document.getElementById("drone");
drone.setDronePosition(73);
drone.initDrone();
workspace.clear();
var wallsIndex = [6,7,8,15,17,24,26,33,35,42,44,51,53,60,62,63,64,65,66,67,68,69,71,72,80,81,82,83,84,85,86,87,88,89];
var walls = [];
for(var i = 0; i < wallsIndex.length; i++){
  walls[i] = new Wall(wallsIndex[i]);
}
helipad = new Helipad(16);

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
toolbox2 +=  "<block type='controls_whileUntil'></block>";
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

//prototype function to check if the exercise is complete
LogicalSimulator.prototype.isCompleted = function(){
  return helipad.onHelipad && !drone.inFlight;
}

//prototype function to clean simulator when exercise is done
LogicalSimulator.prototype.clean = function(){
  while(drone.facing != "up"){
    drone.clockwise(90);
  }
  logicalSim.initGrid();
  for(var i = 0; i < walls.length; i++){
    walls[i].clean();
  }
  helipad.clean();
}
