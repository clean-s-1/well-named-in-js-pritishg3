const FetchMajorMinorColors = require("./FetchMajorMinorColors");

class ProcessPairNumberFromColor {
  constructor() {
    this.colorList = new FetchMajorMinorColors();
    this.MajorColorNames = this.colorList.getMajorColorList();
    this.MinorColorNames = this.colorList.getMinorColorList();
    this.minorColorIndex = -1;
    this.majorColorIndex = -1;
  }

  updateMinorMajorColorIndex(pair, isMajorColor) {
    for (let i = 0; i < this.MinorColorNames.length; i++) {
      if(!isMajorColor){
        if (this.MinorColorNames[i] == pair.minorColor) {
          this.minorColorIndex = i;
          break;
        }
      }
      else {
        if (this.MajorColorNames[i] == pair.majorColor) {
          this.majorColorIndex = i;
          break;
        }
      }
    }
  }

  getPairNumberFromColor(pair) {
    this.updateMinorMajorColorIndex(pair, true);
    this.updateMinorMajorColorIndex(pair, false);
    if (this.majorColorIndex === -1 || this.minorColorIndex === -1) {
      throw `Unknown Colors:${this.pair.toString()}`;
    }
    return (
      this.majorColorIndex * this.MinorColorNames.length +
      (this.minorColorIndex + 1)
    );
  }
}

module.exports = ProcessPairNumberFromColor;
