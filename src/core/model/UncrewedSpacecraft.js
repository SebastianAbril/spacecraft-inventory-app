import { Spacecraft } from './Spacecraft';

class UncrewedSpacecraft extends Spacecraft {
  constructor(name, weight, speed, tonsOfPropulsion) {
    super(name, weight);
    this._speed = speed;
    this._tonsOfPropulsion = tonsOfPropulsion;
  }

  toJSON() {
    const json = super.toJSON();
    return {
      ...json,
      speed: this._speed,
      tonsOfPropulsion: this._tonsOfPropulsion
    };
  }

  get speed() {
    return this._speed;
  }
  get tonsOfPropulsion() {
    return this._tonsOfPropulsion;
  }
}

export { UncrewedSpacecraft };
