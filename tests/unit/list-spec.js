function testListHasNotes() {
  var list1 = new List();

  if (Array.isArray(list1.getNotes())) {
    if (list1.getNotes().length == 0) {
      console.info("testListHasNotes passed");
    } else {
      throw new Error("testListHasEmptyNotes failed");
    };
  } else {
    throw new Error("testListHasNotes failed");
  }
};



//run these tests:
testListHasNotes();
