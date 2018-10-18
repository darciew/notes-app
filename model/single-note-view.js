(function(exports) {
  function SingleNoteView(note = Note) {
    this.onenote = new note('Favourite drink: seltzer');
  };

  SingleNoteView.prototype.returnSingleNote = function () {
    var text = this.onenote.returnNote();
    var htmlString = `<ul><li><div>${text}</div></li></ul>`;
    return htmlString;
  };

  exports.SingleNoteView = SingleNoteView;
})(this);
