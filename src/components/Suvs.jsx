import iconSuvs from "../assets/icon-suvs.svg"


export default function Suvs() {
  return (
        <div className="bg-green p-12">
            <img src={iconSuvs} alt="icone de carros Suvs" className="mb-7" />
            <h2 className="font-shoulders mb-7 uppercase text-4xl font-bold text-offwhitebg">SUVs</h2>
            <p className="font-lexend mb-7 text-offwhite lg:mb-20"> texto de cá texto de lá adicionando mais texto pra encher linguiça porque o mÁrcio esqueceu de colocar os textos pra copiar e colar</p>
            <a className="font-lexend bg-offwhitebg block px-10 py-3 w-fit rounded-3xl text-green border-2 border-offwhitebg hover:bg-green hover:text-offwhitebg" href="https://www.webmotors.com.br/comprar/bmw/x1/20-16v-turbo-activeflex-sdrive20i-4p-automatico/4-portas/2016/51138343?pos=a51138343g:&np=1" target="_blank">Ver Mais</a>
        </div>
    )
}
