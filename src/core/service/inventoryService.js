import { Item } from '../../core/model/Item';
import { getSpacecraftFactory } from '../../core/model/getSpacecraftFactory';
import { db } from './firebase';
import { itemConverter } from './itemConverter';

export const createItem = async (quantity, type, spacecraftData) => {
  const spacecraft = getSpacecraftFactory(type, spacecraftData);
  const item = new Item(null, quantity, null, spacecraft);

  await db.collection('inventory').withConverter(itemConverter).doc().set(item);
};

export const getItems = async () => {
  const query = await db.collection('inventory').withConverter(itemConverter).get();
  const items = [];

  query.forEach((document) => items.push(document.data()));

  return items;
};
