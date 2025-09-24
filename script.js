/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

// ------ Constants ------
const METER_TO_FEET = 3.281;
const LITER_TO_GALLON = 0.264;
const KILOGRAM_TO_POUND = 2.204;

// ------ Cache DOM elements ------
const inputEl = document.getElementById("input-el");
const convertBtn = document.getElementById("convert-btn");
const lengthEl = document.getElementById("length-el");
const volumeEl = document.getElementById("volume-el");
const massEl = document.getElementById("mass-el");

// ------ Event Listeners ------
convertBtn.addEventListener("click", () => {
    let inputValue = Number(inputEl.value); // convert string input value

    if (isNaN(inputValue)) {
        return; // stop execution
    }

    // Length conversion
    let metersToFeet = (inputValue * METER_TO_FEET).toFixed(3);
    let feetToMeters = (inputValue / METER_TO_FEET).toFixed(3);
    lengthEl.textContent = `${inputValue} meters = ${metersToFeet} feet | ${inputValue} feet = ${feetToMeters} meters`;

    // Volume conversion
    let litersToGallons = (inputValue * LITER_TO_GALLON).toFixed(3);
    let gallonsToLiters = (inputValue / LITER_TO_GALLON).toFixed(3);
    volumeEl.textContent = `${inputValue} liters = ${litersToGallons} gallons | ${inputValue} gallons = ${gallonsToLiters} liters`;

    // Mass conversion
    let kilogramsToPounds = (inputValue * KILOGRAM_TO_POUND).toFixed(3);
    let poundsToKilograms = (inputValue / KILOGRAM_TO_POUND).toFixed(3);
    massEl.textContent = `${inputValue} kilograms = ${kilogramsToPounds} pounds | ${inputValue} pounds = ${poundsToKilograms} kilograms`;
})


