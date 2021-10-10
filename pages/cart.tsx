import { dehydrate, QueryClient } from 'react-query';
import Link from 'next/link';
import { fetchCartRetrieve, useCartRetrieve } from '../queries';
import { LineItem } from '@chec/commerce.js/types/line-item';
import CartProductCard from '../components/Cart/CartProductCard';
import { useEffect } from 'react';

export default function Cart() {
  const { data, isLoading, isFetching, refetch } = useCartRetrieve();

  useEffect(() => {
    refetch();
  }, [refetch]);

  console.log(data);

  if (isLoading || isFetching) {
    return (
      <main className='px-150'>
        <p>Loading...</p>
      </main>
    );
  }

  if (!data.line_items.length) {
    return (
      <main className='px-150'>
        <p className='text-3xl'>
          Your cart is empty{' '}
          <Link href='/store'>
            <a className='hover:underline'>continue shopping</a>
          </Link>
        </p>
      </main>
    );
  }

  return (
    <main className='px-150 grid grid-cols-3 '>
      <section className='col-span-2'>
        {data.line_items.map((i: LineItem) => {
          return <CartProductCard key={i.id} i={i} />;
        })}
      </section>
      <section className='col-span-1 shadow-xl max-h-500 p-5'>
        <h2 className='uppercase font-bold text-3xl w-full border-b-4 border-black'>
          Order subtotal
        </h2>
        <aside className='w-full flex justify-between items-center my-4'>
          <p className='text-xl font-bold'>Subtotal:</p>
          <p className='text-3xl font-thin'>{data.subtotal.formatted}</p>
        </aside>
        <aside className='w-full flex justify-between items-center'>
          <p className='text-xl font-bold'>Est. Shipping:</p>
          <p className='text-3xl font-thin'>5.00</p>
        </aside>
        <hr className='mt-12 mb-24 border-black' />
        <aside className='w-full flex justify-between items-center'>
          <p className='text-xl font-bold'>Est. Total:</p>
          <p className='text-3xl font-thin'>{data.subtotal.raw + 5}.00</p>
        </aside>
      </section>
    </main>
  );
}

export async function getStaticProps() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(['retrieveCart'], fetchCartRetrieve);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}
