import { commerceJsClient } from '../lib/commercejsClient';
import { useQuery } from 'react-query';
import { Cart } from '@chec/commerce.js/types/cart';

const fetchCartRetrieve = async (): Promise<Cart> => {
  try {
    const cart: Cart = await commerceJsClient.cart.retrieve();
    return cart;
  } catch (err) {
    console.log(err);
  }
};

const useCartRetrieve = () =>
  useQuery<Cart, Error>(['retrieveCart'], fetchCartRetrieve);

export { fetchCartRetrieve, useCartRetrieve };
