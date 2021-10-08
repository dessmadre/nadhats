import { commerceJsClient } from '../lib/commercejsClient';
import { useQuery } from 'react-query';
import { LocaleListSubdivisionsResponse } from '@chec/commerce.js/features/services';

const fetchShippingSubdivisions = async (
  checkoutToken: string,
  countryCode: string
): Promise<LocaleListSubdivisionsResponse> => {
  try {
    const subdivision: LocaleListSubdivisionsResponse =
      await commerceJsClient.services.localeListShippingSubdivisions(
        checkoutToken,
        countryCode
      );
    return subdivision;
  } catch (err) {
    console.log(err);
  }
};

export const useShippingSubdivisions = (
  checkoutToken: string,
  countryCode: string
) =>
  useQuery<LocaleListSubdivisionsResponse, Error>(
    ['fetchShippingSubdivisions', checkoutToken, countryCode],
    () => fetchShippingSubdivisions(checkoutToken, countryCode)
  );
