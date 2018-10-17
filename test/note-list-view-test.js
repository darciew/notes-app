function testNoteListModelCreation() {
  console.log('takes a note list model upon instantiation:');
  var notelist = new NoteList();
  var notelistview = new NoteListView(notelist);
  assert.isTrue(notelistview.returnNoteList() === notelist);
}
testNoteListModelCreation();

function testReturnsEmptyNoteListIfNoNotesSaved() {
  console.log('returns "no notes saved" if notelist is empty:');
  var notelist = new NoteList();
  var notelistview = new NoteListView(notelist);
  assert.isTrue(notelistview.viewNoteList() === '<ul><li><div>No notes saved</div></li></ul>');
}
testReturnsEmptyNoteListIfNoNotesSaved();

// function testReturnsOneNote() {
//   console.log('returns one note:');
//   var note = new Note('First note')
//   var notelist = new NoteList();
//   notelist.create(note);
//   var notelistview = new NoteListView(notelist);
//   assert.isTrue(notelistview.viewNoteList() === '<ul><li><div>First note</div></li></ul>');
// }
// testReturnsOneNote();
//
// function testReturnsSeveralNotes() {
//   console.log('returns several notes:');
//   var note = new Note('First note')
//   var note2 = new Note('Second note')
//   var notelist = new NoteList();
//   notelist.create(note);
//   notelist.create(note2);
//   var notelistview = new NoteListView(notelist);
//   assert.isTrue(notelistview.viewNoteList() ===
//     '<ul><li><div>First note</div></li></ul> <ul><li><div>Second note</div></li></ul>');
// }
// testReturnsSeveralNotes();
