/* Polymorphic Object (simObject)
 * All simulator objects will use the simObjects properties
 * New varaibles and functions are added if needed for each object by using prototypes
*/
var simObject = function(index){
  this.simIndex = index;
  this.image = document.createElement("img");
  this.image.className += "object";
  this.type = "Empty";
  logicalSim.gridArr[this.simIndex] = this.character;
  this.hello = function(){
    return "Hello i am a " + this.type;
  }

  //cleans out the graphical representation of an object so it is not still there after reset
  this.clean = function () {
    this.image.style.visibility = 'hidden';
  }

  //sets the object at the position of this.simIndex
  this.setImgPosition = function(){
    var x = this.simIndex;
    var leftVal = 1;
    var topVal = 1;
    switch (true) {
      case (x == 0):
          ;
        break;
      case (x < 9):
        leftVal += (this.simIndex*11);
        this.image.style.left += leftVal + "%";
        break;
      case (x > 8):
        if((x % 9) == 0) {
          topVal += (Math.floor(this.simIndex/9))*9.9;
        }
        else{
          topVal += ( Math.floor(this.simIndex/9) )*9.9;
          leftVal += (this.simIndex % 9)*11;
        }
        this.image.style.top = topVal + "%"
        this.image.style.left = leftVal + "%";
        break;
      default:
        break;
    }
    simulator.appendChild(this.image); //graphically adds the image into simutalor div
  }
  this.setImgPosition();

}

var Helipad  = function (index) {
  simObject.apply(this,arguments); //takes all the arguments and behaviour of a simObject
  this.simIndex = index;
  this.image.src = "../resources/images/helipad.jpg";
  this.type = "Helipad";
  this.onHelipad = false;
  logicalSim.gridArr[this.simIndex] = this;

}

var Coin  = function (index) {
  simObject.apply(this,arguments);
  this.simIndex = index;
  this.image.src = "../resources/images/coin.svg";
  this.type = "Coin";
  logicalSim.gridArr[this.simIndex] = this;
  this.image.style.visibility = 'visible';
}
/*
 * Coins has extra behaviour other than what is in a sim object
 * We use prototypes to add a collect function that will be called when
 * the drone interacts with the object.
 * The reset will put the coin back in place even if collect and prevents from multiple coins in the same index
*/

Coin.prototype.collect = function(){
  logicalSim.coinCount++;
  this.image.style.visibility = 'hidden';
}
Coin.prototype.reset = function () {
  this.image.style.visibility = 'hidden'; //hidden

};

var Wall  = function (index) {
  simObject.apply(this,arguments);
  this.simIndex = index;
  this.image.src = "../resources/images/wall.png";
  this.type = "Wall";
  logicalSim.gridArr[this.simIndex] = this;
  this.image.style.visibility = 'visible';
}

var CheckPoint  = function (index, checkPointNo) {
  simObject.apply(this,arguments);
  this.checkPointNo = checkPointNo;
  this.simIndex = index;
  this.image.src = "../resources/images/checkpoint" + checkPointNo + ".svg"
  this.type = "CheckPoint";
  logicalSim.gridArr[this.simIndex] = this;
  this.image.style.visibility = 'visible';
}

//Same behaviour as Coin
CheckPoint.prototype.collect = function(){
  logicalSim.checkPointCollected.push(this.checkPointNo);
  this.image.style.visibility = 'hidden';
}

CheckPoint.prototype.reset = function(){
  this.image.style.visibility = 'hidden';
}
