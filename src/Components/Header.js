import React from 'react'

const Header = () => {


  return (
    <header className='bg-dark-blue'>
      <nav className='flex flex-row flex-1 text-white justify-center items-center'>
        <div className='header-logo-container flex flex-1 justify-center w-1/2 my-8'>
          <div className='header-logo w-1/2 ml-10 pl-2 text-2xl'>
            <h2>Header Logo</h2>
          </div>
        </div>
        <div className='nav-links-container flex justify-around text-lg w-1/2'>
          <div className='nav-links flex flex-1 justify-center w-1/2'>
            <ul className='flex flex-row flex-initial justify-evenly items-center'>
              <li className='flex-initial p-2 text-center'>header link one</li>
              <li className='flex-initial p-2 text-center'>header link two</li>
              <li className='flex-initial p-2 text-center'>header link three</li>
            </ul>
          </div>
        </div>
      </nav>
      <div className='main-hero-container flex flex-row w-full'>
        <div className='hero-text-container flex flex-1 justify-center w-1/2'>
          <div className='hero-text m-10 p-5 w-1/2'>
            <h1 className='text-white text-5xl font-extrabold leading-normal'>This website is awesome</h1>
            <p className='text-off-white text-lg mb-2'>
              This website has some subtext that goes here under the main title. It's a smaller font and the color is lower contrast.
            </p>
            <button type='button' className='bg-light-blue text-white rounded-md py-1 px-8'>Sign up</button>
          </div>
        </div>
        <div className='hero-image-container flex flex-1 justify-start items-center w-1/2'>
          <div className='hero-image flex justify-center items-center h-3/4 w-3/4 bg-off-white'>
            <p>this is a placeholder for an image</p>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header