let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = "";

// Function to delete the last character from the input field
function deleteCharacter() {
    if (string.length > 0) {
        string = string.slice(0, -1);
        updateInput();
    }
}




// Function to clear the entire calculation
function clearCalculation() {
    string = "";
    updateInput();
};

// Function to calculate the result
function calculate() {
    string = eval(string);
    updateInput();
};

// Function to update the input field
function updateInput() {
    input.value = string || "";
};

// Event listeners for the existing buttons
buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == '=') {
            calculate();
        } else if (e.target.innerHTML == 'DEL') {
            deleteCharacter();
        } else if (e.target.innerHTML == 'C') {
            clearCalculation();
        } else {
            string += e.target.innerHTML;
            updateInput();
        }
    });
});

