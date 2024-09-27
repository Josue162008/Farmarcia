import React from 'react'

function Header() {
  return (
    <nav className='header'>
      <img src="/img/farmarcia.PNG.png" id='logo-nav' />
      <button id='sobre-nos'>Sobre nós</button>
      <button>Ofertas</button>
      <button>Cadastro / Login</button>
    </nav>
  )
}

export default Header