/*
Javascirpt file for the first simulator exercise
*/


//Initilise the logical simulator and all objects in the simulator including walls,drone and helipad
var logicalSim = new LogicalSimulator(49);
logicalSim.initGrid();
var compass = document.getElementById("drone");
drone.setDronePosition(49);
drone.initDrone();
workspace.clear();
var wallsIndex = [12,13,14,21,23,30,32,39,41,48,50,57,58,59];
var walls = [];
for(var i = 0; i < wallsIndex.length; i++){
  walls[i] = new Wall(wallsIndex[i]);
}
helipad = new Helipad(22);

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
