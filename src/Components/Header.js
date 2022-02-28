import React from 'react'

const Header = () => {


  return (
    <header className='bg-dark-blue'>
      <nav className='flex flex-row text-white text-2xl'>
        <div>
          Header Logo
        </div>
        <div>
          <ul className='flex flex-row'>
            <li>header link one</li>
            <li>header link two</li>
            <li>header link three</li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Header