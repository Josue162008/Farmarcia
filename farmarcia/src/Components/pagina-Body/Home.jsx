import React from 'react'

function Home() {
  return (
    <>
        <div className='vendas'>
          <div className='produtos'>
            <center><img src="/public/img/torsilax-30.webp" height={180} /></center>
            <h1>Torsilax Neo química</h1>
            <h2>R$15,30</h2>
          </div>
          <div className='produtos'>
            <center><img src="/public/img/ibuprofeno.png" height={180} /></center>
            <h1>Ibuprofeno</h1>
            <div>
              <h2>R$13,76</h2>
              <h3><s>R$15,29</s></h3>
              <h1>10% OFF</h1>
            </div>
          </div>
          <div className='produtos'>
            <center>
              <img src="/public/img/dorflex.webp" height={180} />
            </center>
            <h1>Dorflex</h1>
            <div>
              <h2>R$10,80</h2>
              <h3><s>R$12,00</s></h3>
              <p></p>
              <h1>10% OFF</h1>
            </div>
          </div>
          <div className='produtos'>
            <center>
              <img src="/public/img/dipirona.webp" height={180} />
            </center>
            <h1>Dipirona</h1>
            <div>
              <h2>R$13,00</h2>
              <h1>10% OFF</h1>
            </div>
          </div>
          <div className='produtos'>
            <center>
              <img src="/public/img/whey-protein.png" height={180} />
            </center>
            <h1>Whey Protein</h1>
            <div>
            <h2>R$35,00</h2>
            <h1>10% OFF</h1>
            </div>
          </div>
        </div>
    </>
  )
}

export default Home