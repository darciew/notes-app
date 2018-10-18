describe('Note Controller', function() {

  function NoteListDouble() {};

  NoteListDouble.prototype = {
    create: function() {}
  };

  var notelistdub = new NoteListDouble();

  function NoteListViewDouble() {};

  NoteListViewDouble.prototype = {
    viewNoteList: function() {
      return '<ul><li><div>Favourite food: pesto</div></li></ul>';
    }
  };

  it('A note controller can be instantiated:' , function() {
    var noteController = new NoteController();
    assert.isTrue(noteController instanceof NoteController);
  });

  it('The innerHTML property of the app element contains HTML', function() {
    var noteController = new NoteController(notelistdub, NoteListViewDouble);
    window.onload = function() {
      noteController.getHTML()
      var elem = document.getElementById("app")
      assert.isTrue(elem.innerHTML === '<ul><li><div>Favourite food: pesto</div></li></ul>');
    }
  });

});
