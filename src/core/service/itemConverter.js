import firebase from 'firebase/app';
import { Item } from '../model/Item';
import { SpacecraftFactory } from '../model/SpacecraftFactory';

export const itemConverter = {
  toFirestore(item) {
    return {
      quantity: item.quantity,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      type: item.spacecraft.getType(),
      spacecraft: item.spacecraft.toJSON()
    };
  },
  fromFirestore(snapshot, options) {
    const data = snapshot.data(options);
    const spacecraft = SpacecraftFactory.get(data.type, data.spacecraft);
    return new Item(
      snapshot.id,
      data.quantity,
      new Date(data.createdAt.seconds * 1000), // La fecha de Firestore no es compatible con la otra
      spacecraft
    );
  }
};
