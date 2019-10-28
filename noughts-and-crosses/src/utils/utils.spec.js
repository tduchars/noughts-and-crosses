const { expect } = require("chai");
const { winDiagFunc } = require("./utils");

describe("winDiagFunc", () => {
  it("empty grid no winner", () => {
    const grid = [
      { display: "", disabled: false },
      { display: "", disabled: false },
      { display: "", disabled: false },
      { display: "", disabled: false },
      { display: "", disabled: false },
      { display: "", disabled: false },
      { display: "", disabled: false },
      { display: "", disabled: false },
      { display: "", disabled: false }
    ];

    expect(winDiagFunc(grid)).to.equal("no winner");
  });
  it("empty grid no winner", () => {
    const grid = [
      { display: "X", disabled: false },
      { display: "O", disabled: false },
      { display: "O", disabled: false },
      { display: "", disabled: false },
      { display: "X", disabled: false },
      { display: "O", disabled: false },
      { display: "", disabled: false },
      { display: "X", disabled: false },
      { display: "O", disabled: false }
    ];

    expect(winDiagFunc(grid)).to.equal("no winner");
  });
});
