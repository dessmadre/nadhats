import { commerceJsClient } from '../lib/commercejsClient';
import { useQuery } from 'react-query';
import { LocaleListCountriesResponse } from '@chec/commerce.js/features/services';

const fetchShippingCountries = async (
  checkoutToken: string
): Promise<LocaleListCountriesResponse> => {
  try {
    const countries: LocaleListCountriesResponse =
      await commerceJsClient.services.localeListShippingCountries(
        checkoutToken
      );

    return countries;
  } catch (err) {
    console.log(err);
  }
};

export const useShippingCountries = (checkoutToken: string) =>
  useQuery(['fetchShippingCountries', checkoutToken], () =>
    fetchShippingCountries(checkoutToken)
  );
