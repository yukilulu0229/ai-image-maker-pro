import React from 'react';

const Signup = () => {
  return (
    <main className='p-20 bg-gray-200 w-full'>
      <section className='bg-white flex flex-col items-center py-32'>
        <h2 className='text-5xl'>Ready to take a free trial?</h2>
        <p className='mt-7 text-3xl text-center w-10/12'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>

        <form className="border mt-20 p-16 w-6/12">
          <h3 className='text-2xl'>Sign up for a free account</h3>

          <div className='mt-11 flex justify-between'>
            <input className='border w-56 h-10 placeholder:text-sm p-2' type="text" placeholder="First name" />
            <input className='border w-56 h-10 placeholder:text-sm p-2' type="text" placeholder="Last name" />
          </div>

          <input type="email" placeholder="Email address" className='block mt-6 border h-10 placeholder:text-sm p-2 w-full' />
          <input type="password" placeholder="Create password" className='block mt-6 border h-10 placeholder:text-sm p-2 w-full' />

          <button className='mt-6 bg-sky-500 h-10 text-sm w-32 text-white rounded-md'>Register</button>
        </form>
      </section>

      <div className='bg-white mt-10 flex items-center py-32 px-20'>
        <p className='w-2/3 text-3xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>

        <button className=' ml-10 bg-sky-500 h-12 text-sm w-48 text-white rounded-md'>Join Today</button>
      </div>

      <div className='bg-white mt-10 flex items-center py-32 px-20'>
        <p className='w-2/3 text-3xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>

        <button className='bg-sky-500 h-12 text-sm w-48 text-white rounded-md'>Join Today</button>
        <button className='ml-10 bg-white h-12 text-sm w-48 text-sky-500 rounded-md border border-sky-500'>Contact us</button>
      </div>
    </main>
  );
};

export default Signup;
