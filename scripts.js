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
noteHolder.setAttribute("class", "note-holder");
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


//MODAL BUTTON
//create button element
var modalBtn = document.createElement("BUTTON");
//set innerHTML of modal
modalBtn.innerHTML="View Detail";
//assign class to modal
modalBtn.setAttribute("class", "modalBtn");
//append modal to noteHolder
noteHolder.appendChild(modalBtn);

//CREATE MODAL
var modal = document.createElement("DIV");
var modalText = document.createElement("P");
modalText.innerHTML = noteInput.value;
modal.appendChild(modalText);
modal.setAttribute("class", "modal");
allNotes.appendChild(modal);

//DELETE MODAL
var deleteModal = document.createElement("BUTTON");
//set innerHTML for deleteModal
deleteModal.innerHTML = "CLOSE";
//append deleteBtn to modal
modal.appendChild(deleteModal);
//assign class to deleteBtn
deleteModal.setAttribute("class", "close-modal");
//addEventListener to deleteBtn
deleteModal.addEventListener("click", function() {
  modal.style.display="none";
  deleteModal.style.display="none";
})
//CLOSE MODAL ON WINDOW CLICK
  window.onclick = function(event) {
    if (event.target != modalBtn) {
  modal.style.display="none";
  }
  else {
    modal.style.display="block";
    deleteModal.style.display="block";
  }
  }


//CLICK FOR MODAL BUTTON
modalBtn.onclick = function() {
  modal.style.visibility="visible";
};

//CREATE DELETE BUTTON
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

//prevent page refresh
event.preventDefault();
}
