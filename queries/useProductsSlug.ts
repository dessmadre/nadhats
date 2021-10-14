import { useQuery } from 'react-query';
import { ProductCollection } from '@chec/commerce.js/features/products';

import { commerceJsClient } from '../lib/commercejsClient';

const fetchProductSlug = async (slug: string): Promise<ProductCollection> => {
  try {
    const products: ProductCollection = await commerceJsClient.products.list({
      category_slug: slug,
    });
    return products;
  } catch (err) {
    console.log(err);
  }
};

const useProductSlug = (slug: string) =>
  useQuery<ProductCollection, Error>(['productsByCollectionSlug', slug], () =>
    fetchProductSlug(slug)
  );

export { fetchProductSlug, useProductSlug };
