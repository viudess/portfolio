import css from "../images/css.png"
import js from "../images/javascript.png"
import ts from "../images/typescript.png"
import react from "../images/react.png"
import angular from "../images/angular.png"
import tailwind from "../images/tailwind.png"
import bootstrap from "../images/bootstrap.png"
import foxsite from "../images/fox-site.png"
import foxapp from "../images/fox-app.png"
import psy from "../images/psymosaic.png"
import otbm from "../images/otbm.png"
import jogo from "../images/jogo.png"

function cards(site, title, phrase, project, code, pic1, pic2){
    return(
        <>
            <div className="bg-[#404040] min-h-[250px] w-full rounded-2xl flex flex-col md:flex-row items-center md:items-stretch mb-5">
                <div className="bg-black w-full md:w-[35%] rounded-t-xl md:rounded-e-none md:rounded-s-xl flex items-center justify-center">
                    <img className="max-h-[350px] rounded-t-xl md:rounded-none" src={site} alt="" />
                </div>
                <div className="w-full md:w-[60%] text-white md:pl-6 py-5 flex flex-col justify-between">
                    <div className="flex flex-col justify-center items-center md:items-stretch">
                        <h1 className="font-semibold md:font-normal text-3xl md:text-4xl text-center md:text-start">{title}</h1>
                        <div className="block md:hidden">
                            <div className="flex flex-row pt-4">
                                <img className="w-12 h-12 mr-3" src={pic1} alt="" />
                                <img className="w-12 h-12" src={pic2} alt="" />
                            </div>
                        </div>
                        <h3 className="text-start text-[18px] md:text-xl w-[90%] md:w-[100%] pt-4 pb-4 md:pb-6">{phrase}</h3>
                    </div>
                    <div className="flex flex-col-reverse md:flex-row items-center justify-between">
                        <div className="flex flex-row  md:pr-2">
                            <a href={project}><h2 className="text-xl mr-3 bg-[#525252] text-center p-2 px-4 rounded-4xl font-semibold">Ver projeto</h2></a>
                            <a href={code}><h2 className="text-xl bg-[#2868C9] text-center p-2 px-4 rounded-4xl font-semibold">&lt;Ver código/&gt;</h2></a>
                        </div>
                        <div className="hidden md:block">
                            <div className="md:flex md:flex-row">
                                <img className="w-12 h-12 mr-3" src={pic1} alt="" />
                                <img className="w-12 h-12" src={pic2} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default function Projects() {

    const time = [
        {
            site: foxapp, 
            title: 'Foxpectrum (Mobile)', 
            phrase: 'A foxpectrum é um projeto desenvolvido para impactar de forma positiva o cotidiano de pessoas neurodivergentes e de seus familiares. O aplicativo consiste em um organizador de rotina familiar com funções pensadas para dar maior apoio e aumentar a eficiência da rotina e do acompanhamento de pessoas neurodivergentes. (Use no celular)', 
            project: 'https://fox-app-beta.vercel.app/', 
            code: 'https://github.com/viudess/fox-app.git', 
            pic1: angular, 
            pic2: ts
        },
        {
            site: foxsite, 
            title: 'Landing page da Foxpectrum', 
            phrase: 'A landing page da Foxpectrum, combina design moderno e navegação intuitiva para apresentar a proposta inovadora da startup Rapoitech. Responsiva e funcional, destaca os benefícios do produto, com call-to-actions estratégicos que incentivam a interação e conversões.', 
            project: 'https://viudess.github.io/fox-site/', 
            code: 'https://github.com/viudess/fox-site.git', 
            pic1: react, 
            pic2: tailwind
        },
        {
            site: psy, 
            title: 'Psymosaic', 
            phrase: 'A Psymosaic for criada para promover o autoconhecimento e facilitar o acesso a serviços psicológicos, o projeto combina tecnologia avançada com uma abordagem centrada no usuário, oferecendo conteúdos personalizados, ferramentas de autoajuda e suporte para profissionais e pacientes.', 
            project: 'https://viudess.github.io/psymosaic/', 
            code: 'https://github.com/viudess/psymosaic.git', 
            pic1: js, 
            pic2: bootstrap
        },
        {
            site: otbm, 
            title: 'Only the best movies', 
            phrase: 'Este site feito para escolher os melhores filmes desde os atuais até os grandes clássicos, conta com a integração a API da "The Movie Database" (TMDB), onde é possível pesquisar e ver as avaliações e outras informações sobre os filmes. (Aperte no ícone da casinha)', 
            project: 'https://viudess.github.io/cinema-app/', 
            code: 'https://github.com/viudess/cinema-app.git', 
            pic1: react, 
            pic2: tailwind
        },
        {
            site: jogo, 
            title: 'Jogo do número secreto', 
            phrase: 'O Jogo do Número Secreto é um desafio de programação proposto pela Alura que testa habilidades de lógica e interatividade. Nele, o objetivo é implementar um sistema onde o jogador tenta adivinhar um número aleatório gerado pelo programa dentro de um intervalo pré-definido.', 
            project: 'https://jogo-beta-neon.vercel.app/', 
            code: 'https://github.com/viudess/jogo-numero-secreto.git', 
            pic1: css, 
            pic2: js
        },
    ]

    return(
        <>
        <main className="w-[100%] lg:w-[77%] pt-6 lg:pt-0 lg:pl-5">
            <div>
                {time.map(project =>
                    cards(project.site, project.title, project.phrase, project.project, project.code, project.pic1, project.pic2)
                )}
            </div>
        </main>
        </>
    )
}