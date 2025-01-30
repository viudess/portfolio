
import react from "../images/react.png"
import tailwind from "../images/tailwind.png"

export default function Footer() {
    return(
        <>
            <footer className="pt-10">
                <div className="bg-[#404040] h-[130px] flex flex-col justify-center items-center">
                    <h1 className="text-white text-xl font-bold">© 2025 Eduardo Viudes Chorro</h1>
                    <div className="flex flex-row pt-3">
                        <img className="w-12 h-12 mr-3" src={react} alt="" />
                        <img className="w-12 h-12" src={tailwind} alt="" />
                    </div>
                </div>
            </footer>
        </>
    )
}