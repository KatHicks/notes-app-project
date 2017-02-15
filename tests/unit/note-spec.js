function testNoteHasText() {
  var testText = "this is my first note";
  var note1 = new Note(testText);

  if (note1.getText() !== testText) {
    throw new Error("testNoteHasText failed");
  } else {
    console.info("testNoteHasText passed");
  }
}


function testNoteHasPreview() {
  var testText = "this is my first note";
  var note1 = new Note(testText);

  if (note1.getPreview() !== "this is my first not") {
    throw new Error("testNoteHasPreview failed");
  } else {
    console.info("testNoteHasPreview passed");
  }
}





// run these tests:
testNoteHasText();
testNoteHasPreview();
