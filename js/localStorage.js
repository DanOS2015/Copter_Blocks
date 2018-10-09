/*This file is used to manage what is stored in local storage.
It stores a user object and then uses functions inside this
file to store new objects and to get object references and
variables from the local storage.
*/


//User object, stores details of user
function user(name,id,password,active,exercise){
  this.username = name;
  this.userID = id;
  this.password = password;
  this.exercise = exercise;
  this.active = active;
}

/*Everytime the application is started, all user must be deactivated on the chance taht the previous
closed down the application without logging out*/
function deactivateUsers(){
  if(localStorage.length === 0 || localStorage.length === 1 || localStorage.number === null){
    return;
  }
  for(var i = 0; i < localStorage.length; i++){
    if(localStorage.getItem(localStorage.key(i)) === localStorage.number || localStorage.key(i) === "debug"){
      ;
    }
    else {
      storedUser = localStorage.getItem(localStorage.key(i));
      storedUser = JSON.parse(storedUser);
      deactiveUser = new user(storedUser.username,storedUser.userID,storedUser.password,0,storedUser.exercise);
      localStorage.setItem(storedUser.userID,JSON.stringify(deactiveUser));
    }
  }
}

//used to check if user exists in local storage or not
function getUser(){
  if(localStorage.number == null){
    localStorage.number = 0;
  }

  var name = document.getElementById('username').value;
  var password = document.getElementById('password').value;
  if(name == '' || password == ''){
    document.getElementById("result").innerHTML= "Please fill out both text boxes!";
  }
  else {
    var exists = searchForUser(name,password);

    if(exists == 1){
      document.getElementById("result").innerHTML= "You entered the wrong password!";
    }
    else if(exists == 2){
      document.getElementById("outsideOfLogin").style.visibility = "visible";
      document.getElementById("login").style.visibility = "hidden";
      document.getElementById("welcomeText").innerHTML = "<h2> Welcome back to Copter Blocks " + name + "</h2>"
      document.getElementById("welcomePopup").style.visibility = "visible";
      activeUser = new user(existingUser.username,existingUser.userID,existingUser.password,1,existingUser.exercise);
      localStorage.setItem(existingUser.userID,JSON.stringify(activeUser));
    }
    else{
      document.getElementById("result").innerHTML = "This user does not exist, would you like to make this user?<br> <button onclick='createUser()'>Yes</button><button onclick='resetLogin()'>No</Button>";
    }
  }
}

//creates a new user
function createUser(){
  var name = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  newUser = new user(name,localStorage.number,password,1,0);
  localStorage.setItem(localStorage.number,JSON.stringify(newUser));
  user = localStorage.getItem(localStorage.key(localStorage.number));
  user = JSON.parse(user);
  localStorage.number = Number(localStorage.number) + 1;
  document.getElementById("outsideOfLogin").style.visibility = "visible";
  document.getElementById("login").style.visibility = "hidden";
  document.getElementById("welcomeText").innerHTML = "<h2> New User Created! <br> Welcome to Copter Blocks " + user.username + "</h2>"
  document.getElementById("welcomePopup").style.visibility = "visible";
}

//resets login text fields
function resetLogin(){
  document.getElementById("result").innerHTML = '';
  document.getElementById("username").value = '';
  document.getElementById("password").value = '';
}

var existingUser;
//searches local storage for a user
function searchForUser(user,password){
  var check = 0;
  if(localStorage.length == 0 || localStorage.length == 1){
    return check;
  }
  for(var i = 0; i < localStorage.length; i++){
    if(localStorage.getItem(localStorage.key(i)) === localStorage.number || localStorage.key(i) === "debug"){
      ;
    }
    else{
      existingUser = localStorage.getItem(localStorage.key(i));
      existingUser = JSON.parse(existingUser);
      if(user == existingUser.username){
        check = 1;
        if(password == existingUser.password){
          check = 2;
          break;
        }
        break;
      }
    }
  }
  return check;
}

var list;
var listLength;
//print all users stored in local storage
function printUsers(){
  if(localStorage.length === 0 || localStorage.length === 1){
    document.getElementById("userList").innerHTML= "No users yet";
  }
  var dropdown = "<select id='previousUsers'>";
  for(var i = 0; i < localStorage.length-1; i++){
    if(localStorage.getItem(localStorage.key(i)) === localStorage.number || localStorage.key(i) === "debug"){
      ;
    }
    else {
      existingUser = localStorage.getItem(localStorage.key(i));
      existingUser = JSON.parse(existingUser);
      dropdown += "<option value = " + existingUser.username + "> " + existingUser.username + "</option>";
    }
  }
  dropdown += "</select><br><button id='dropdownBtn' onclick='selectUser()'>Select User </button>";

  document.getElementById("userList").innerHTML = dropdown;
  document.getElementById("printUserBtn").disabled = 'disabled';
  document.getElementById("result").innerHTML= '';
  list = document.getElementById("previousUsers").options;
  listLength = list.length;
}

//select an existing user from the dropdown menu
function selectUser(){
  for(var i = 0; listLength; i++){
    if(list[i].selected){
      document.getElementById("username").value = list[i].value;
    }
  }
}

//pressing enter will check for a user's details in local storage
function keyPress(){
  if(event.keyCode==13){
      getUser();
  }
}

//check which user is logged in
function getActiveUser(){
  for(var i = 0; i < localStorage.length; i++){
    if(localStorage.getItem(localStorage.key(i)) === localStorage.number || localStorage.key(i) === "debug"){
      ;
    }
    else{
      storedUser = localStorage.getItem(localStorage.key(i));
      storedUser = JSON.parse(storedUser);
      if(storedUser.active === 1){
        return storedUser;
      }
    }
  }
}

//array of simulator exercise files to be loadws into beginner.html
var exerciseFiles = ["../exercises/exercise1.js","../exercises/exercise2.js","../exercises/exercise3.js","../exercises/exercise4.js","../exercises/exercise5.js","../exercises/exercise6.js","../exercises/exercise7.js","../exercises/exercise8.js","../exercises/exercise9.js"];
//Information about each exercise that is to be displayed in beginner.html
var textInfo = ["Land the drone on the helipad using the drone functions",
"Land the drone on the helipad using the drone functions in a loop",
"Land the drone on the helipad using the drone functions in a loop and booleans",
"Land the drone on the helipad using what you've learned in previous exercises",
"Collect the coins using the drone",
"Collect the checkpoints in numerical order"];
//Hints for each simulator exercise
var codeHints = ["Try implementing the code below:\n\ntakeoff();\nmoveForward();\nmoveForward();\nmoveForward();\nland();",
"Try implementing the code below:\n\ntakeoff();\nmoveForward();\nmoveForward();\nmoveRight();\nmoveRight();\nmoveForward();\nmoveForward();\nland();",
"Dragging all those blocks in the previous exercises was pretty annoying and time consming\n\nIf only there was something that would repeat a function a certain number of times?\n\nThis is called a loop, it is represted by the repeat block\n\nIn a loop you specify the number of times you want the loop to repeat and inside the loop the you put the function you want repeated\n\nFor example:\n\nrepeat 5 times {\n  moveForward();\n}\n\nThe code above will make the drone move forward 5 times",
"Loops are handy but we still have the annoying problem of counting the number of spaces to move\n\nUsing booleans can prevent us having to count each space to move\n\nA boolean is a statement that can either be true or face\n\nFor example the statement: 'this application is called Copter Blocks' is true\n\nIn loops, you can make it repeat a function until a boolean becomes true\n\nFor example:\n\nrepeat until right turn available {\n  moveForward();\n}\n\nThe code above will keep moving the drone forward until there is a right turn available",
"Last exercise you learned how to make a loop execute until a boolean was true\n\nYou can also make a loop execute while a condition is true\n\nFor example:\n\nrepeat while right turn available {\n  moveRight();\n}\n\nThe code above will make the drone move right while there is a right turn available",
"In this exercise, try using nested loops\n\nThis is when there's a loop inside a loop\n\nFor example:\n\nrepeat until on helipad {\n  repeat while right turn available {\n   moveRight();\n  }\n}\n\nThe code above will keep moving the drone right until it reaches the helipad and while there is a right turn available",
"Nested loops can be pretty confusing\n\nSometimes it's better just to use an if statement\n\nLike booleans in loops, an if statement will only execute the code inside it if a condition is true\n\nFor example:\n\nrepeat until on helipad {\n  if move forward available {\n   moveForward();\n  }\n  else if left turn available {\n   turnLeft();\n  }\n  else {\n  turnRight();\n  }\n}\n\nThe code above will execute until the drone is on the helipad, if there's a move forward available it will move forward, if not and there's a left turn available the drone will turn left, else it will turn right"];

//load exercise into html doc
function loadExercise(){
  currentUser = getActiveUser();
  index = currentUser.exercise;
  loadSimulator(exerciseFiles[currentUser.exercise]);
}
