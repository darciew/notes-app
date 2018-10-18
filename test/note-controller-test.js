function testNoteControllerCanBeInstantiated() {
  console.log('A note controller can be instantiated:');

  var noteController = new NoteController();
  assert.isTrue(noteController instanceof NoteController);
}
testNoteControllerCanBeInstantiated()


function testInnerHTML() {
  console.log('The innerHTML property of the app element contains HTML');

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

  var noteController = new NoteController(notelistdub, NoteListViewDouble);
  window.onload = function() {
    noteController.getHTML()
    var elem = document.getElementById("app")
    assert.isTrue(elem.innerHTML === '<ul><li><div>Favourite food: pesto</div></li></ul>');
  }
};

// testInnerHTML();
