import { QueryClient } from 'react-query';
import { dehydrate } from 'react-query';

import {
  fetchCollectionSlug,
  fetchProductSlug,
  useCollectionSlug,
  useProductSlug,
} from '../queries';
import Header from '../components/Home/Header';
import Featured from '../components/Home/Featured';
import { slug } from '../lib/featuredSlug';

const Home = () => {
  return (
    <>
      <Header />

      <Featured />
    </>
  );
};

// example for server side rendering using react-query
export async function getStaticProps() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(['retrieveCollectionSlug', slug], () =>
    fetchCollectionSlug(slug)
  );
  await queryClient.prefetchQuery(['productsByCollectionSlug', slug], () =>
    fetchProductSlug(slug)
  );

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

export default Home;
