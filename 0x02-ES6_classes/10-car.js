export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  static get [Symbol.spec]() {
    return this;
  }

  cloneCar() {
    const Spec = this.constructor[Symbol.spec];

    return new Spec();
  }
}
