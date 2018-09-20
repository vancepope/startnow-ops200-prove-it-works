const expect = require('chai').expect;
const Mortgage = require('../../src/js/lib/Mortgage');

describe('Mortgage Calculator', () => {
    let mortgage = null;

    beforeEach(() => {
        mortgage = new Mortgage();
    });
  it('should have monthly payment function', () => {
    expect(mortgage.monthlyPayment).to.exist;
  });
  it('should return monthly payment of 146.71', () => {
    mortgage = new Mortgage(30000, 4.2, 30, 12);
    expect(mortgage.monthlyPayment()).to.equal('146.71');
  });
  it('should return monthly payment of 53.89', () => {
    mortgage = new Mortgage(12000, 3.5, 30, 12);
    expect(mortgage.monthlyPayment()).to.equal('53.89');
  });
  it('should return monthly payment of 47.77', () => {
    mortgage = new Mortgage(9000, 4.9, 30, 12);
    expect(mortgage.monthlyPayment()).to.equal('47.77');
  });
});
