import { CategoryCollection } from '@chec/commerce.js/features/categories';
import { useQuery } from 'react-query';
import { commerceJsClient } from '../lib/commercejsClient';

const fetchCollections = async (): Promise<CategoryCollection> => {
  try {
    const collections: CategoryCollection =
      await commerceJsClient.categories.list();
    return collections;
  } catch (err) {
    console.log(err);
  }
};

export const useCollections = () =>
  useQuery<CategoryCollection, Error>(['collections'], fetchCollections);
