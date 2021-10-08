import { commerceJsClient } from '../lib/commercejsClient';
import { useQuery } from 'react-query';
import { DeleteResponse } from '@chec/commerce.js/features/cart';

const fetchCartDelete = async (): Promise<DeleteResponse> => {
  try {
    const cart: DeleteResponse = await commerceJsClient.cart.delete();
    return cart;
  } catch (err) {
    console.log(err);
  }
};

const useCartDelete = () =>
  useQuery<DeleteResponse, Error>(['deleteCart'], fetchCartDelete);

export { fetchCartDelete, useCartDelete };
