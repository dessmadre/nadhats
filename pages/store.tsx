import { dehydrate, QueryClient } from 'react-query';
import {
  fetchProducts,
  useProducts,
  useCartRetrieve,
  fetchCartRetrieve,
} from '../queries';
import ProductCard from '../components/Store/ProductCard';
import SkeletonStore from '../components/Store/SkeletonStore';

const Store: React.FC = () => {
  const { data: productsData, isLoading: productsLoading } = useProducts();
  const { data: cartRetireve } = useCartRetrieve();

  const products = productsData.data;

  if (productsLoading) {
    return <SkeletonStore />;
  }
  return (
    <main className='px-150 grid grid-cols-3 store'>
      {products.map((p) => {
        return <ProductCard key={p.id} product={p} />;
      })}
    </main>
  );
};

export async function getStaticProps() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(['products'], fetchProducts);
  await queryClient.prefetchQuery(['retrieveCart'], fetchCartRetrieve);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

export default Store;
