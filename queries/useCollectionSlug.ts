import { useQuery } from 'react-query';

import { commerceJsClient } from '../lib/commercejsClient';
import { Category } from '@chec/commerce.js/types/category';

const fetchCollectionSlug = async (slug: string): Promise<Category> => {
  try {
    const collection: Category = await commerceJsClient.categories.retrieve(
      slug,
      {
        type: 'slug',
      }
    );
    return collection;
  } catch (err) {
    console.log(err);
  }
};

const useCollectionSlug = (slug: string) =>
  useQuery<Category, Error>(['retrieveCollectionSlug', slug], () =>
    fetchCollectionSlug(slug)
  );

export { fetchCollectionSlug, useCollectionSlug };
