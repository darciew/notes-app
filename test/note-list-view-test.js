describe('Notelist View', function() {

  it('Takes a note list model upon instantiation:' , function() {
    var notelist = new NoteList();
    var notelistview = new NoteListView(notelist);
    assert.isTrue(notelistview.returnNoteList() === notelist);
  });

  it('Returns "no notes saved" if notelist is empty:', function() {
    var notelist = new NoteList();
      var notelistview = new NoteListView(notelist);
      var htmlString = '<ul><li><div>No notes saved</div></li></ul>'
      assert.isTrue(notelistview.viewNoteList() === htmlString);
  });

  it('Returns one note:', function() {
    var notelist = new NoteList();
    notelist.create('First note');
    var notelistview = new NoteListView(notelist);
    var htmlString = '<ul><li><div>First note</div></li></ul>'
    assert.isTrue(notelistview.viewNoteList() === htmlString);
  });

  it('Returns several notes', function() {
    var notelist = new NoteList();
    notelist.create('First note');
    notelist.create('Second note');
    var notelistview = new NoteListView(notelist);
    var htmlString = '<ul><li><div>First note</div></li><li><div>Second note</div></li></ul>'
    assert.isTrue(notelistview.viewNoteList() === htmlString);
  });

});
