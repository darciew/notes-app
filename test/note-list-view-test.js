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
  var htmlString = '<ul><li><div>No notes saved</div></li></ul>'
  assert.isTrue(notelistview.viewNoteList() === htmlString);
}
testReturnsEmptyNoteListIfNoNotesSaved();

function testReturnsOneNote() {
  console.log('returns one note:');
  var notelist = new NoteList();
  notelist.create('First note');
  var notelistview = new NoteListView(notelist);
  var htmlString = '<ul><li><div>First note</div></li></ul>'
  assert.isTrue(notelistview.viewNoteList() === htmlString);
}
testReturnsOneNote();

function testReturnsSeveralNotes() {
  console.log('returns several notes:');
  var notelist = new NoteList();
  notelist.create('First note');
  notelist.create('Second note');
  var notelistview = new NoteListView(notelist);
  var htmlString = '<ul><li><div>First note</div></li><li><div>Second note</div></li></ul>'
  assert.isTrue(notelistview.viewNoteList() === htmlString);
}
testReturnsSeveralNotes();
