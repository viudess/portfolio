import html from "../images/html.png"
import css from "../images/css.png"
import js from "../images/javascript.png"
import ts from "../images/typescript.png"
import react from "../images/react.png"
import angular from "../images/angular.png"
import node from "../images/nodejs.png"
import tailwind from "../images/tailwind.png"
import figma from "../images/figma.png"
import bootstrap from "../images/bootstrap.png"

function cards(image, alt) {
    return (
        <>
            <img className="m-6 w-[75px]" src={image} alt={alt} />
        </>
    )
}

export default function Languages() {

    const time = [
        {
            image: html,
            alt: "html"
        },
        {
            image: css,
            alt: "css"
        },
        {
            image: js,
            alt: "js"
        },
        {
            image: ts,
            alt: "ts"
        },
        {
            image: react,
            alt: "react"
        },
        {
            image: angular,
            alt: "angular"
        },
        {
            image: node,
            alt: "nodejs"
        },
        {
            image: tailwind,
            alt: "tailwind"
        },
        {
            image: figma,
            alt: "figma"
        },
        {
            image: bootstrap,
            alt: "bootstrap"
        }
    ]

    return(
        <>
            <aside className="bg-[#404040] h-180 w-[25%] flex justify-center rounded-2xl">
                <div className="grid grid-cols-2 my-4">
                    {time.map(language =>
                        cards(language.image, language.alt)
                    )}
                </div>
            </aside>
        </>
    )
}