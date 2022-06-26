/**
 * Spacecraft is the base class for all the diferente types of spacecrafts available,
 * its attributes are: name and weight. The methods of the class are `getType()`
 * which returns the name of the spacecraft and `toJSON()`, that converts the
 * custom objects into simple objects to handle Firestore's storange
 */
class Spacecraft {
  constructor(name, weight) {
    this._name = name;
    this._weight = weight;
  }

  get name() {
    return this._name;
  }
  get weight() {
    return this._weight;
  }

  getType() {
    return 'Spacecraft';
  }

  toJSON() {
    return {
      name: this._name,
      weight: this._weight
    };
  }
}

export { Spacecraft };
