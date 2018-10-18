(function(exports) {
  function NoteListView(notelist = new NoteList) {
    this.notelist = notelist;
  }

NoteListView.prototype.viewNoteList = function () {
  var notesArray = this.notelist.viewAll();
  var htmlString = "<ul>"
  if (notesArray.length === 0) {
    htmlString += '<li><div>No notes saved</div></li>';
  } else {
    for (var i = 0; i < notesArray.length; i++) {
      var string = notesArray[i].returnNote().slice(0,20);
      htmlString += `<li><div><a href="#notes/${notesArray[i].id}">${string}</a></div></li>`;
    }
  }
  htmlString += "</ul>"
  return htmlString;
}

NoteListView.prototype.returnNoteList = function () {
  return this.notelist;
};

  exports.NoteListView = NoteListView;
})(this);
