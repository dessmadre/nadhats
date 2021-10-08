import { useProducts, useProduct } from '../queries';

export default function Home() {
  const { data: products } = useProducts();
  const { data: product } = useProduct('prod_NqKE50BR4wdgBL');

  console.log(products);
  console.log(product);

  return <main></main>;
}
