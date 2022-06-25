import { Item } from '../../core/model/Item';
import { getSpacecraftFactory } from '../../core/model/getSpacecraftFactory';
import { db } from './firebase';
import { itemConverter } from './itemConverter';

export const createItem = async (quantity, type, spacecraftData) => {
  const spacecraft = getSpacecraftFactory(type, spacecraftData);
  const item = new Item(null, quantity, null, spacecraft);

  await db.collection('inventory').withConverter(itemConverter).doc().set(item);
};

export const getItems = async (searchValue) => {
  const query = await db.collection('inventory').withConverter(itemConverter).get();
  let items = [];

  query.forEach((document) => items.push(document.data()));

  if (searchValue) {
    items = items.filter((item) =>
      item.spacecraft.name.toLowerCase().startsWith(searchValue.toLowerCase())
    );
  }

  return items;
};

export const getItemById = async (id) => {
  const documentReference = db.collection('inventory').withConverter(itemConverter).doc(id);
  const document = await documentReference.get();

  if (document.exists) {
    return document.data();
  } else {
    throw new Error(`Document with id ${id}  not found`);
  }
};
