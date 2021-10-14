import { useQuery } from 'react-query';
import { fetchCheckoutGenerate, useCartRetrieveId } from '../queries';

import Image from 'next/image';
import { LineItem } from '@chec/commerce.js/types/line-item';

interface OrderSummary {
  shipping: string;
  subtotal: string;
  total: string;
}

const Checkout: React.FC = () => {
  const { data: cartId, isFetching: cartIdFetching } = useCartRetrieveId();
  console.log('cartId', cartId);

  const {
    data: checkoutToken,
    isIdle,
    isFetching,
  } = useQuery(
    ['generateCheckoutToken', cartId],
    () => fetchCheckoutGenerate(cartId),
    {
      enabled: !!cartId,
    }
  );

  if (cartIdFetching || isIdle || isFetching) {
    return <p>Loading</p>;
  }

  const orderSummary: OrderSummary = checkoutToken && {
    subtotal: checkoutToken.live.subtotal.formatted_with_symbol,
    shipping: checkoutToken.live.shipping.price.formatted_with_symbol,
    total: checkoutToken.live.total.formatted_with_symbol,
  };

  const items: LineItem[] = checkoutToken && checkoutToken.live.line_items;

  return (
    <main className='px-150 grid grid-cols-3  gap-5'>
      <section className='col-start-1 col-end-3 row-span-3 bg-indigo-300'>
        Checkout Form
      </section>
      <section className='col-start-3 col-end-3 bg-gray-50'>
        <p>Order Summary</p>
        <figure className='p-5 '>
          <figcaption className='w-full flex justify-between items-center'>
            <p className='font-bold'>Subtotal:</p>
            <p className='font-thin'>{orderSummary.subtotal}</p>
          </figcaption>
          <figcaption className='w-full flex justify-between items-center mt-5'>
            <p className='font-bold'>Shipping:</p>
            <p className='font-thin'>{orderSummary.shipping}</p>
          </figcaption>
          <figcaption className='w-full flex justify-between items-center mt-5'>
            <p className='text-3xl font-bold'>Total:</p>
            <p className='text-3xl font-thin'>{orderSummary.total}</p>
          </figcaption>
        </figure>
      </section>
      <section className='col-start-3 col-end-3 row-start-2 row-end-2 bg-gray-50'>
        <p>Cart </p>
        {items?.map((item) => {
          return (
            <figure key={item.name} className='p-5 flex'>
              <Image
                src={item.media.source}
                alt={item.name}
                width={150}
                height={150}
                objectFit='contain'
              />
              <figcaption className='flex flex-col  ml-5'>
                <p className='text-xl font-semibold'>{item.name}</p>
                <p className='text-sm font-medium'>Qty: {item.quantity}</p>
                <p className='text-sm'>{item.price.formatted_with_symbol}</p>
              </figcaption>
            </figure>
          );
        })}
      </section>
    </main>
  );
};

export default Checkout;
