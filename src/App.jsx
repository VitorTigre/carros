import iconSedans from "./assets/icon-sedans.svg"
import iconSuvs from "./assets/icon-suvs.svg"
import iconLuxury from "./assets/icon-luxury.svg"

export default function App() {
  return (
    <main>
      <section>
        <div className="bg-orange">
          <img src={iconSedans} alt="icones dos carros sedans" />
        <h2 className="font-shoulders">Sedans</h2>
        <p className="font-lexend">Texto texto texto pipipipopopo de não sei oque não sei oque lá, de pontinho vermelho aqui de pontinho vermleho cá, que fulano falou pra cicrano que não sei oque de pipipipopopo</p>
        <a className="font-lexend" href="https://www.webmotors.com.br/comprar/mercedes-benz/c-250/20-cgi-gasolina-avantgarde-9g-tronic/4-portas/2017/48158297?pos=a48158297g:&np=1" target="_blank">Ver Mais</a>
        </div>

        <div className="bg-green">
          <img src={iconSuvs} alt="icone de carros Suvs" />
          <h2 className="font-shoulder">SUVs</h2>
          <p className="font-lexend"> texto de cá texto de lá</p>
          <a className="font-lexend" href="https://www.webmotors.com.br/comprar/bmw/x1/20-16v-turbo-activeflex-sdrive20i-4p-automatico/4-portas/2016/51138343?pos=a51138343g:&np=1" target="_blank">Ver Mais</a>
        </div>

        <div className="bg-dark-green">
          <img src={iconLuxury} alt="icone dos carros de luxo" />
          <h2 className="font-shoulder">Luxuosos</h2>
          <p className="font-lexend">carrinhos de luxo vrum vrum</p>
          <a className="font-lexend" href="https://www.webmotors.com.br/comprar/bmw/m3/30-i6-twinturbo-gasolina-competition-m-steptronic/4-portas/2022-2023/51086892?pos=a51086892g:&np=2&ct=1840169" target="_blank">Ver Mais</a>
        </div>

      </section>
    </main>
  )
}