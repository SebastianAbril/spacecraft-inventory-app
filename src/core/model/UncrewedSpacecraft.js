import { Spacecraft } from './Spacecraft';

/**
 * UncrewedSpacecraft is used for exploration purposes in the space, this class
 * extends from `Spacecraft` class and its atrributes are: speed and
 * tonsOfPropulsion. The methods are `activateExplorationMode()` ,
 * `getType()` and `toJSON`.The last two methods are overwrited in
 * order to change their behavior.
 */
class UncrewedSpacecraft extends Spacecraft {
  constructor(name, weight, speed, tonsOfPropulsion) {
    super(name, weight);
    this._speed = speed;
    this._tonsOfPropulsion = tonsOfPropulsion;
  }

  activateExplorationMode() {
    console.log('Exploration Mode activated');
  }

  toJSON() {
    const json = super.toJSON();
    return {
      ...json,
      speed: this._speed,
      tonsOfPropulsion: this._tonsOfPropulsion
    };
  }

  getType() {
    return 'UncrewedSpacecraft';
  }

  get speed() {
    return this._speed;
  }
  get tonsOfPropulsion() {
    return this._tonsOfPropulsion;
  }
}

export { UncrewedSpacecraft };
