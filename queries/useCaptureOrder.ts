import { commerceJsClient } from '../lib/commercejsClient';
import { useQuery } from 'react-query';
import { CheckoutCapture } from '@chec/commerce.js/types/checkout-capture';
import { CheckoutCaptureResponse } from '@chec/commerce.js/types/checkout-capture-response';

const fetchCaptureOrder = async (
  checkoutToken: string,
  data: CheckoutCapture
): Promise<CheckoutCaptureResponse> => {
  try {
    const order: CheckoutCaptureResponse =
      await commerceJsClient.checkout.capture(checkoutToken, data);
    return order;
  } catch (err) {
    console.log(err);
  }
};

const useCaptureOrder = (checkoutToken: string, data: CheckoutCapture) =>
  useQuery(['captureOrder', checkoutToken, data], () =>
    fetchCaptureOrder(checkoutToken, data)
  );

export { fetchCaptureOrder, useCaptureOrder };
