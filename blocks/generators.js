Blockly.Python['iservo'] = function (block) {
  Blockly.Python.definitions_['import_iSERVO'] = 'import iSERVO';

  var dropdown_pin = block.getFieldValue('pin');
	var value_angle = Blockly.Python.valueToCode(block, 'angle', Blockly.Python.ORDER_ATOMIC);

  var code = `iSERVO.setAngle(${dropdown_pin}, ${value_angle})\n`;
  return code;
};

Blockly.Python['iservo_calibrate'] = function (block) {
  Blockly.Python.definitions_['import_iSERVO'] = 'import iSERVO';

  var dropdown_pin = block.getFieldValue('pin');
	var value_min = Blockly.Python.valueToCode(block, 'min', Blockly.Python.ORDER_ATOMIC);
  var value_max = Blockly.Python.valueToCode(block, 'max', Blockly.Python.ORDER_ATOMIC);

  var code = `iSERVO.calibrate(${dropdown_pin}, ${value_min}, ${value_max})\n`;
  return code;
};

