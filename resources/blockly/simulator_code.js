/*
 *  code executed by blocks inside SIM
*/

Blockly.JavaScript['forward'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = "front();\n";
  return code;
};

Blockly.JavaScript['backward'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'back();\n';
  return code;
};

Blockly.JavaScript['left'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = "left();\n";
  return code;
};

Blockly.JavaScript['right'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = "right();\n";
  return code;
};

Blockly.JavaScript['counterClockwise'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'counterClockwise();\n';
  return code;
};

Blockly.JavaScript['clockwise'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'clockwise();\n';
  return code;
};

Blockly.JavaScript['take_off'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'takeoff();\n';
  return code;
};
Blockly.JavaScript['land'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'land();\n';
  return code;
};

Blockly.JavaScript['helipad'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'onHelipad()';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['right_turn_available'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'checkRight()';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['move_available'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'checkForMove()';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['left_turn_available'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'checkLeft()';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['coin_available_forward'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'coinAhead()';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['coin_available_right'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'coinRight()';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['coin_available_left'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'coinLeft()';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};
