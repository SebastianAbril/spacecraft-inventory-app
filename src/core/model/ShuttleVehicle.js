import { Spacecraft } from './Spacecraft';

class ShuttleVehicle extends Spacecraft {
  constructor(name, weight, tonsOfPropulsion, loadCapacity) {
    super(name, weight);
    this._tonsOfPropulsion = tonsOfPropulsion;
    this._loadCapacity = loadCapacity;
    this._payLoad = null;
  }

  addPayLoad(spacecraft) {
    if (spacecraft.weight <= this._loadCapacity) {
      this._payLoad = spacecraft;
    } else {
      console.log('Not recomended, will crash');
    }
  }

  get tonsOfPropulsion() {
    return this._tonsOfPropulsion;
  }
  get loadCapacity() {
    return this._loadCapacity;
  }
}

export { ShuttleVehicle };
