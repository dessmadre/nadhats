import { dehydrate, QueryClient } from 'react-query';
import Image from 'next/image';
import {
  fetchProducts,
  useProducts,
  useCartRetrieve,
  fetchCartAddItem,
} from '../queries';

export default function Store() {
  const { data: productsData, isLoading: productsLoading } = useProducts();
  const { refetch } = useCartRetrieve();

  const products = productsData.data;

  const handleAddToCart = async (productId: string) => {
    await fetchCartAddItem(productId, 1);
    await refetch();
  };

  if (productsLoading) {
    return <main>Loading...</main>;
  }
  return (
    <main className='px-150 grid grid-cols-3 store'>
      {products.map((p) => {
        return (
          <figure key={p.id} className='product-card shadow-2xl'>
            <figure className='shadow-xl flex flex-col'>
              <Image
                src={p.media.source}
                height={365}
                width={330}
                objectFit='cover'
                objectPosition='bottom'
                alt={p.name}
              />
              <figcaption className='product-details flex flex-col p-'>
                <section className='flex justify-between items-center'>
                  <p className='text-2xl text-wrap font-semibold'>{p.name}</p>
                  <p className='text-xl font-light'>{p.price.formatted}</p>
                </section>
                <div className='product-actions'>
                  <button
                    className='product-button bg-black text-white font-semibold'
                    onClick={() => handleAddToCart(p.id)}
                  >
                    Add to cart
                  </button>
                </div>
              </figcaption>
            </figure>
          </figure>
        );
      })}
    </main>
  );
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
