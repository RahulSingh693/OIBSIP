function convertTemperature() {
  // Get user inputs
  var temperature = parseFloat(document.getElementById("tempr").value);
  var initialUnit = document.getElementById("units").value;
  var convertToUnit = document.getElementById("unit").value;

  // Convert temperature
  var convertedTemperature;
  if (initialUnit === "Celcius") {
    if (convertToUnit === "Fahrenheit") {
      convertedTemperature = (temperature * 9) / 5 + 32;
    } else if (convertToUnit === "Kelvin") {
      convertedTemperature = temperature + 273.15;
    } else {
      convertedTemperature = temperature;
    }
  } else if (initialUnit === "Fahrenheit") {
    if (convertToUnit === "Celcius") {
      convertedTemperature = ((temperature - 32) * 5) / 9;
    } else if (convertToUnit === "Kelvin") {
      convertedTemperature = ((temperature + 459.67) * 5) / 9;
    } else {
      convertedTemperature = temperature;
    }
  } else if (initialUnit === "Kelvin") {
    if (convertToUnit === "Celcius") {
      convertedTemperature = temperature - 273.15;
    } else if (convertToUnit === "Fahrenheit") {
      convertedTemperature = (temperature * 9) / 5 - 459.67;
    } else {
      convertedTemperature = temperature;
    }
  }

  // Display the result
  if (typeof convertedTemperature !== "undefined") {
    // Display the result
    document.getElementById("results").innerHTML =
      convertedTemperature.toFixed(2) + "\u00B0 " + convertToUnit;
  } else {
    // Display an error message
    document.getElementById("results").innerHTML = "Invalid input";
  }
}
