import React from 'react'

function Home() {
  return (
    <>
        <div className='vendas'>
          <div className='produtos'>
            <img src="/public/img/torsilax-30.webp" height={250} />
            <h1>Torsilax Neo química</h1>
            <p>R$15,30</p>
          </div>
          <div className='produtos'>
            <img src="/public/img/ibuprofeno.png" alt="" height={250} />
            <h1>Ibuprofeno</h1>
            <p>R$15,29</p>
          </div>
          <div className='produtos'>
            <img src="/public/img/dorflex.webp" alt="" height={250} />
            <h1>Dorflex</h1>
            <p>R$20,00</p>
          </div>
          <div className='produtos'>
            <img src="/public/img/dipirona.webp" alt="" height={250} />
            <h1>Dipirona</h1>
            <p>R$13,00</p>
          </div>
        </div>
    </>
  )
}

export default Home