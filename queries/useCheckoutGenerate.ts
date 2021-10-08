import { commerceJsClient } from '../lib/commercejsClient';
import { useQuery } from 'react-query';
import { CheckoutToken } from '@chec/commerce.js/types/checkout-token';

const fetchCheckoutGenerate = async (
  cartId: string
): Promise<CheckoutToken> => {
  const checkout: CheckoutToken = await commerceJsClient.checkout.generateToken(
    cartId,
    {
      type: 'cart',
    }
  );
  return checkout;
};

export const useCheckoutGenerate = (cartId: string) =>
  useQuery<CheckoutToken, Error>(['generateCheckoutToken'], () =>
    fetchCheckoutGenerate(cartId)
  );
