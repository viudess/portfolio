import { useState } from "react";
import Viudes from "../images/Viudes.png";
import linkedin from "../images/linkedin.png";
import github from "../images/github.png";
import gmail from "../images/gmail.png";
import youtube from "../images/youtube.png";

export default function AboutMe() {
  const [copied, setCopied] = useState(false);
  const email = "duduzinhochorro@gmail.com"; 

  const handleCopy = () => {
    navigator.clipboard.writeText(email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <>
      <main className="flex justify-center pt-3 md:pt-7 pb-5 md:pb-7">
        <div className="w-[95%] h-auto bg-[#404040] rounded-[20px] flex justify-center">
          <div className="py-5 px-7 flex flex-col-reverse md:flex-row items-center md:items-stretch">
            <div className="text-white flex flex-col items-center justify-between md:items-baseline">
              <div>
                <h1 className="text-[26px] md:text-4xl text-center md:text-start">
                  Eduardo Viudes Chorro
                </h1>
                <h2 className="text-[20px] md:text-2xl font-light text-center md:text-start pb-4 md:pb-0">
                  Estudante de TI | Engenharia de Software
                </h2>
              </div>
              <h3 className="hidden md:block text-xl font-semibold w-[85%] pb-6 italic">
                “Olá! Sou Eduardo, estudante de Engenharia de Software e
                apaixonado por tecnologia. Meu objetivo é criar projetos
                incríveis, sempre buscando aprendizado contínuo e aprimoramento
                técnico.”
              </h3>
              <div className="flex flex-row w-full justify-between md:justify-stretch">
                <a href="https://www.linkedin.com/in/eduardoviudes">
                  <img
                    className="w-[50px] md:w-[70px] md:pr-4"
                    src={linkedin}
                    alt="Linkedin"
                  />
                </a>

                <a href="https://github.com/viudess">
                  <img
                    className="w-[50px] md:w-[70px] md:pr-4"
                    src={github}
                    alt="Github"
                  />
                </a>

                <button onClick={handleCopy} className="relative cursor-pointer">
                  <img
                    className="w-[50px] md:w-[70px] md:pr-4"
                    src={gmail}
                    alt="Gmail"
                  />
                  {copied && (
                    <span className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded">
                      Copiado!
                    </span>
                  )}
                </button>

                <a href="https://youtu.be/YddGk2Fr9iM?si=xlj_iq21Grcz3mD5">
                  <img
                    className="w-[50px] md:w-[70px] md:pr-4"
                    src={youtube}
                    alt="Youtube"
                  />
                </a>
              </div>
            </div>
            <div className="flex items-center w-[65%] md:w-[100%] lg:w-[65%] pb-4 md:pb-0 md:pr-15">
              <img src={Viudes} alt="Eduardo Viudes Chorro" />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
