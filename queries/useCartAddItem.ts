import { commerceJsClient } from '../lib/commercejsClient';
import { useQuery } from 'react-query';
import { AddUpdateResponse } from '@chec/commerce.js/features/cart';

const fetchCartAddItem = async (
  productId: string,
  quantity: number
): Promise<AddUpdateResponse> => {
  try {
    const cart: AddUpdateResponse = await commerceJsClient.cart.add(
      productId,
      quantity
    );

    return cart;
  } catch (err) {
    console.log(err);
  }
};

export const useCartAddItem = (productId: string, quantity: number) =>
  useQuery(['addItemToCart', productId, quantity], () =>
    fetchCartAddItem(productId, quantity)
  );
