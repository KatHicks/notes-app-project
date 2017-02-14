var Note = function(text) {
  this._text = text;
};

Note.prototype.getText = function () {
  return this._text;
};

Note.prototype.getPreview = function () {
  return (this._text).slice(0,20);
};
