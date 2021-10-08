import { FC } from 'react';
import { dehydrate, QueryClient } from 'react-query';
import { useProducts, fetchProducts, useCollections } from '../queries';

export default function Home() {
  const { data } = useProducts();
  return <main></main>;
}

export async function getStaticProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(['products'], fetchProducts);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}
