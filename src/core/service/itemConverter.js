import firebase from 'firebase/app';
import { Item } from '../model/Item';
import { getSpacecraftFactory } from '../model/getSpacecraftFactory';
/*

  Iventory (Collection)
    Item (Document) -> data
      quantity
      createAt
      type
      spaceCraft
          name
          wetigh
          tonsPRILOC
          CRETWE

*/

export const itemConverter = {
  toFirestore(item) {
    return {
      quantity: item.quantity,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      type: item.spacecraft.type,
      spacecraft: item.spacecraft.toJSON()
    };
  },
  fromFirestore(snapshot, options) {
    const data = snapshot.data(options);
    const spacecraft = getSpacecraftFactory(data.type, data.spacecraft);
    return new Item(snapshot.id, data.quantity, data.createAt, spacecraft);
  }
};
