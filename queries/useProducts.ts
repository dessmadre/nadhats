import { useQuery } from 'react-query';
import { ProductCollection } from '@chec/commerce.js/features/products';

import { commerceJsClient } from '../lib/commercejsClient';

const fetchProducts = async (): Promise<ProductCollection> => {
  try {
    const products: ProductCollection = await commerceJsClient.products.list();
    return products;
  } catch (err) {
    console.log(err);
  }
};

const useProducts = () =>
  useQuery<ProductCollection, Error>(['products'], fetchProducts);

export { fetchProducts, useProducts };
