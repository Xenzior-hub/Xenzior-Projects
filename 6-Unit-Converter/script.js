let input =  document.getElementById("digital-number")
let convertBtn = document.getElementById("convert-btn")
let lenghtResult = document.getElementById("lenght-result")
let volumeResult = document.getElementById("volume-result")
let massResult =  document.getElementById("mass-result")

const meterToFeet = 3.281
const literToGallon = 0.264
const killogramToPound = 2.204

const feetToMeter = 0.305
const gallonallonToLiter = 3.785
const poundToKillogram = 0.453

function format(num){
    return parseFloat(num.toFixed(3))
}

convertBtn.addEventListener("click", function() {
    let originalValue = input.value

    lenghtResult.textContent = `${originalValue} meters = ${format(originalValue * meterToFeet)} feet | ${originalValue} feet = ${format(originalValue * feetToMeter)} meters`

    volumeResult.textContent = `${originalValue} liters = ${format(originalValue * literToGallon)} gallons | ${originalValue} gallons = ${format(originalValue * gallonallonToLiter)} liters`

    massResult.textContent = `${originalValue} kilos = ${format(originalValue * killogramToPound)} pounds | ${originalValue} pounds = ${format(originalValue * poundToKillogram)} kilos`
})

/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const maxLength = 10

function updateWidth() {
    const valueLength = Math.min(input.value.length || 2, maxLength)
    input.style.width = valueLength + 1 + "ch"
}

input.addEventListener("input", function() {
    this.value = this.value.replace(/[^0-9.]/g, "")
    const parts = this.value.split(".");
    if (parts.length > 1) {
    this.value = parts[0] + "." + parts.slice(1).join("");
    }

  updateWidth();
})

updateWidth()