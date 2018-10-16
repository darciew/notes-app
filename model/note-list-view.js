(function(exports) {
  function NoteListView(notelist) {
    this.notelist = notelist;
  }

NoteListView.prototype.viewNoteList = function () {
  if (this.returnNoteList().all.length === 0) {
    return 'No notes saved'
  } else {
    return this.returnNoteList().all.map(function(note) {
      return `${note.text}`
    }).join(', ')
  };
};

NoteListView.prototype.returnNoteList = function () {
  return this.notelist;
};

  exports.NoteListView = NoteListView;
})(this);
