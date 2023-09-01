// Get references to HTML elements
const heightInput = document.getElementById("height");
const weightInput = document.getElementById("weight");
const bmiForm = document.getElementById("bmi-form");
const bmiValue = document.getElementById("bmi-value");
const bmiCategory = document.getElementById("bmi-category");


// Event listener for the form submission
bmiForm.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent form submission

    // Get user input values
    const height = parseFloat(heightInput.value);
    const weight = parseFloat(weightInput.value);

    if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
        alert("Please enter valid height and weight.");
        return;
    }

    // Calculate BMI
    const bmi = calculateBMI(height, weight);

    // Determine BMI category
    const category = getBMICategory(bmi);

    // Display the result
    bmiValue.textContent = bmi.toFixed(2); // Limit to 2 decimal places
    bmiCategory.textContent = category;
});

// Function to calculate BMI
function calculateBMI(height, weight) {
    // BMI formula: weight (kg) / (height (m) * height (m))
    const heightInMeters = height / 100; // Convert height from cm to meters
    return weight / (heightInMeters * heightInMeters);
}

// Function to determine BMI category
function getBMICategory(bmi) {
    if (bmi < 18.5) {
        return "Underweight";
    } else if (bmi < 24.9) {
        return "Normal Weight";
    } else if (bmi < 29.9) {
        return "Overweight";
    } else {
        return "Obese";
    }
}


