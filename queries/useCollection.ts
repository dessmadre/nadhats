import { useQuery } from 'react-query';
import { CategoryCollection } from '@chec/commerce.js/features/categories';

import { commerceJsClient } from '../lib/commercejsClient';
import { Category } from '@chec/commerce.js/types/category';

const fetchCollection = async (collectionId: string): Promise<Category> => {
  try {
    const collection: Category = await commerceJsClient.categories.retrieve(
      collectionId
    );
    return collection;
  } catch (err) {
    console.log(err);
  }
};

export const useCollection = (collectionId: string) =>
  useQuery<Category, Error>(['collection', collectionId], () =>
    fetchCollection(collectionId)
  );
