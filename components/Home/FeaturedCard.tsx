import { Product } from '@chec/commerce.js/types/product';
import Image from 'next/image';

interface IFeaturedCardProps {
  product: Product;
}

const FeaturedCard: React.FC<IFeaturedCardProps> = ({ product }) => {
  return (
    <figure className='min-h-featuredCard max-h-featuredCard max-w-featuredCard min-w-featuredCard'>
      <Image
        src={product.media.source}
        alt={product.name}
        height={450}
        width={450}
        objectFit='cover'
      ></Image>
    </figure>
  );
};

export default FeaturedCard;
