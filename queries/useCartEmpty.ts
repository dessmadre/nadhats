import { commerceJsClient } from '../lib/commercejsClient';
import { useQuery } from 'react-query';
import { EmptyResponse } from '@chec/commerce.js/features/cart';

const fetchCartEmpty = async (): Promise<EmptyResponse> => {
  try {
    const cart: EmptyResponse = await commerceJsClient.cart.empty();
    return cart;
  } catch (err) {
    console.log(err);
  }
};

const useCartEmpty = () =>
  useQuery<EmptyResponse, Error>(['emptyCart'], fetchCartEmpty);

export { fetchCartEmpty, useCartEmpty };
