import { Spacecraft } from './Spacecraft';

/**
 * the `ShuttleVehicle` is used to launch a load into space, this class extends from `Spacecraft` class and its atrributes are: tonsOfPropulsion, loadCapacity and load.
 * The methods are `addLoad()` , `releaseLoad()` , `getType()` and `toJSON`.The last two methods are overwrited in order to change their behavior.
 */
class ShuttleVehicle extends Spacecraft {
  constructor(name, weight, tonsOfPropulsion, loadCapacity) {
    super(name, weight);
    this._tonsOfPropulsion = tonsOfPropulsion;
    this._loadCapacity = loadCapacity;
    this._load = null;
  }

  addLoad(spacecraft) {
    if (spacecraft.weight <= this._loadCapacity) {
      this._load = spacecraft;
    } else {
      throw new Error('The spacecraft weight is greater than the maximun load capacity');
    }
  }

  releaseLoad() {
    if (this._load == null) {
      throw new Error('There is not current load to be released');
    }

    const currentLoad = this._load;
    this._load = null;
    return currentLoad;
  }

  toJSON() {
    const json = super.toJSON();
    return {
      ...json,
      tonsOfPropulsion: this._tonsOfPropulsion,
      loadCapacity: this._loadCapacity
    };
  }

  getType() {
    return 'ShuttleVehicle';
  }

  get tonsOfPropulsion() {
    return this._tonsOfPropulsion;
  }
  get loadCapacity() {
    return this._loadCapacity;
  }
}

export { ShuttleVehicle };
