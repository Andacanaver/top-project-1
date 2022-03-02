import React from 'react'

const SignUp = () => {
  return (
    <section className="h-96 text-white">
      <div className='signup-container h-full flex justify-center items-center'>
        <div className='signup-wrapper bg-light-blue w-3/4 h-48 rounded-lg flex flex-row justify-center items-center'>
          <div className='action-wrapper mr-40'>
            <p className='text-2xl font-bold'>Call to action! It's time!</p>
            <p className='text-off-white'>Sign up for our product by clicking that button right over there!</p>
          </div>
          <div className='ml-40'>
            <button type='button' className='border-2 border-white rounded-lg px-8 py-1 '>Sign up</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SignUp