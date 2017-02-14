var control = (function () {
  var newNoteButton = document.getElementById("show-new-note-button");

  var saveNewNote = document.getElementById("save-new-note");
  var noteText = document.getElementById("note-text");
  var submitNewNoteForm = document.getElementById("submit-new-note-form");

  var notesList = new List();

  var init = function () {
    newNoteButton.addEventListener("click", function() {
      submitNewNoteForm.style.display = "block";
      newNoteButton.style.display = "none";
      event.preventDefault();
    });
    saveNewNote.addEventListener("click", function() {
      var note = new Note(noteText.value);
      notesList.addNotes(note);
      refreshList();
      submitNewNoteForm.style.display = "none";
      newNoteButton.style.display = "block";
      event.preventDefault();
    });
  };

  var refreshList = function () {
    previews.innerHTML = "";
    for (var i = 0; i < notesList.getNotes().length; i++) {
      previews.insertAdjacentHTML("beforeend", ("<li>"+((notesList.getNotes())[i]).getPreview())+"</li>");
    }
  };

  return {
    init: init
  };

}());
control.init();
