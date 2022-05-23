const GetColorPair = require("./colorPair");
const FetchMajorMinorColors = require("./FetchMajorMinorColors");

class FindColorsFromPairNumber {
  constructor() {
    this.colorList = new FetchMajorMinorColors();
    this.MajorColorNames = this.colorList.getMajorColorList();
    this.MinorColorNames = this.colorList.getMinorColorList();
    this.minorColorListSize = this.MajorColorNames.length;
    this.majorColorListSize = this.MinorColorNames.length;
  }

  getMajorColorIndex(zeroBasedPairNumber) {
    return parseInt(zeroBasedPairNumber / this.minorColorListSize);
  }

  getMinorColorIndex(zeroBasedPairNumber) {
    return parseInt(zeroBasedPairNumber % this.minorColorListSize);
  }

  getColorFromPairNumber(pairNumber) {
    if (
      pairNumber < 1 ||
      pairNumber > this.minorColorListSize * this.majorColorListSize
    ) {
      throw `Argument PairNumber:${pairNumber} is outside the allowed range`;
    }
    let zeroBasedPairNumber = pairNumber - 1;
    let majorColorIndex = this.getMajorColorIndex(zeroBasedPairNumber);
    let minorColorIndex = this.getMinorColorIndex(zeroBasedPairNumber);
    let pair = new GetColorPair();
    pair.majorColor = this.MajorColorNames[majorColorIndex];
    pair.minorColor = this.MinorColorNames[minorColorIndex];
    return pair;
  }

  printColorsManual() {
    let pairNumber = 0;
    while (pairNumber < this.minorColorListSize * this.majorColorListSize) {
      pairNumber++;
      let pair = this.getColorFromPairNumber(pairNumber);
      console.log(`${pairNumber}: ${pair.toString()}`);
    }
  }
}

module.exports = FindColorsFromPairNumber;
