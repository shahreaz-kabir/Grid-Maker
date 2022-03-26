// Declare global variables
let numRows = 0;
let numCols = 0;
let colorSelected; 

//adds on click attribute to td elements
function addOnclick() {
    //stores td elements in array and for each element call clickColor on click
    Array.from(document.getElementsByTagName("td")).forEach(e => {
        e.onclick = function() {
            clickColor();
        }
    });
}

// Add a row
function addR() {
    let table = document.getElementById("grid"); // assign variable equal to grid element
    // Insert a row at the start of the table
    let row = table.insertRow(0);

    // Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
    let cell1 = row.insertCell(0);
    if(numCols > 0){
        for(i = 0; i < numCols; i++){
            row.insertCell(); //if columns are present add cells to row to account for them
        }
    }
    numRows++; //increment number of rows
    addOnclick(); //add onclick attribute
}

// Add a column
function addC() {
    let table = document.getElementById("grid");
    for (let i = 0; i < numRows; i++) {
        table.rows[i].insertCell(); //iterate through rows and add cell to each to make column
        //table.insertRow(-1);
    }
    numCols++; //increment numCols
    addOnclick(); //add on click attribute
}

// Remove a row
function removeR() {
    if(numRows > 0) { //checks if rows present to remove
        let table = document.getElementById("grid");
        table.deleteRow(0); //deletes row at table starting position
        numRows--; //decrements numRows
    }  
}

// Remove a column
function removeC() {
    if(numCols > 0) { //check to see if columns present to remove
        let table = document.getElementById("grid");
        for (let i = 0; i < numRows; i++) {
            table.rows[i].deleteCell(0); //deleted cell from each row being iterated through
        }
        numCols--;  //decrement numCols
    }
  
}

// Set global variable for selected color
function selectColor(){
    colorSelected = document.getElementById("selectedColorId").value; //gets value of selectcolorId
    if(colorSelected == 'SELECT') { //if no color chosen default to white
       colorSelected = 'white'; 
    }
    return colorSelected; //returns value selected
}

// Fill all uncolored cells
function fillU(){
    //stores td elements in an array, and filter elements that are uncolored
    Array.from(document.getElementsByTagName("td")).filter(e => e.style.backgroundColor == 'white').forEach(e => {
        e.style.backgroundColor = selectColor(); //for uncolored elements change background color
    });
}

// Fill all cells
function fillAll(){
    //stores td elements in array and change background color for each element
    Array.from(document.getElementsByTagName("td")).forEach(e => {
        e.style.backgroundColor = selectColor();
    });
}

// Clear all cells
function clearAll(){
    //stores td elements in array and change background color for each element to white
    Array.from(document.getElementsByTagName("td")).forEach(e => {
        e.style.backgroundColor = 'white';
    }); 
}

function clickColor(){
    //stores td elements in array and and applies onclick color change property to all
    Array.from(document.getElementsByTagName("td")).forEach(e => {
        e.onclick = function() {e.style.backgroundColor = selectColor()};
    }); 
}

