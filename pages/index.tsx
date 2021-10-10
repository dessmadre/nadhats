import { QueryClient } from 'react-query';
import { dehydrate } from 'react-query';

import { fetchProducts, useProducts } from '../queries';
import Header from '../components/Header';

export default function Home() {
  const { data: products, isLoading: porductsIsLoading } = useProducts();

  if (porductsIsLoading) {
    return <section>Loading...</section>;
  }

  return (
    <>
      <Header />
    </>
  );
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
