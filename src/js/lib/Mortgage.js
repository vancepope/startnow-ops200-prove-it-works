module.exports = class Mortgage {
  constructor(principal, interest, term, period) {
    this.principal = principal;
    this.interest = interest;
    this.term = term;
    this.period = period;
  }

  monthlyPayment() {
    const monthlyInterestRate = (parseFloat(this.interest) / 100) / this.period;
    const numberOfPayments = parseFloat(this.term) * this.period;
    const compoundedInterestRate = Math.pow((1 + monthlyInterestRate), numberOfPayments);
    const interestQuotient = (monthlyInterestRate * compoundedInterestRate) / ((Math.pow((1 + monthlyInterestRate), numberOfPayments)) - 1);
    const monthlyPayment = this.principal * interestQuotient;
    return monthlyPayment.toFixed(2);
  }
};
