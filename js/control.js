var control = (function () {
  var newNoteButton = document.getElementById("show-new-note-button");
  var saveNewNote = document.getElementById("save-new-note");
  var submitNewNoteForm = document.getElementById("submit-new-note-form");


  var init = function () {
    newNoteButton.addEventListener("click", function() {
      submitNewNoteForm.style.display = "block";
      newNoteButton.style.display = "none";
      event.preventDefault();
    });
    saveNewNote.addEventListener("click", function() {
      submitNewNoteForm.style.display = "none";
      newNoteButton.style.display = "block";
      event.preventDefault();
    });
  };

  return {
    init: init
  };

}());
control.init();
