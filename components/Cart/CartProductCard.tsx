import { LineItem } from '@chec/commerce.js/types/line-item';
import Image from 'next/image';

import { fetchCartRemoveItem, useCartRetrieve } from '../../queries';

interface ICartProps {
  i: LineItem;
}

const CartProductCard: React.FC<ICartProps> = ({ i }) => {
  const { refetch } = useCartRetrieve();

  const handleRemoveItem = async (itemId: string) => {
    await fetchCartRemoveItem(itemId);
    await refetch();
  };

  return (
    <figure className='flex cart-product hover:shadow-lg'>
      <Image
        src={i.media.source}
        alt={i.name}
        width={200}
        height={200}
        objectFit='cover'
        objectPosition='bottom'
      />
      <div className='cart-product-details flex-col items-center justify-center'>
        <h3 className='text-2xl font-light'>{i.name}</h3>
        <p className='text-xl font-semibold'>Quantity: {i.quantity}</p>
        <div className='text-sm font-medium cart-product-acitions'>
          <button className='underline' onClick={() => handleRemoveItem(i.id)}>
            Remove
          </button>
        </div>
      </div>
    </figure>
  );
};

export default CartProductCard;
