function testNewNote() {
  console.log('returns a new note:')
  var note = new Note('My first note');
  assert.isTrue(note.returnNote() === 'My first note')
}

testNewNote();
