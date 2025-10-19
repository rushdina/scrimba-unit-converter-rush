/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

// ------ Constants ------

const CONVERSIONS = [
  {
    name: "Length",
    unit1: "meters",
    unit2: "feet",
    factor: 3.281,
    elId: "length-el",
  },
  {
    name: "Volume",
    unit1: "liters",
    unit2: "gallons",
    factor: 0.264,
    elId: "volume-el",
  },
  {
    name: "Mass",
    unit1: "kilograms",
    unit2: "pounds",
    factor: 2.204,
    elId: "mass-el",
  },
];

// ------ Cache DOM elements ------

const inputEl = document.getElementById("input-el");
const convertBtn = document.getElementById("convert-btn");

// ------ Functions ------

function convertUnits(value, factor) {
  return {
    forward: (value * factor).toFixed(3),
    backward: (value / factor).toFixed(3),
  };
}

function updateConversionDisplay(value) {
  CONVERSIONS.forEach((conv) => {
    const result = convertUnits(value, conv.factor);
    document.getElementById(
      conv.elId
    ).textContent = `${value} ${conv.unit1} = ${result.forward} ${conv.unit2} | ${value} ${conv.unit2} = ${result.backward} ${conv.unit1}`;
  });
}

// ------ Event Listeners ------

convertBtn.addEventListener("click", () => {
  const inputFloat = parseFloat(inputEl.value);

  if (isNaN(inputFloat)) return;

  updateConversionDisplay(inputFloat);
});
