/*
Javascript file for the sixth simulator exericse
*/

//Initilise the logical simulator and all objects in the simulator including walls,drone and helipad
var logicalSim = new LogicalSimulator(82);
logicalSim.initGrid();
var compass = document.getElementById("drone");
drone.setDronePosition(82);
drone.initDrone();
var wallsIndex = [0,1,2,3,4,5,6,7,8,9,17,18,20,21,22,23,24,25,26,27,35,36,37,38,39,40,41,42,44,45,53,54,56,57,58,59,60,61,62,63,71,72,73,74,75,76,77,78,80,81,89];
var walls = [];
for(var i = 0; i < wallsIndex.length; i++){
  walls[i] = new Wall(wallsIndex[i]);
}
var helipad = new Helipad(10);

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
