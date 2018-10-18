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
    var htmlString = '<ul><li><div><a href="#notes/1">First note</a></div></li></ul>'
    assert.isTrue(notelistview.viewNoteList() === htmlString);
  });

  it('Returns several notes', function() {
    var notelist = new NoteList();
    notelist.create('First note');
    notelist.create('Second note');
    var notelistview = new NoteListView(notelist);
    var htmlString = '<ul><li><div><a href="#notes/1">First note</a></div></li><li><div><a href="#notes/2">Second note</a></div></li></ul>'
    assert.isTrue(notelistview.viewNoteList() === htmlString);
  });

  it('shows the first 20 characters of each note in the list', function() {
    var notelist = new NoteList();
    notelist.create('This is a really really really really long note');
    var notelistview = new NoteListView(notelist);
    var htmlString = '<ul><li><div><a href="#notes/1">This is a really rea</a></div></li></ul>'
    assert.isTrue(notelistview.viewNoteList() === htmlString);
  });

  it('has a link for each note', function() {
    var notelist = new NoteList();
    notelist.create('First note');
    var notelistview = new NoteListView(notelist);
    var htmlString = '<ul><li><div><a href="#notes/1">First note</a></div></li></ul>'
    assert.isTrue(notelistview.viewNoteList() === htmlString);
  });

});
