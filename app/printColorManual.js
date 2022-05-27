const FindColorsFromPairNumber = require("./getColorFromPairNumber.js");
const FetchMajorMinorColors = require("./FetchMajorMinorColors");

class PrintColorManual {
  constructor() {
    this.getColor = new FindColorsFromPairNumber();
    this.getColorList = new FetchMajorMinorColors();
    this.minorColorListSize = this.getColorList.getMinorColorList().length;
    this.majorColorListSize = this.getColorList.getMajorColorList().length;
    this.colorMapping = {};
  }
  constructColorMapping = () => {
    let pairNumber = 0;
    while (pairNumber < this.minorColorListSize * this.majorColorListSize) {
      pairNumber++;
      let pair = this.getColor.getColorFromPairNumber(pairNumber);
      this.colorMapping[pair.toString()] = pairNumber;
    }
  };

  showPairNumberFromColorPair = (pair) => {
    this.constructColorMapping();
    console.log(`${pair.toString()} = ${this.colorMapping[pair.toString()]}`);
    let message = "There is no pair number of this matching";
    console.assert(this.colorMapping[pair.toString()] !== undefined, message);
  };

  printColorManual = () => {
    this.constructColorMapping();
    console.log('----------------Color Manual----------------');
    console.log(this.colorMapping);
  }
}

module.exports = PrintColorManual;
