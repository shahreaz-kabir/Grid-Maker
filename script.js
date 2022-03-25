// Declare global variables
let numRows = 0;
let numCols = 0;
let colorSelected; 

// Add a row
function addR() {
    let table = document.getElementById("grid"); // Replace this line with your code.
    // Insert a row at the end of the table
    let row = table.insertRow(0);

    // Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
    let cell1 = row.insertCell(0);
    if(numCols > 0){
        for(i = 0; i < numCols; i++){
            row.insertCell();
        }
    }
    numRows++;
    console.log(numRows);
}

// Add a column
function addC() {
    let table = document.getElementById("grid");
    for (let i = 0; i < numRows; i++) {
        table.rows[i].insertCell();
        //table.insertRow(-1);
    }
    numCols++;
    console.log(numCols);
}

// Remove a row
function removeR() {
    
}

// Remove a column
function removeC() {
  
}

// Set global variable for selected color
function selectColor(){
    colorSelected = document.getElementById("selectedColorId").value;
    console.log(colorSelected);
}

// Fill all uncolored cells
function fillU(){
    alert("Clicked Fill All Uncolored"); // Replace this line with your code.
}

// Fill all cells
function fillAll(){
    alert("Clicked Fill All"); // Replace this line with your code.
}

// Clear all cells
function clearAll(){
    alert("Clicked Clear All"); // Replace this line with your code.
}

//onclick color changer
function clickColor(){

}

/*
function addR() {
    let table = document.getElementById("grid"); // Replace this line with your code.
    // Insert a row at the end of the table
    let newRow = table.insertRow(-1);

    // Insert a cell in the row at index 0
    let newCell = newRow.insertCell(0);
    numRows++;
    console.log(numRows);
}

function addC() {
    let table = document.getElementById("grid");
    for (let i = 0; i < numRows; i++) {
        table.rows[i].insertCell();
        table.insertRow(-1);
    }
    numCols++;
    console.log(numCols);
}

function removeC() {
    let table = document.getElementById("grid");
    for (let i = 0; i < numRows; i++) {
        table.rows[i].deleteCell(0);
        //table.insertRow(-1);
    }
    numCols--;
    console.log(numCols);
}

function removeR() {
    let table = document.getElementById("grid");
    table.deleteRow(0);
    numRows--;
}
*/