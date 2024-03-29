import iconLuxury from "../assets/icon-luxury.svg"

export default function Luxuosos() {
  return (
        <section className="bg-dark-green p-12 max-lg:rounded-b-lg lg:rounded-r-lg">
          <img src={iconLuxury} alt="icone dos carros de luxo" className="mb-7"/>
          <h2 className="font-shoulders mb-7 uppercase text-4xl font-bold text-offwhitebg">Luxuosos</h2>
          <p className="font-lexend mb-7 text-offwhite lg:mb-20">carrinhos de luxo vrum vrum, eee Márcio esqueceu de colocar os textos pra gente copiar e colar, agora tem que ficar escrevendo a mão é sacanagem em</p>
          <a className="font-lexend bg-offwhitebg block px-10 py-3 w-fit rounded-3xl text-dark-green border-2 border-offwhitebg hover:bg-dark-green hover:text-offwhitebg" href="https://www.webmotors.com.br/comprar/bmw/m3/30-i6-twinturbo-gasolina-competition-m-steptronic/4-portas/2022-2023/51086892?pos=a51086892g:&np=2&ct=1840169" target="_blank">Ver Mais</a>
        </section>
    )
}
