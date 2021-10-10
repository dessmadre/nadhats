const SkeletonProductCard = () => {
  return (
    <figure className='product-card shadow-2xl'>
      <figure className='shadow-xl flex flex-col'>
        <div className='skeleton h-skeletonStore w-full' />

        <figcaption className='product-details flex flex-col p-'>
          <section className='flex justify-between items-center'>
            <p className='text-2xl text-wrap font-semibold w-32 h-8 skeleton' />
            <p className='text-xl font-light w-20 h-8 skeleton' />
          </section>
          <div className='product-actions'>
            <button className='product-button skeleton text-white font-semibold w-24 h-10'></button>
          </div>
        </figcaption>
      </figure>
    </figure>
  );
};

export default SkeletonProductCard;
