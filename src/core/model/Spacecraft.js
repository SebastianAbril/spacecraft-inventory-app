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
