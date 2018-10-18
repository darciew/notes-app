function testArrayOfNotes() {
  console.log('stores an array of note models:')
  var notelist = new NoteList();
  assert.isTrue(notelist.viewAll() === notelist.all);
}
testArrayOfNotes();

function testCreateNote() {
  console.log('creates and stores a new single note model:')
  var notelist = new NoteList();
  notelist.create('My first note');
  assert.isTrue(notelist.all[0].text === ('My first note'));
}
testCreateNote();
