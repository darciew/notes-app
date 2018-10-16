function testNoteListModelCreation() {
  console.log('takes a note list model upon instantiation:');
  var notelist = new NoteList();
  var notelistview = new NoteListView(notelist);
  assert.isTrue(notelistview.returnNoteList() === notelist);
}
testNoteListModelCreation();

function testReturnsANoteListModel() {
  console.log('returns a string that represents the note list model:');
  var notelist = new NoteList();
  var notelistview = new NoteListView(notelist);
  assert.isTrue(notelistview.viewNoteList() === 'No notes saved');
}
testReturnsANoteListModel();
