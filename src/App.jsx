import iconSedans from "./assets/icon-sedans.svg"
import iconSuvs from "./assets/icon-suvs.svg"
import iconLuxury from "./assets/icon-luxury.svg"

export default function App() {
  return (
    <main className=" min-h-svh bg-offwhitebg py-20 px-6">
      <section>
        <div className="bg-orange p-12 rounded-t-lg">
          <img src={iconSedans} alt="icones dos carros sedans" className="mb-7"/>
        <h2 className="font-shoulders mb-7 uppercase text-4xl font-bold text-offwhitebg" >Sedans</h2>
        <p className="font-lexend mb-7 text-offwhite">Texto texto texto pipipipopopo de não sei oque não sei oque lá, de pontinho vermelho aqui de pontinho vermleho cá, que fulano falou pra cicrano que não sei oque de pipipipopopo</p>
        <a className="font-lexend bg-offwhitebg block px-10 py-3 w-fit rounded-3xl text-orange" href="https://www.webmotors.com.br/comprar/mercedes-benz/c-250/20-cgi-gasolina-avantgarde-9g-tronic/4-portas/2017/48158297?pos=a48158297g:&np=1" target="_blank">Ver Mais</a>
        </div>

        <div className="bg-green p-12">
          <img src={iconSuvs} alt="icone de carros Suvs" className="mb-7" />
          <h2 className="font-shoulders mb-7 uppercase text-4xl font-bold text-offwhitebg">SUVs</h2>
          <p className="font-lexend mb-7 text-offwhite"> texto de cá texto de lá</p>
          <a className="font-lexend bg-offwhitebg block px-10 py-3 w-fit rounded-3xl text-green" href="https://www.webmotors.com.br/comprar/bmw/x1/20-16v-turbo-activeflex-sdrive20i-4p-automatico/4-portas/2016/51138343?pos=a51138343g:&np=1" target="_blank">Ver Mais</a>
        </div>

        <div className="bg-dark-green p-12 rounded-b-lg">
          <img src={iconLuxury} alt="icone dos carros de luxo" className="mb-7"/>
          <h2 className="font-shoulders mb-7 uppercase text-4xl font-bold text-offwhitebg">Luxuosos</h2>
          <p className="font-lexend mb-7 text-offwhite">carrinhos de luxo vrum vrum</p>
          <a className="font-lexend bg-offwhitebg block px-10 py-3 w-fit rounded-3xl text-dark-green" href="https://www.webmotors.com.br/comprar/bmw/m3/30-i6-twinturbo-gasolina-competition-m-steptronic/4-portas/2022-2023/51086892?pos=a51086892g:&np=2&ct=1840169" target="_blank">Ver Mais</a>
        </div>

      </section>
    </main>
  )
}