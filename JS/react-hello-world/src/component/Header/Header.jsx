import React from 'react'

const Header = state => {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <span className="navbar-brand mb-0 h1">Warung</span>
        <div>
          <span>Trolley : </span>
          <span className='count'>{state.order}</span>
        </div>
      </div>
    </nav>
  )
}

export default Header