(function(exports) {
  function NoteListView(notelist) {
    this.notelist = notelist;
  }

NoteListView.prototype.viewNoteList = function () {
  if (this.notelist.all.length === 0) {
    return 'No notes saved'
  }
};

NoteListView.prototype.returnNoteList = function () {
  return this.notelist;
};

  exports.NoteListView = NoteListView;
})(this);
