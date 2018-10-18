(function(exports) {
  function Note(text, id) {
    this.text = text;
    this.id = id;
    Note.idCount++;
  };

Note.prototype.returnNote = function () {
  return this.text;
};


exports.Note = Note;
})(this);
