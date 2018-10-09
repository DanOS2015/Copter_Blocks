/*
 *The logical Simulator:
 *    controls all of the logic that happens while the drone is moving around it
 *    holds all of the objects inside it (Walls, Coins, etc)
*/
var LogicalSimulator = function(index){
  this.droneLocation = index;
  this.gridArr = [];

  //a 9x10 grid is created full of empty simObjects
  this.initGrid = function () {
    for(var i = 0; i < 90; i++){
      empty = new simObject(i);
      this.gridArr[i] = empty;
    }
  }

  //puts and object into the grid at a specific index
  this.setIndex = function(index, obj){
    this.gridArr[index] = obj;
  }
  this.getIndex = function(index){
    return this.gridArr[index];
  }

  /* checks to see what object is next in a certain direction
   * prevents drone from flying into walls and also
   * helps with finding out if there are coins/checkpoints/helipads available to move to.
   */
  this.checkNextMove = function(direction){
    switch(direction){
      case "up":
        return this.gridArr[this.droneLocation-9].type;
        break;
      case "down":
        return this.gridArr[this.droneLocation+9].type;
        break;
      case "left":
        return this.gridArr[this.droneLocation-1].type;
        break;
      case "right":
        return this.gridArr[this.droneLocation+1].type;
        break;
      default:
    }
  }
  this.checkRight = function(direction){
    switch(direction){
      case "up":
        return this.gridArr[this.droneLocation+1].type;
        break;
      case "down":
        return this.gridArr[this.droneLocation-1].type;
        break;
      case "left":
        return this.gridArr[this.droneLocation-9].type;
        break;
      case "right":
        return this.gridArr[this.droneLocation+9].type;
        break;
      default:
    }
  }
  this.checkLeft = function(direction){
    switch(direction){
      case "up":
        return this.gridArr[this.droneLocation-1].type;
        break;
      case "down":
        return this.gridArr[this.droneLocation+1].type;
        break;
      case "left":
        return this.gridArr[this.droneLocation+9].type;
        break;
      case "right":
        return this.gridArr[this.droneLocation-9].type;
        break;
      default:
    }
  }

  //logically moves the drones location inside the simulator
  this.moveDroneLocation = function(direction){
    this.previousDroneLocation = this.droneLocation;
    switch(direction){
      case "up":
        this.droneLocation -= 9;
        break;
      case "down":
        this.droneLocation += 9;
        break;
      case "left":
        this.droneLocation--;
        break;
      case "right":
        this.droneLocation++;
        break;
      default:
    }
    this.updateGame();
  }

  /* updates the games state
   * Checks to see if the drone is interacting with any objects (if they are at the same index)
   * Will then call specific methods based on the objects found (Eg: coin.collect())
  */
  this.updateGame = function(){
    switch(this.gridArr[this.previousDroneLocation].type){
      case "Helipad":
        this.gridArr[this.previousDroneLocation].onHelipad = false;
        break;
      default:
        this.gridArr[this.previousDroneLocation] = new simObject(this.previousDroneLocation);
    }
    switch(this.gridArr[this.droneLocation].type){
      case "Coin":
        this.gridArr[this.droneLocation].collect();
        this.gridArr[this.droneLocation] = "D";
        break;
      case "CheckPoint":
        this.gridArr[this.droneLocation].collect();
        this.gridArr[this.droneLocation] = "D";
        break;
      case "Helipad":
        this.gridArr[this.droneLocation].onHelipad = true;
        break;
      default:
        this.gridArr[this.droneLocation] = "D";
    }
  }

  //Used for testing, shows a grid of all objects in the grid and prints them to the console
  //used to see if graphics lined up with logic
  this.printSim = function(){
    var row = "   0 1 2 3 4 5 6 7 8";
    console.log(row);
    row = "";
    for(var i = 0; i < 10; i++){
      for(var j = 0; j < 9; j++){
        row +=  this.gridArr[(i*9)+j] + " ";
      }
      console.log(i + "| " + row);
      var row = "";
    }
  }
}
