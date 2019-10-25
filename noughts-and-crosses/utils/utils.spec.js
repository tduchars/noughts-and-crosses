const { expect } = require('chai');
const { winDiagFunc } = require('./utils');

describe('winDiagFunc', () => {
  it('empty grid no winner', () => {
    const grid = [
      { display: '', disabled: false },
      { display: '', disabled: false },
      { display: '', disabled: false },
      { display: '', disabled: false },
      { display: '', disabled: false },
      { display: '', disabled: false },
      { display: '', disabled: false },
      { display: '', disabled: false },
      { display: '', disabled: false }
    ];
    expect(winFunc(grid)).to.equal('no winner');
  });
});
