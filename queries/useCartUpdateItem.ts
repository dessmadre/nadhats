import { commerceJsClient } from '../lib/commercejsClient';
import { useQuery } from 'react-query';
import { AddUpdateResponse } from '@chec/commerce.js/features/cart';

interface UpdateItem {
  quantity: number;
}

const fetchCartUpdateItem = async (
  productId: string,
  data: UpdateItem
): Promise<AddUpdateResponse> => {
  try {
    const cart: AddUpdateResponse = await commerceJsClient.cart.update(
      productId,
      data
    );
    return cart;
  } catch (err) {
    console.log(err);
  }
};

const useCartUpdateItem = (productId: string, data: UpdateItem) =>
  useQuery<AddUpdateResponse, Error>(
    ['updateItemInCart', productId, data],
    () => fetchCartUpdateItem(productId, data)
  );

export { fetchCartUpdateItem, useCartUpdateItem };
