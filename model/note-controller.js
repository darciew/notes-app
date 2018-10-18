(function(exports) {
  function NoteController(notelist = new NoteList(), noteView = NoteListView) {
    // this.notelist = notelist;
    notelist.create('Favourite drink: seltzer');
    this.notelistView = new noteView(notelist);
  }

  NoteController.prototype.getHTML = function () {
    var elem = document.getElementById("app")
    return elem.innerHTML = this.notelistView.viewNoteList();
  };


  exports.NoteController = NoteController;
})(this);

var noteController = new NoteController()
noteController.getHTML()
