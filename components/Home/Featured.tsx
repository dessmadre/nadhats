import Link from 'next/link';

import { useCollectionSlug, useProductSlug } from '../../queries';
import { slug } from '../../lib/featuredSlug';
import FeaturedCard from './FeaturedCard';

const Featured = () => {
  const { data: collectionData } = useCollectionSlug(slug);
  const { data: productsData, isLoading: productsIsLoading } =
    useProductSlug(slug);

  const products = productsData.data;

  const autumn = products[4];
  const wildBerry = products[12];
  const sherbert = products[13];
  const coolAutumn = products[9];

  if (productsIsLoading) {
    return <section>Loading...</section>;
  }

  return (
    <main className='my-150 lg:px-150 flex flex-col justify-center items-center'>
      <h2 className='text-6xl font-semibold'>{collectionData.name}</h2>
      <section className='mt-150 grid grid-cols-1 lg:grid-cols-2 grid-rows-2 gap-5'>
        <FeaturedCard product={autumn} />
        <div className='mt-0 lg:-mt-20'>
          <FeaturedCard product={coolAutumn} />
        </div>
        <FeaturedCard product={wildBerry} />
        <div className='mt-0 lg:-mt-20'>
          <FeaturedCard product={sherbert} />
        </div>
      </section>
      <Link href='/store' passHref>
        <button className='mt-150 text-4xl font-semibold bg-gray-700 hover:bg-black text-white p-2 '>
          Check out the latest collection
        </button>
      </Link>
    </main>
  );
};

export default Featured;
