function GetColorPair() {
  this.majorColor;
  this.minorColor;
}

GetColorPair.prototype.toString = function () {
  return `MajorColor:${this.majorColor},MinorColor:${this.minorColor}`;
};

module.exports = GetColorPair;
