describe('Single Note View', function() {

  function NoteDouble() {}
  NoteDouble.prototype = {
    returnNote: function() {
      return 'Test note'
    }
  }

  var singlenote = new SingleNoteView(NoteDouble);

  it('Takes a note model upon instantiation' , function() {
    var singlenote = new SingleNoteView();
    assert.isTrue(singlenote instanceof SingleNoteView);
  });

  it('Returns a string of HTML that represents the note model', function() {
    var htmlString = '<ul><li><div>Test note</div></li></ul>'
    assert.isTrue(singlenote.returnSingleNote() === htmlString);
  });
});
