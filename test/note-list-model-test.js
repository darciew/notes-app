describe('Note list', function() {

  it('Shows a list of note models' , function() {
    var notelist = new NoteList();
    assert.isTrue(notelist.viewAll() === notelist.all);
  });

  it('Creates and stores a new single note model', function() {
      var notelist = new NoteList();
      notelist.create('My first note');
      assert.isTrue(notelist.all[0].text === ('My first note'));
  });
});



// function testArrayOfNotes() {
//   console.log('stores an array of note models:')
//   var notelist = new NoteList();
//   assert.isTrue(notelist.viewAll() === notelist.all);
// }
// testArrayOfNotes();
//
// function testCreateNote() {
//   console.log('creates and stores a new single note model:')
//   var notelist = new NoteList();
//   notelist.create('My first note');
//   assert.isTrue(notelist.all[0].text === ('My first note'));
// }
// testCreateNote();
//
//
//
//
//
//
//
//
// describe('Note list', function() {
//   var noteList = new NoteList();
//
//   it('can be instantiated with a counter', function() {
//     assert.isTrue(noteList instanceof NoteList)
//     assert.isTrue(noteList.idCounter === 0)
//   })
//
//   it('shows list of notes', function() {
//     assert.isTrue(noteList.showNotes() === noteList.list)
//     assert.isArray(noteList.showNotes())
//   })
//
//   it('create and store a new note with an ID', function() {
//     noteList.create('Hello')
//     assert.isTrue(noteList.list[0].text === 'Hello')
//     assert.isTrue(noteList.idCounter === 1)
//   })
// })
