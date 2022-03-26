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
    addOnclick();
}

// Add a column
function addC() {
    let table = document.getElementById("grid");
    for (let i = 0; i < numRows; i++) {
        table.rows[i].insertCell();
        //table.insertRow(-1);
    }
    numCols++;
    addOnclick();
}

// Remove a row
function removeR() {
    if(numRows > 0) {
        let table = document.getElementById("grid");
        table.deleteRow(0);
        numRows--; 
    }  
}

// Remove a column
function removeC() {
    if(numCols > 0) {
        let table = document.getElementById("grid");
        for (let i = 0; i < numRows; i++) {
            table.rows[i].deleteCell(0);
            //table.insertRow(-1);
        }
        numCols--;  
    }
  
}

// Set global variable for selected color
function selectColor(){
    colorSelected = document.getElementById("selectedColorId").value;
    if(colorSelected == 'SELECT') {
       colorSelected = 'white'; 
    }
    return colorSelected;
}

// Fill all uncolored cells
function fillU(){
    Array.from(document.getElementsByTagName("td")).filter(e => e.style.backgroundColor == 'white').forEach(e => {
        e.style.backgroundColor = selectColor();
    });
}

// Fill all cells
function fillAll(){
    Array.from(document.getElementsByTagName("td")).forEach(e => {
        e.style.backgroundColor = selectColor();
    });
}

// Clear all cells
function clearAll(){
    Array.from(document.getElementsByTagName("td")).forEach(e => {
        e.style.backgroundColor = 'white';
    }); 
}



/*
function clickColor(){
    Array.from(document.getElementsByTagName("td")).forEach(e => {
        e.onclick = function() {e.style.backgroundColor = selectColor()};
    }); 
}

function addOnclick() {
    Array.from(document.getElementsByTagName("td")).forEach(e => {
        e.onclick = function() {
            clickColor();
        }
    });
}

*/