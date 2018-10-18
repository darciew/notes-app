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
