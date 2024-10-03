import React from 'react';

function Home() {
  return (
    <>
      <div className='vendas'>
        <div className='produtos'>
          <div className='produto-imagem'>
            <img src="/public/img/torsilax-30.webp" height={180} alt="Torsilax Neo química" />
          </div>
          <h1>Torsilax Neo química</h1>
          <div>
            <h2>R$13,77</h2>
            <h3><s>R$15,30</s></h3>
            <h1>10% OFF</h1>
          </div>
          <button id='#comprar'>Comprar</button>
        </div>

        <div className='produtos'>
          <div className='produto-imagem'>
            <img src="/public/img/ibuprofeno.png" height={180} alt="Ibuprofeno" />
          </div>
          <h1>Ibuprofeno</h1>
          <div>
            <h2>R$13,76</h2>
            <h3><s>R$15,29</s></h3>
            <h1>10% OFF</h1>
          </div>
          <button>Comprar</button>
        </div>

        <div className='produtos'>
          <div className='produto-imagem'>
            <img src="/public/img/dorflex.webp" height={180} alt="Dorflex" />
          </div>
          <h1>Dorflex</h1>
          <div>
            <h2>R$10,80</h2>
            <h3><s>R$12,00</s></h3>
            <h1>10% OFF</h1>
          </div>
          <button id='#comprar'>Comprar</button>
        </div>

        <div className='produtos'>
          <div className='produto-imagem'>
            <img src="/public/img/dipirona.webp" height={180} alt="Dipirona" />
          </div>
          <h1>Dipirona</h1>
          <div>
            <h2>R$11,70</h2>
            <h3><s>R$13,00</s></h3>
            <h1>10% OFF</h1>
          </div>
          <button id='#comprar'>Comprar</button>
        </div>

        <div className='produtos'>
          <div className='produto-imagem'>
            <img src="/public/img/whey-protein.png" height={180} alt="Whey Protein" />
          </div>
          <h1>Whey Protein</h1>
          <div>
            <h2>R$31,50</h2>
            <h3><s>R$35,00</s></h3>
            <h1>10% OFF</h1>
          </div>
          <button id='#comprar'>Comprar</button>
        </div>

        <div className='produtos'>
          <div className='produto-imagem'>
            <img src="/public/img/sosseg.png" height={180} alt="sosseg" />
          </div>
          <h1>Sosseg</h1>
          <div>
            <h2>R$9,00</h2>
            <h3><s>R$10,00</s></h3>
            <h1>10%OFF</h1>
          </div>
          <button id='#comprar'>Comprar</button>
        </div>
      </div>
    </>
  );
}

export default Home;