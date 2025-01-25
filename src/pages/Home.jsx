import AboutMe from "../components/AboutMe";
import Footer from "../components/Footer";
import Languages from "../components/Languages";
import Projects from "../components/Projects";

export default function Home() {
    return(
        <>
        <body>
            <AboutMe />
            <div className="flex flex-row justify-between px-[2.5%]">
                <Languages />
                <Projects />
            </div>
            <Footer />
        </body>
        </>
    )
}