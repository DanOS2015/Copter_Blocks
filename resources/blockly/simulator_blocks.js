/*
 * blocks for Simulator
*/

Blockly.Blocks['forward'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Move Forward");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['backward'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Move Backward");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(50);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['counterClockwise'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Turn Left");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(270);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['clockwise'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Turn Right");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(300);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};


Blockly.Blocks['left'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Move Left");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(190);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['right'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Move Right");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(1);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['take_off'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Takeoff");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['land'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Land");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['helipad'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("On Helipad");
    this.setOutput(true, "Boolean");
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['right_turn_available'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Right turn available");
    this.setOutput(true, "Boolean");
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['left_turn_available'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Left turn available");
    this.setOutput(true, "Boolean");
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['move_available'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Move forward available");
    this.setOutput(true, "Boolean");
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['coin_available_forward'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Coin available forward");
    this.setOutput(true, "Boolean");
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['coin_available_right'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Coin available right");
    this.setOutput(true, "Boolean");
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['coin_available_left'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Coin available left");
    this.setOutput(true, "Boolean");
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};
