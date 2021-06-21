//Goal: When text is written into textarea, then submit it into page inside div allNotes


//declare variable for form
var form = document.querySelector("#form");
//declare variable for textarea
var noteInput = document.getElementById("note");
//declare variable for allNotes section
var allNotes = document.getElementById("allNotes");

//add eventListener to form submission
form.addEventListener("submit", noteSubmit);

//create function noteSubmit
function noteSubmit() {
//create div element to hold new note submissions
var noteHolder = document.createElement("DIV");
//assign class to noteHolder
noteHolder.setAttribute("class", "notesList");
//create p element to hold note value
var noteText = document.createElement("P");
//set attribute for noteText
noteText.setAttribute("class", "note-text");
//set noteText innerHTML
noteText.innerHTML= noteInput.value;
//append noteText to noteHolder
noteHolder.appendChild(noteText);
//append the above the allNotes div in html
allNotes.appendChild(noteHolder);

//create delete button
var deleteBtn = document.createElement("BUTTON");
//set innerHTML for deleteBtn
deleteBtn.innerHTML = "X";
//append deleteBtn to allNotes
allNotes.appendChild(deleteBtn);
//assign class to deleteBtn
deleteBtn.setAttribute("class", "delete-btn");
//addEventListener to deleteBtn
deleteBtn.addEventListener("click", function() {
  noteHolder.style.display="none";
  deleteBtn.style.display="none";
})

//clear textarea
noteInput.value = "";



event.preventDefault();
}

var detailsBtn = document.createElement("BUTTON");
