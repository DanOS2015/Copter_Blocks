/*
 * This is the drone object that will move around the simulator
 */

var drone = {
  inFlight: false,
  hovering: false,
  facing: "up",
  degree: 0,
  axisX: 0,
  axisY: 0,
  maxAxisX: 0,
  maxAxisY: 0,
  moveDistanceX: 1,
  moveDistanceY: 1,
  droneLocation: 67,
  initLeftVal: 0,
  initTopVal: 0,

  /*
   *sets the move distance for the drone in an X and Y axis in pixels
   *the drone is moved using move.js and uses pixels to move <divs>
   *this is why we have to get the height and width of simulator
   */
  initDrone: function () {
    this.setXY();
    this.maxAxisX = simulator.clientWidth;
    this.maxAxisY = simulator.clientHeight;
    this.moveDistanceX = Math.round(this.maxAxisX/9);
    this.moveDistanceY = Math.round(this.maxAxisY/10);
  },

  //sets the drones position graphically
  setDronePosition: function(index){
    this.droneLocation = index;
    logicalSim.gridArr[this.droneLocation] = "D";
    var x = this.droneLocation;
    var leftVal = 2;
    var topVal = 2;
    switch (true) {
      case (x < 9):
        leftVal += (this.droneLocation*11);
        leftVal += .5;
        compass.style.left = leftVal + "%";
        compass.style.top = topVal + "%";
        break;
      case (x > 8):
        if((x % 9) == 0) {
          topVal += (Math.floor(this.droneLocation/9))*9.9;
        }
        else{
          topVal += ( Math.floor(this.droneLocation/9) )*9.9;
          leftVal += (this.droneLocation % 9)*11;
        }
        leftVal += .5;
        topVal += .6;
        compass.style.top = topVal + "%"
        compass.style.left = leftVal + "%";
        break;
      default:
        break;
    }
    this.initLeftVal = leftVal;
    this.initTopVal = topVal;
  },

  //sets drone back to initail state  if a reset is called
  reset: function(){
      drone.inFlight = true;
      compass.style.left = this.initLeftVal + "%";
      compass.style.top = this.initTopVal + "%";
      while(drone.facing != "up"){
        drone.clockwise(90);
      }
      if(logicalSim.gridArr[logicalSim.droneLocation].type === undefined) {
        logicalSim.gridArr[logicalSim.droneLocation] = "E";
      }
      logicalSim.droneLocation = drone.droneLocation;
      logicalSim.gridArr[logicalSim.droneLocation] = "D";
      drone.land();
  },

  //Sets the X Y axis in percentage using a pixel to percentage translator (SEE BELOW)

  setXY: function(){
    this.axisX = pixelToPercentage(compass.style.left,this.maxAxisX);
    this.axisY = pixelToPercentage(compass.style.top,this.maxAxisY);
  },

  /*
   * ALL drone functions use move.js for  graphical movement
   * movement will depend on the current direction facing
   * use graphicUp,down,left,right to solve this (SEE BELOW)
   */
  takeoff: function(){
    this.setXY();
    this.inFlight = true;
     move("#drone")
     .rotate(this.degree)
     .scale(1.3)
     .end();
  },
  land: function(){
    this.inFlight = false;
     move("#drone")
     .rotate(this.degree)
     .scale(1)
     .end();
  },
  stop: function(){
    this.hovering = true;
  },
  front: function(speed){
    if(this.inFlight == true){
      this.hovering = false;
      switch(this.facing){
        case "up":
          this.graphicUp();
          break;
        case "right":
          this.graphicRight();
          break;
        case "down":
          this.graphicDown();
          break;
        case "left":
          this.graphicLeft();
          break;
        default:
      }
    }
  },
  back: function(speed){
    if(this.inFlight == true){
      this.hovering = false;
      switch(this.facing){
        case "up":
          this.graphicDown();
          break;
        case "right":
          this.graphicLeft();
          break;
        case "down":
          this.graphicUp();
          break;
        case "left":
          this.graphicRight();
          break;
        default:
      }
    }
  },
  left: function(speed){
    if(this.inFlight == true){
      this.hovering = false;
      switch(this.facing){
        case "up":
          this.graphicLeft();
          break;
        case "right":
          this.graphicUp();
          break;
        case "down":
          this.graphicRight();
          break;
        case "left":
          this.graphicDown();
          break;
        default:
      }
    }
  },
  right: function(speed){
    if(this.inFlight == true){
      this.hovering = false;
      switch(this.facing){
        case "up":
          this.graphicRight();
          break;
        case "right":
          this.graphicDown();
          break;
        case "down":
          this.graphicLeft();
          break;
        case "left":
          this.graphicUp();
          break;
        default:
      }
    }
  },
  clockwise: function(deg){
    if(this.inFlight == true){
      this.hovering = false;
      this.degree += deg;
      move('#drone')
        .scale(1.3)
        .rotate(this.degree)
        .end();
    this.setFacing(this.degree)
    }
  },
  counterClockwise: function(deg){
    if(this.inFlight == true){
      this.hovering = false;
      this.degree -= deg;
      move('#drone')
        .scale(1.3)
        .rotate(this.degree)
        .end();
      this.setFacing(this.degree);
    }
  },

  //sets the current direction facing by seeing what degree of rotation the drone is at.
  setFacing: function(degree){
    switch(degree%360){
      case 0:
        this.facing = "up";
        break;
      case -0:
        this.facing = "up";
        break;
      case 90:
        this.facing = "right";
        break;
      case -270:
        this.facing = "right";
        break;
      case 180:
        this.facing = "down";
        break;
      case -180:
        this.facing = "down";
        break;
      case 270:
        this.facing = "left"
        break;
      case -90:
        this.facing = "left"
      default:
    }
  },

  //prevents the drone from flying out of the the simulator boundaries
  outOfBounds: function(axis) {
    switch(axis){
      case "up":
        if( (this.axisY - pixelToPercentage(this.moveDistanceY,this.maxAxisY)) < 0){
          return true;
        }
        break;
      case "down":
        if((this.axisY + pixelToPercentage(this.moveDistanceY,this.maxAxisY)) > 93){
          return true;
        }
        break;
      case "left":
        if( (this.axisX - pixelToPercentage(this.moveDistanceX,this.maxAxisX)) < 0){
          return true;
        }
        break;
      case "right":
        if( (this.axisX + pixelToPercentage(this.moveDistanceX,this.maxAxisX)) > 95){
          return true;
        }
        break;
      default:
    }
    return false;
  },

  //will move the drone graphically up,down,left,right regardless of the direction its facing.
  graphicUp: function() {
    if( (logicalSim.checkNextMove("up") != "Wall" && !this.outOfBounds("up")) || (parseInt(compass.style.top) === Math.floor(this.initTopVal) && logicalSim.checkNextMove("up") != "Wall")){
      move("#drone")
        .rotate(this.degree)
        .scale(1.3)
        .sub("top", this.moveDistanceY)
        .end();
      this.setXY();
      logicalSim.moveDroneLocation("up");
    }
  },
  graphicDown: function() {
    if(logicalSim.checkNextMove("down") != "Wall" && !this.outOfBounds("down")){
      move("#drone")
        .rotate(this.degree)
        .scale(1.3)
        .add("top", this.moveDistanceY)
        .end();
      this.setXY();
      logicalSim.moveDroneLocation("down");
    }
  },
  graphicLeft: function() {
    if( ( !this.outOfBounds("left") || parseInt(compass.style.left) == Math.floor(this.initLeftVal) ) && logicalSim.checkNextMove("left") != "Wall"){
      move("#drone")
        .rotate(this.degree)
        .scale(1.3)
        .sub("left", this.moveDistanceX)
        .end();
      this.setXY();
      logicalSim.moveDroneLocation("left");
    }
  },
  graphicRight: function() {
    if(logicalSim.checkNextMove("right") != "Wall" && !this.outOfBounds("right")){
      move("#drone")
        .rotate(this.degree)
        .scale(1.3)
        .add("left", this.moveDistanceX)
        .end();
      this.setXY();
      logicalSim.moveDroneLocation("right");
    }
  },
  getDroneLocation: function functionName() {
    return this.droneLocation;
  }
};

//functions for the javascript acorn interpreter
function takeoff() {
  drone.takeoff();
}
function land() {
  drone.land();
}
function front() {
  drone.front(.5);
}
function back() {
  drone.back(.5);
}
function left() {
  drone.left(.5);
}
function right() {
  drone.right(.5);
}
function clockwise() {
  drone.clockwise(90);
}
function counterClockwise() {
  drone.counterClockwise(90);
}

//used to translate the location in pixels to percentage
function pixelToPercentage(current,max){
  return Math.round((parseInt(current)/max)*100);
}
