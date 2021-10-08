import { commerceJsClient } from '../lib/commercejsClient';
import { useQuery } from 'react-query';
import { Cart } from '@chec/commerce.js/types/cart';

const fetchCartRefresh = async (): Promise<Cart> => {
  try {
    const cart: Cart = await commerceJsClient.cart.refresh();
    return cart;
  } catch (err) {
    console.log(err);
  }
};

export const useCartRefresh = () => useQuery(['refreshCart'], fetchCartRefresh);
