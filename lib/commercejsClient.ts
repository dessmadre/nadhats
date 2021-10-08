import Commerce from '@chec/commerce.js';

export const commerceJsClient: Commerce = new Commerce(
  process.env.NEXT_PUBLIC_COMMERCE_JS_KEY
);
