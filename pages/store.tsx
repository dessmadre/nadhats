import { dehydrate, QueryClient } from 'react-query';
import { fetchProducts, useProducts } from '../queries';
import ProductCard from '../components/Store/ProductCard';
import SkeletonStore from '../components/Store/SkeletonStore';

const Store: React.FC = () => {
  const { data: productsData, isLoading: productsLoading } = useProducts();

  const products = productsData.data;

  if (productsLoading) {
    return <SkeletonStore />;
  }
  return (
    <main className='px-25 lg:px-150 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-50 justify-items-center'>
      {products.map((p) => {
        return <ProductCard key={p.id} product={p} />;
      })}
    </main>
  );
};

export async function getStaticProps() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(['products'], fetchProducts);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

export default Store;
