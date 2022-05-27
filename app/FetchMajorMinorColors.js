let fs = require("fs");

class FetchMajorMinorColors {
  constructor() {
    this.data = fs.readFileSync(
      __dirname + "/assets/color_names.json",
      "utf8"
    );
    this.data = JSON.parse(this.data);
  }

  getMajorColorList() {
    return this.data.MajorColorNames;
  }

  getMinorColorList() {
    return this.data.MinorColorNames;
  }
}

module.exports = FetchMajorMinorColors;
