const questions = [
  {
    "question": "53. What is the red arc maximum for Main Bus 2 Voltage?",
    "options": ["0 – 36 Volts", "24.5 – 32 Volts", "0 – 24.4 Volts", "> 32 Volts"],
    "correct": 3
  },
  {
    "question": "54. What is the overall range for Alternator 1 Current?",
    "options": ["0 – 59 Amps", "2 – 100 Amps", "0 – 100 Amps", "0 – 70 Amps"],
    "correct": 0
  },
  {
    "question": "55. What is the normal range for Alternator 1 Current?",
    "options": ["2 – 100 Amps", "1 – 2 Amps", "0 – 100 Amps", "0 – 1 Amps"],
    "correct": 0
  },
  {
    "question": "56. What is the yellow arc maximum caution range for Alternator 1 Current?",
    "options": ["0 – 1 Amps", "1 – 2 Amps", "2 – 100 Amps", "> 100 Amps"],
    "correct": 1
  },
  {
    "question": "57. What is the delay for the Alternator 1 Current caution according to the note?",
    "options": ["40 seconds", "30 seconds", "10 seconds", "20 seconds"],
    "correct": 3
  },
  {
    "question": "58. What is the overall range for Alternator 2 Current?",
    "options": ["2 – 100 Amps", "0 – 100 Amps", "0 – 70 Amps", "0 – 59 Amps"],
    "correct": 2
  },
  {
    "question": "59. What is the normal range for Alternator 2 Current?",
    "options": ["0 – 70 Amps", "2 – 100 Amps", "0 – 1 Amps", "1 – 2 Amps"],
    "correct": 0
  },
  {
    "question": "60. What is the yellow arc maximum caution range for Alternator 2 Current?",
    "options": ["> 70 Amps", "1 – 2 Amps", "0 – 1 Amps", "2 – 100 Amps"],
    "correct": 1
  },
  {
    "question": "61. What is the delay for the Alternator 2 Current caution according to the note?",
    "options": ["10 seconds", "30 seconds", "40 seconds", "20 seconds"],
    "correct": 3
  },
  {
    "question": "62. What is the overall range for Battery 1 Current?",
    "options": ["0 to 59 Amps", "-59 to 59 Amps", "-59 to -5 Amps", "-4 to 59 Amps"],
    "correct": 1
  },
  {
    "question": "63. What is the normal range for Battery 1 Current?",
    "options": ["-59 to 59 Amps", "0 – 59 Amps", "-59 to -5 Amps", "-4 – 59 Amps"],
    "correct": 1
  },
  {
    "question": "64. What is the yellow arc maximum caution range for Battery 1 Current?",
    "options": ["-59 to -5 Amps", "-4 – 59 Amps", "-59 to 59 Amps", "0 – 59 Amps"],
    "correct": 0
  },
  {
    "question": "65. What is the delay for the Battery 1 Current caution according to the note?",
    "options": ["10 seconds", "30 seconds", "20 seconds", "40 seconds"],
    "correct": 2
  },
  {
    "question": "66. What is the overall range for Cylinder Head Temperature?",
    "options": ["75 °F – 450 °F", "200 °F – 600 °F", "100 °F – 500 °F", "50 °F – 400 °F"],
    "correct": 2
  },
  {
    "question": "67. What is the normal range for Cylinder Head Temperature?",
    "options": ["100 – 240 °F", "420 – 460 °F", "100 – 500 °F", "240 – 420 °F"],
    "correct": 0
  },
  {
    "question": "68. What is the maximum caution range for Cylinder Head Temperature?",
    "options": ["100 – 240 °F", "240 – 420 °F", "420 – 460 °F", "> 460 °F"],
    "correct": 2
  },
  {
    "question": "69. What is the upper warning range for Cylinder Head Temperature?",
    "options": ["> 240 °F", "> 460 °F", "> 500 °F", "> 420 °F"],
    "correct": 1
  },
  {
    "question": "70. What is the overall range for Engine Speed?",
    "options": ["0 – 2500 RPM", "0 – 3000 RPM", "0 – 2700 RPM", "500 – 2700 RPM"],
    "correct": 2
  },
  {
    "question": "71. What is the normal range for Engine Speed?",
    "options": ["500 – 2700 RPM", "0 – 3000 RPM", "0 – 500 RPM", "2700 – 3000 RPM"],
    "correct": 0
  },
  {
    "question": "72. What is the upper warning range for Engine Speed?",
    "options": ["> 500 RPM", "> 2500 RPM", "> 2700 RPM", "> 3000 RPM"],
    "correct": 2
  },
  {
    "question": "73. What triggers an engine speed warning according to the note?",
    "options": ["RPM between 2710 and 2730 for more than 10 seconds OR RPM greater than 2730 for more than 5 seconds", "RPM between 2710 and 2730 for more than 5 seconds", "RPM greater than 2730 for more than 10 seconds", "RPM greater than 2700 for more than 10 seconds"],
    "correct": 0
  },
  {
    "question": "74. What is the overall range for Exhaust Gas Temperature?",
    "options": ["800°F – 1400°F", "900°F – 1500°F", "1100°F – 1700°F", "1000°F – 1600°F"],
    "correct": 3
  },
  {
    "question": "75. What is the normal range for Exhaust Gas Temperature?",
    "options": ["1200 – 1600°F", "1000 – 1600°F", "1000 – 1200°F", "800 – 1000°F"],
    "correct": 1
  },
  {
    "question": "76. What is the overall range for Manifold Pressure?",
    "options": ["5 – 40 Inch Hg", "0 – 30 Inch Hg", "15 – 29.5 Inch Hg", "10 – 35 Inch Hg"],
    "correct": 0
  },
  {
    "question": "77. What is the normal range for Manifold Pressure?",
    "options": ["0 – 35 Inch Hg", "29.5 – 35 Inch Hg", "15 – 29.5 Inch Hg", "10 – 15 Inch Hg"],
    "correct": 2
  },
  {
    "question": "78. What is the overall range for Oil Pressure?",
    "options": ["30 – 100 PSI", "0 – 50 PSI", "10 – 60 PSI", "0 – 100 PSI"],
    "correct": 3
  },
  {
    "question": "79. What is the lower warning range for Oil Pressure?",
    "options": ["10 – 30 PSI", "30 – 60 PSI", "0 – 10 PSI", "0 – 30 PSI"],
    "correct": 2
  },
  {
    "question": "80. What is the minimum caution range for Oil Pressure?",
    "options": ["0 – 10 PSI", "10 – 30 PSI", "30 – 60 PSI", "60 – 100 PSI"],
    "correct": 0
  },
  {
    "question": "81. What is the normal range for Oil Pressure?",
    "options": ["30 – 60 PSI", "10 – 30 PSI", "0 – 10 PSI", "60 – 100 PSI"],
    "correct": 0
  },
  {
    "question": "82. What is the maximum caution range for Oil Pressure?",
    "options": ["> 100 PSI", "10 – 30 PSI", "60 – 100 PSI", "30 – 60 PSI"],
    "correct": 0
  },
  {
    "question": "83. What is the upper warning range for Oil Pressure?",
    "options": ["> 60 PSI", "> 100 PSI", "> 30 PSI", "> 10 PSI"],
    "correct": 0
  },
  {
    "question": "84. What triggers an oil pressure caution according to the note?",
    "options": ["Oil pressure between 30 and 60 PSI", "Oil pressure above 100 PSI", "Oil pressure between 10 and 29 PSI and RPM greater than 1000", "Oil pressure below 10 PSI"],
    "correct": 2
  },
  {
    "question": "85. What triggers an oil pressure warning according to the note?",
    "options": ["Oil pressure between 10 and 29 PSI", "Oil pressure between 30 and 60 PSI", "Oil pressure between 60 and 100 PSI", "Oil pressure below 10 PSI OR oil pressure above 100 PSI"],
    "correct": 3
  },
  {
    "question": "86. What is the overall range for Oil Temperature?",
    "options": ["100 °F – 240 °F", "75 °F – 300 °F", "75 °F – 250 °F", "50 °F – 200 °F"],
    "correct": 2
  },
  {
    "question": "87. What is the normal range for Oil Temperature?",
    "options": ["240 – 250 °F", "75 – 250 °F", "75 – 100 °F", "100 – 240 °F"],
    "correct": 3
  },
  {
    "question": "88. What is the upper warning range for Oil Temperature?",
    "options": ["> 100 °F", "> 75 °F", "> 250 °F", "> 240 °F"],
    "correct": 3
  },
  {
    "question": "89. What is the overall range for Percent Power?",
    "options": ["0 – 100%", "50 – 100%", "0 – 75%", "0 – 50%"],
    "correct": 0
  },
  {
    "question": "90. What is the normal range for Percent Power?",
    "options": ["50 – 100%", "0 – 100%", "0 – 50%", "75 – 100%"],
    "correct": 0
  },
  {
    "question": "91. What is the model of the engine?",
    "options": ["IO-550-N", "IO-450-N", "IO-650-N", "IO-750-N"],
    "correct": 0
  },
  {
    "question": "92. What is the power rating of the engine?",
    "options": ["290 HP @ 2500 RPM", "300 HP @ 2600 RPM", "320 HP @ 2800 RPM", "310 HP @ 2700 RPM"],
    "correct": 3
  },
  {
    "question": "93. What is the maximum RPM of the engine?",
    "options": ["2900 RPM", "2600 RPM", "2800 RPM", "2700 RPM"],
    "correct": 3
  },
  {
    "question": "94. What is the maximum oil temperature for the engine?",
    "options": ["240 °F (116 °C)", "220 °F (104 °C)", "250 °F (121 °C)", "230 °F (110 °C)"],
    "correct": 0
  },
  {
    "question": "95. What is the minimum oil temperature for takeoff?",
    "options": ["75 °F (24 °C)", "95 °F (35 °C)", "85 °F (29 °C)", "65 °F (18 °C)"],
    "correct": 0
  },
  {
    "question": "96. What is the minimum oil pressure for the engine?",
    "options": ["5 psi", "10 psi", "15 psi", "20 psi"],
    "correct": 1
  },
  {
    "question": "97. What is the maximum oil pressure for the engine?",
    "options": ["100 psi", "110 psi", "80 psi", "90 psi"],
    "correct": 1
  },
  {
    "question": "98. What is the normal range for fuel flow?",
    "options": ["0 – 20 U.S. Gal/HR", "0 – 25 U.S. Gal/HR", "0 – 30 U.S. Gal/HR", "25 – 30 U.S. Gal/HR"],
    "correct": 1
  },
  {
    "question": "99. What does the gap in the fuel flow band indicate?",
    "options": ["The fuel flow is outside the normal range", "Power settings are above 75%", "Power settings are less than or equal to 75% to aid in leaning operations", "The fuel flow is at maximum capacity"],
    "correct": 2
  },
  {
    "question": "100. What happens to the top of the green arc for fuel flow?",
    "options": ["It only changes during takeoff", "It only changes during landing", "It dynamically changes based on altitude", "It remains constant regardless of altitude"],
    "correct": 2
  },
  {
    "question": "101. What is the red arc (minimum) for the fuel totalizer?",
    "options": ["Less than 5 U.S. Gallons", "Less than 9 U.S. Gallons", "Less than 14 U.S. Gallons", "Less than 0 U.S. Gallons"],
    "correct": 0
  },
  {
    "question": "102. What is the yellow arc (minimum caution range) for the fuel totalizer?",
    "options": ["14 – 46 U.S. Gallons", "9 – 14 U.S. Gallons", "0 – 14 U.S. Gallons", "0 – 9 U.S. Gallons"],
    "correct": 1
  },
  {
    "question": "103. What is the green arc (normal range) for the fuel totalizer?",
    "options": ["Greater than 14 U.S. Gallons", "9 – 14 U.S. Gallons", "0 – 9 U.S. Gallons", "0 – 14 U.S. Gallons"],
    "correct": 0
  },
  {
    "question": "104. What is the red arc (minimum) for the fuel quantity?",
    "options": ["0 U.S. Gallons", "9 U.S. Gallons", "46 U.S. Gallons", "14 U.S. Gallons"],
    "correct": 0
  },
];
