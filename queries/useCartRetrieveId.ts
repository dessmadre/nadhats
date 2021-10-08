import { commerceJsClient } from '../lib/commercejsClient';
import { useQuery } from 'react-query';

const fetchCartRetrieveId = async (): Promise<string> => {
  try {
    const cart: string = commerceJsClient.cart.id();
    return cart;
  } catch (err) {
    console.log(err);
  }
};

export const useCartRetrieveId = () =>
  useQuery(['retrieveCartId'], fetchCartRetrieveId);
