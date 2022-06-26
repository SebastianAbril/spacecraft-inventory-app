import { Spacecraft } from './Spacecraft';

/**
 * The CrewedSpacecraft's purpose is to send human beings into space for repair, maintenance or research tasks, this class extends
 * from `Spacecraft` class and its atrributes are: speed and crewCapacity. The methods are `activateEmergencyMode()`
 * , `getType()` and `toJSON`.The last two methods are overwrited in order to change their behavior.
 */
class CrewedSpacecraft extends Spacecraft {
  constructor(name, weight, speed, crewCapacity) {
    super(name, weight);
    this._speed = speed;
    this._crewCapacity = crewCapacity;
  }

  activateEmergencyMode() {
    console.log('Emergency Mode Activated');
  }

  toJSON() {
    const json = super.toJSON();
    return {
      ...json,
      speed: this._speed,
      crewCapacity: this._crewCapacity
    };
  }

  getType() {
    return 'CrewedSpacecraft';
  }

  get speed() {
    return this._speed;
  }
  get crewCapacity() {
    return this._crewCapacity;
  }
}

export { CrewedSpacecraft };
