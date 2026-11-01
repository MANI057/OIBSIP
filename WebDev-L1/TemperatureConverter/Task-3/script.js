
function convertTemperature() {
    const input = document.getElementById("temperature").value;
    const unit = document.getElementById("unit").value;
    const error = document.getElementById("error");

    const celsiusOutput = document.getElementById("celsius");
    const fahrenheitOutput = document.getElementById("fahrenheit");
    const kelvinOutput = document.getElementById("kelvin");

    error.textContent = "";

    if (input.trim() === "") {
        error.textContent = "Please enter a temperature.";
        return;
    }

    const temperature = Number(input);

    if (!Number.isFinite(temperature)) {
        error.textContent = "Please enter a valid number.";
        return;
    }

    let celsius;

    if (unit === "Celsius") {
        celsius = temperature;
    } else if (unit === "Fahrenheit") {
        celsius = (temperature - 32) * 5 / 9;
    } else {
        celsius = temperature - 273.15;
    }

    if (celsius < -273.15) {
        error.textContent =
            "Temperature cannot be below absolute zero.";
        return;
    }

    const fahrenheit = (celsius * 9 / 5) + 32;
    const kelvin = celsius + 273.15;

    celsiusOutput.textContent =
        "Celsius: " + celsius.toFixed(2) + " °C";

    fahrenheitOutput.textContent =
        "Fahrenheit: " + fahrenheit.toFixed(2) + " °F";

    kelvinOutput.textContent =
        "Kelvin: " + kelvin.toFixed(2) + " K";
}
