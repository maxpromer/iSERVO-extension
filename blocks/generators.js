Blockly.Python['iservo'] = function (block) {
  Blockly.Python.definitions_['import_iSERVO'] = 'import iSERVO';

  var dropdown_pin = block.getFieldValue('pin');
	var value_angle = Blockly.JavaScript.valueToCode(block, 'angle', Blockly.JavaScript.ORDER_ATOMIC);

  var code = `iSERVO.setAngle(${dropdown_pin}, ${value_angle})\n`;
  return code;
};

Blockly.Python['iservo_calibrate'] = function (block) {
  Blockly.Python.definitions_['import_iSERVO'] = 'import iSERVO';

  var dropdown_pin = block.getFieldValue('pin');
	var value_min = Blockly.JavaScript.valueToCode(block, 'min', Blockly.JavaScript.ORDER_ATOMIC);
  var value_max = Blockly.JavaScript.valueToCode(block, 'max', Blockly.JavaScript.ORDER_ATOMIC);

  var code = `iSERVO.calibrate(${dropdown_pin}, ${value_min}, ${value_max})\n`;
  return code;
};

