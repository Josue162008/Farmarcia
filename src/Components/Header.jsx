import React from 'react'

function Header() {
  return (
    <nav className='header'>
      <img src="/img/farmarcia.PNG.png" height={120} />
      <button id='sobre-nos'>Sobre nós</button>
      <button>Ofertas</button>
      <button>Cadastro / Login</button>
      <form action=''>
      <input type="text" placeholder='Pesquisar produto...' /><input type="submit" />
      </form>
    </nav>
  )
}

export default Header