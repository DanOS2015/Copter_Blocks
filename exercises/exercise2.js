/*
Javascript file for the second simulator exercise
*/

//Initilise the logical simulator and all objects in the simulator including walls,drone and helipad
var logicalSim = new LogicalSimulator(67);
logicalSim.initGrid();
var compass = document.getElementById("drone");
drone.setDronePosition(67);
drone.initDrone();
var wallsIndex = [23,24,25,32,34,39,40,41,43,48,52,57,59,60,61,66,68,75,76,77];
var walls = [];
for(var i = 0; i < wallsIndex.length; i++){
  walls[i] = new Wall(wallsIndex[i]);
}
helipad = new Helipad(33);

//clear blocks from previous exercise
workspace.clear();

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
