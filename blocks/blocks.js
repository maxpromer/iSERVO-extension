Blockly.defineBlocksWithJsonArray([
  {
    "type": "iservo",
    "message0": "Servo pin %1 set angle %2",
    "args0": [
      {
        "type": "field_dropdown",
        "name": "pin",
        "options": [
          ["0", "0"],
          ["1", "1"],
          ["2", "2"],
          ["3", "3"],
          ["4", "4"],
          ["5", "5"],
          ["6", "6"],
          ["7", "7"],
          ["8", "8"],
          ["9", "9"],
          ["10", "10"],
          ["11", "11"],
          ["12", "12"],
          ["13", "13"],
          ["14", "14"],
          ["15", "15"],
        ]
      },
      {
        "type": "input_value",
        "name": "angle",
        "check": "Number"
      },
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": "#3498DB",
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "iservo_calibrate",
    "message0": "RFID read UID",
    "args0": [
      {
        "type": "field_dropdown",
        "name": "pin",
        "options": [
          ["0", "0"],
          ["1", "1"],
          ["2", "2"],
          ["3", "3"],
          ["4", "4"],
          ["5", "5"],
          ["6", "6"],
          ["7", "7"],
          ["8", "8"],
          ["9", "9"],
          ["10", "10"],
          ["11", "11"],
          ["12", "12"],
          ["13", "13"],
          ["14", "14"],
          ["15", "15"],
        ]
      },
      {
        "type": "input_value",
        "name": "min",
        "check": "Number"
      },
      {
        "type": "input_value",
        "name": "max",
        "check": "Number"
      },
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": "#3498DB",
    "tooltip": "",
    "helpUrl": ""
  }
]);
