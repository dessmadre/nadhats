import Image from 'next/image';
import { Product } from '@chec/commerce.js/types/product';
import { fetchCartAddItem, useCartRetrieve } from '../../queries';

interface IProductCardProps {
  product: Product;
}
const ProductCard: React.FC<IProductCardProps> = ({ product }) => {
  const { refetch } = useCartRetrieve();

  const handleAddToCart = async (productId: string) => {
    await fetchCartAddItem(productId, 1);
    await refetch();
  };

  return (
    <figure key={product.id} className='product-card shadow-2xl'>
      <figure className='shadow-xl flex flex-col'>
        <Image
          src={product.media.source}
          height={365}
          width={330}
          objectFit='cover'
          objectPosition='bottom'
          alt={product.name}
        />
        <figcaption className='product-details flex flex-col p-'>
          <section className='flex justify-between items-center'>
            <p className='text-2xl text-wrap font-semibold'>{product.name}</p>
            <p className='text-xl font-light'>{product.price.formatted}</p>
          </section>
          <div className='product-actions'>
            <button
              className='product-button bg-black text-white font-semibold'
              onClick={() => handleAddToCart(product.id)}
            >
              Add to cart
            </button>
          </div>
        </figcaption>
      </figure>
    </figure>
  );
};

export default ProductCard;
