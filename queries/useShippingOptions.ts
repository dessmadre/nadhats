import { commerceJsClient } from '../lib/commercejsClient';
import { useQuery } from 'react-query';
import { GetShippingOptionsResponse } from '@chec/commerce.js/features/checkout';

const fetchShippingOptions = async (
  checkoutToken: string,
  country: string,
  regionState: string
): Promise<GetShippingOptionsResponse> => {
  try {
    const shippingOptions: GetShippingOptionsResponse =
      await commerceJsClient.checkout.getShippingOptions(checkoutToken, {
        country,
        region: regionState,
      });

    return shippingOptions;
  } catch (err) {
    console.log(err);
  }
};

const useGetShippingOptions = (
  checkoutToken: string,
  country: string,
  regionState: string = null
) =>
  useQuery(['getShippingOptions', checkoutToken, country, regionState], () =>
    fetchShippingOptions(checkoutToken, country, regionState)
  );

export { fetchShippingOptions, useGetShippingOptions };
