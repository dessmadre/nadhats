const CartSkeletonLoader = () => {
  return (
    <main className='px-150 grid grid-cols-3 gap-4'>
      <section className='col-span-2'>
        <figure className='flex cart-product'>
          <div className='skeleton w-200 h-200' />
          <div className='cart-product-details flex-col items-center justify-center'>
            <h3 className='text-2xl font-light w-28 h-8 skeleton' />
            <p className='text-xl font-semibold w-28 h-7 skeleton' />
            <div className='text-sm font-medium cart-product-acitions'>
              <button className='w-14 h-5 skeleton' />
            </div>
          </div>
        </figure>
        <figure className='flex cart-product hover:shadow-lg'>
          <div className='skeleton w-200 h-200' />
          <div className='cart-product-details flex-col items-center justify-center'>
            <h3 className='text-2xl font-light w-28 h-8 skeleton' />
            <p className='text-xl font-semibold w-28 h-7 skeleton' />
            <div className='text-sm font-medium cart-product-acitions'>
              <button className='w-14 h-5 skeleton' />
            </div>
          </div>
        </figure>
      </section>
      <section className='col-span-1 shadow-xl max-h-500 p-5'>
        <h2 className='uppercase font-bold text-3xl w-full h-10 text-center pb-2 skeleton' />
        <aside className='w-full flex justify-between items-center my-4'>
          <p className='text-xl font-bold w-20 h-7 skeleton' />
          <p className='text-3xl font-thin h-7 w-24 skeleton' />
        </aside>
        <aside className='w-full flex justify-between items-center'>
          <p className='text-xl font-bold w-20 h-7 skeleton' />
          <p className='text-3xl font-thin h-7 w-24 skeleton' />
        </aside>
        <hr className='mt-12 mb-24 border-black' />
        <aside className='w-full flex justify-between items-center'>
          <p className='text-xl font-bold w-20 h-7 skeleton' />
          <p className='text-3xl font-thin h-7 w-24 skeleton' />
        </aside>
        <aside className='w-full'>
          <div className='uppercase w-full h-12 mt-3 p-3 skeleton text-white text-center' />
        </aside>
      </section>
    </main>
  );
};

export default CartSkeletonLoader;
