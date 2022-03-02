import React from 'react';

const Quote = () => {
  return (
    <section className="h-96 pt-10">
      <div className='quote-container flex justify-center items-center bg-off-white h-full'>
        <div className='quote-wrapper w-1/2'>
          <blockquote className=' italic font-light text-4xl'>
            This is an inspiring quote, or a testimonial from a customer. Maybe it's just filling up sapce, or maybe people will actually read it. Who knows? All I know is that it looks nice.
          </blockquote>
          <p className='text-2xl font-bold flex justify-end p-4'>-Thor, God of Thunder</p>
        </div>
      </div>
    </section>
  )
}

export default Quote