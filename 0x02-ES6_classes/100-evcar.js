import Car from './10-car';

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, range);
    this._range = range;
  }

  cloneCar() {
    const Spec = super.constructor[Symbol.spec];

    return new Spec();
  }
}
