import SkeletonProductCard from './SkeletonProductCard';

const SkeletonStore = () => {
  return (
    <main className='px-150 grid grid-cols-3 store'>
      <SkeletonProductCard />
      <SkeletonProductCard />
      <SkeletonProductCard />
      <SkeletonProductCard />
      <SkeletonProductCard />
      <SkeletonProductCard />
    </main>
  );
};

export default SkeletonStore;
