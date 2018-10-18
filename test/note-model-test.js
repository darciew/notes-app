describe('Note Model', function() {

  it('Returns a new note' , function() {
    var note = new Note('My first note', 1);
    assert.isTrue(note.returnNote() === 'My first note')
  });

});
