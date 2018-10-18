(function(exports) {
  function NoteList() {
    this.all = [];
    this.idCount = 1;
  };

NoteList.prototype.viewAll = function () {
  return this.all;
};

NoteList.prototype.create = function (text) {
  var note = new Note(text, this.idCount++);
  return this.all.push(note);
};

exports.NoteList = NoteList;
})(this);
