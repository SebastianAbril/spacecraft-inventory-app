import { Item } from '../../core/model/Item';
import { SpacecraftFactory } from '../../core/model/SpacecraftFactory';
import { db } from './firebase';
import { itemConverter } from './itemConverter';

/**
 * Creates a new item in the Firestore database.
 * @param quantity
 * @param type
 * @param spacecraftData
 */
export const createItem = async (quantity, type, spacecraftData) => {
  const spacecraft = SpacecraftFactory.get(type, spacecraftData);
  const item = new Item(null, quantity, null, spacecraft);

  await db.collection('inventory').withConverter(itemConverter).doc().set(item);
};

/**
 * Obtain an array of all the items that are in the Firestore collection,
 * also it filters
 * them according to the searched value.
 * @param searchValue
 * @returns Array of items
 */
export const getItems = async (searchValue) => {
  const query = await db
    .collection('inventory')
    .orderBy('createdAt', 'desc')
    .withConverter(itemConverter)
    .get();
  let items = [];

  query.forEach((document) => items.push(document.data()));

  if (searchValue) {
    items = items.filter(
      (item) =>
        item.spacecraft.name.toLowerCase().startsWith(searchValue.toLowerCase()) ||
        item.spacecraft.getType().toLowerCase().startsWith(searchValue.toLowerCase())
    );
  }

  return items;
};

/**
 *obtain a specific item according to its id.
 * @param id
 * @returns item
 */
export const getItemById = async (id) => {
  const documentReference = db.collection('inventory').withConverter(itemConverter).doc(id);
  const document = await documentReference.get();

  if (document.exists) {
    return document.data();
  } else {
    throw new Error(`Document with id ${id}  not found`);
  }
};

/**
 * Updates the Quantity of an existing item.
 * @param id
 * @param quantity
 */
export const updateItemQuantityById = async (id, quantity) => {
  await db.collection('inventory').doc(id).update({
    quantity
  });
};

/**
 * Deletes an existing item.
 * @param id
 */
export const deleteItemById = async (id) => {
  await db.collection('inventory').doc(id).delete();
};
