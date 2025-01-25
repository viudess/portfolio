import Viudes from "../images/Viudes.png"
import linkedin from "../images/linkedin.png"
import github from "../images/github.png"
import gmail from "../images/gmail.png"
import youtube from "../images/youtube.png"

export default function AboutMe() {
    return(
        <>  
            <main className="flex justify-center pt-7 pb-10">
                <div className="w-[95%] h-[350px] bg-[#404040] rounded-[20px] flex justify-center">
                    <div className="py-5 px-7 flex flex-row">
                        <div className="text-white flex flex-col justify-between">
                            <div>
                                <h1 className="text-4xl">Eduardo Viudes Chorro</h1>
                                <h2 className="text-2xl font-light">Estudante de TI | Engenharia de Sofware </h2>
                            </div>
                            <h3 className="text-xl font-semibold w-[85%] pb-6 italic">“Olá! Sou Eduardo, estudante de Engenharia de Software e apaixonado por tecnologia. Meu objetivo é criar projetos incríveis, sempre buscando aprendizado contínuo e aprimoramento técnico.”</h3>
                            <div className="flex flex-row">
                                <a href="https://www.linkedin.com/in/eduardoviudes"><img className="w-[70px] pr-4" src={linkedin} alt="Linkedin" /></a>

                                <a href="https://github.com/viudess"><img className="w-[70px] pr-4" src={github} alt="Github" /></a>

                                <a href=""><img className="w-[70px] pr-4" src={gmail} alt="Gmail" /></a>

                                <a href="https://youtu.be/YddGk2Fr9iM?si=xlj_iq21Grcz3mD5"><img className="w-[70px] pr-4" src={youtube} alt="Youtube" /></a>
                            </div>
                        </div>
                        <div className="flex items-center w-[65%] pr-15">
                            <img src={Viudes} alt="Eduardo Viudes Chorro" />
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}