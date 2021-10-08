import { commerceJsClient } from '../lib/commercejsClient';
import { useQuery } from 'react-query';
import { LineItem } from '@chec/commerce.js/types/line-item';

const fetchCartContents = async () => {
  try {
    const cart: LineItem[] = await commerceJsClient.cart.contents();
    return cart;
  } catch (err) {
    console.log(err);
  }
};

const useCartContents = () =>
  useQuery<LineItem[], Error>(['cartContents', fetchCartContents]);

export { fetchCartContents, useCartContents };
