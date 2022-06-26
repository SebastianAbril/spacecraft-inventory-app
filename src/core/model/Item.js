/**
 * this a class that contains all the information to be displayed in `InventoryScreen`, its attributes are: id, quantity, createAt and spacecraft.
 */
export class Item {
  constructor(id, quantity, createAt, spacecraft) {
    this._id = id;
    this._quantity = quantity;
    this._createAt = createAt;
    this._spacecraft = spacecraft;
  }

  get id() {
    return this._id;
  }

  get spacecraft() {
    return this._spacecraft;
  }

  get quantity() {
    return this._quantity;
  }

  get createAt() {
    return this._createAt;
  }
}
