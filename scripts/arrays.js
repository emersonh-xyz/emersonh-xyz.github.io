let person = [];
let salaries = [];

// function to add a salary
function addSalary() {
    let name = document.getElementById("name").value.trim();
    let salary = parseFloat(document.getElementById("salary").value.trim());

    // validate inputs
    if (name === "" || isNaN(salary)) {
        alert("Please enter a valid name and salary.");
        return;
    }

    // add values to arrays
    person.push(name);
    salaries.push(salary);

    // clear input fields and move focus to name field
    document.getElementById("name").value = "";
    document.getElementById("salary").value = "";
    document.getElementById("name").focus();

    // display salaries in table
    displaySalary();
}

// function to display the results
function displayResults() {
    let total = 0;
    let highest = 0;

    // calculate average salary and highest salary
    for (let i = 0; i < salaries.length; i++) {
        total += salaries[i];
        if (salaries[i] > highest) {
            highest = salaries[i];
        }
    }
    let average = total / salaries.length;

    // display results
    let resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = "<h2>Salary Results</h2><p>Average Salary: $" + average.toFixed(2) + "</p><p>Highest Salary: $" + highest.toFixed(2) + "</p>";
}

// function to display salaries in table
function displaySalary() {
    let table = document.getElementById("results_table");
    table.innerHTML = "<tr><th>Name</th><th>Salary</th></tr>";

    // loop through arrays and display each row
    for (let i = 0; i < person.length; i++) {
        let row = table.insertRow(-1);
        let nameCell = row.insertCell(0);
        let salaryCell = row.insertCell(1);
        nameCell.innerHTML = person[i];
        salaryCell.innerHTML = "$" + salaries[i].toFixed(2);
    }
}

// attach functions to buttons
document.getElementById("add_btn").addEventListener("click", addSalary);
document.getElementById("results_btn").addEventListener("click", displayResults);

// move cursor to name field when page loads
window.onload = function () {
    document.getElementById("name").focus();
};