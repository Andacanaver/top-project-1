import React from 'react'

const Header = () => {


  return (
    <header className='bg-dark-blue'>
      <nav className='flex flex-row flex-1 text-white text-2xl justify-center items-center'>
        <div className='flex grow justify-start w-1/2 p-5'>
          Header Logo
        </div>
        <div className='flex flex-auto justify-center text-lg w-1/2'>
          <ul className='flex flex-row flex-1 justify-center items-center'>
            <li className='flex-1 p-2 text-center'>header link one</li>
            <li className='flex-1 p-2 text-center'>header link two</li>
            <li className='flex-1 p-2 text-center'>header link three</li>
          </ul>
        </div>
      </nav>
      <div className='flex flex-row w-full px-10'>
        <div className='flex-1 m-10 p-10 w-1/2'>
          <h1 className='text-white text-5xl font-extrabold'>This website is awesome</h1>
          <p className='text-off-white text-lg'>
            This website has some subtext that goes here under the main title. It's a smaller font and the color is lower contrast.
          </p>
          <button type='button' className='bg-light-blue text-white rounded-md py-1 px-3 mr-3 '>Sign up</button>
        </div>
        <div className='flex flex-1 justify-center items-center w-1/2 p-10 m-10'>
          <div>
            <p className=''>this is a placeholder for an image</p>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header