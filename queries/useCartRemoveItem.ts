import { commerceJsClient } from '../lib/commercejsClient';
import { useQuery } from 'react-query';
import { RemoveResponse } from '@chec/commerce.js/features/cart';

const fetchCartRemoveItem = async (
  productId: string
): Promise<RemoveResponse> => {
  try {
    const cart: RemoveResponse = await commerceJsClient.cart.remove(productId);
    return cart;
  } catch (err) {
    console.log(err);
  }
};

const useCartRemoveItem = (productId: string) =>
  useQuery<RemoveResponse, Error>(['removeCartItem', productId], () =>
    fetchCartRemoveItem(productId)
  );

export { fetchCartRemoveItem, useCartRemoveItem };
