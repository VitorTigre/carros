import iconSedans from "../assets/icon-sedans.svg"

export default function Sedans() {
  return (
    <section className="bg-orange p-12 max-lg:rounded-t-lg lg:rounded-l-lg">
        <img src={iconSedans} alt="icones dos carros sedans" className="mb-7"/>
        <h2 className="font-shoulders mb-7 uppercase text-4xl font-bold text-offwhitebg " >Sedans</h2>
        <p className="font-lexend mb-7 text-offwhite lg:mb-20 ">Texto texto texto pipipipopopo de não sei oque não sei oque lá, de pontinho vermelho aqui de pontinho vermleho cá, que fulano falou pra cicrano que não sei oque de pipipipopopo</p>
        <a className="font-lexend bg-offwhitebg block px-10 py-3 w-fit rounded-3xl text-orange border-2 border-offwhitebg hover:bg-orange hover:text-offwhitebg" href="https://www.webmotors.com.br/comprar/mercedes-benz/c-250/20-cgi-gasolina-avantgarde-9g-tronic/4-portas/2017/48158297?pos=a48158297g:&np=1" target="_blank">Ver Mais</a>
    </section>
  )
}
