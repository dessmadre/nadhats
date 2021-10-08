import { QueryClient } from 'react-query';
import { dehydrate } from 'react-query';

import { fetchProducts, useProducts } from '../queries';

export default function Home() {
  const { data: products, isLoading: porductsIsLoading } = useProducts();

  if (porductsIsLoading) {
    return <section>Loading...</section>;
  }

  return <main>{JSON.stringify(products, null, 2)}</main>;
}

// example for server side rendering using react-query
export async function getStaticProps() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(['products'], fetchProducts);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}
