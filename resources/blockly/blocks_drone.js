/*
 * blocks for drone
*/

Blockly.Blocks['takeoff'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("takeoff");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(0);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['land'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("land");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(0);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['stop'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("stop");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(0);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['turn_clockwise'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Turn Clockwise")
        .appendField(new Blockly.FieldNumber(0, 0, 10), "speed");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['turn_counter_clockwise'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Turn CounterClockwise")
        .appendField(new Blockly.FieldNumber(0, 0, 10), "speed");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['go_up'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Go Up")
        .appendField(new Blockly.FieldNumber(0, 0, 10), "speed");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['go_down'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Go Down")
        .appendField(new Blockly.FieldNumber(0, 0, 10), "speed");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['go_left'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Go Left")
        .appendField(new Blockly.FieldNumber(0, 0, 10), "speed");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['go_right'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Go Right")
        .appendField(new Blockly.FieldNumber(0, 0, 10), "speed");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['go_forward'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Go Forwards")
        .appendField(new Blockly.FieldNumber(0, 0, 10), "speed");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['go_backward'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Go Backwards")
        .appendField(new Blockly.FieldNumber(0, 0, 10), "speed");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};
Blockly.Blocks['wait'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Wait in seconds")
        .appendField(new Blockly.FieldNumber(0, 0, 10), "speed");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};
