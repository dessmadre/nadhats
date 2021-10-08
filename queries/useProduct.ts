import { Product } from '@chec/commerce.js/types/product';
import { useQuery } from 'react-query';

import { commerceJsClient } from '../lib/commercejsClient';

const fetchProduct = async (productId: string): Promise<Product> => {
  try {
    const product: Product = await commerceJsClient.products.retrieve(
      productId
    );
    return product;
  } catch (err) {
    console.log(err);
  }
};

const useProduct = (productId: string) =>
  useQuery<Product, Error>(['productById', productId], () =>
    fetchProduct(productId)
  );

export { useProduct, fetchProduct };
