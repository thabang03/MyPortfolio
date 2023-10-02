let printButton = document.getElementById("printable");
printButton.addEventListener("click", printView);

let addButton = document.getElementById("addIt");
addButton.addEventListener("click", addTheThing);


let myList = [];
let myListArea = document.getElementById("wishList");



function addTheThing() {

    let theThing = document.getElementById("iWant");

    addToTheList(theThing);
    resetInput(theThing);

}

function addToTheList(thingToAdd) {
    myList.push(thingToAdd.value);
    let newListItem = document.createElement("li");
    newListItem.innerHTML = myList[myList.length - 1];

    myListArea.appendChild(newListItem);

}

function resetInput(inputToReset) {
    inputToReset.value = "";
}

function printView() {
    let listPage = document.getElementById("listPage");
    let formArea = document.getElementById("formArea");

    formArea.style.display = "none"; //Hide the form by changing the value of the CSS display propertyto "none"
    listPage.className = "print"; // Add a new class attribute
    myListArea.innerHTML = ""; // Clear all the items from the list
    myList.sort(); // sort an array in alpha..

    for (let i = 0; i < myList.length; i++) {  // we use a loop to print out each value in the array
        wishList.innerHTML += "<li>" + myList[i] + "</li>"; // This statement adds a list item to the wishList and displays it in the browser window
    }
    //window.print();
}