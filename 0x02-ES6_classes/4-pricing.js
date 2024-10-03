import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    this._amount = amount;
    this._currency = currency;
  }

  get amount() {
    return this._amount;
  }

  get currency() {
    return this._currency;
  }

  set amount(amount) {
    if (typeof amount !== 'number') {
      throw new TypeError('Amount must be a Number');
    }
    this._amount = amount;
  }

  set currency(currency) {
    if (currency instanceof Currency) {
      this._currency = currency;
    } else {
      throw new TypeError('currency must be asn instance of Currency');
    }
  }

  // Method
  displayFullPrice() {
    return `${this._amount} ${this.currency.displayFullCurrency()}`;
  }

  static convertPrice(amount, conversionRate) {
    return this._amount * conversionRate;
  }
}
