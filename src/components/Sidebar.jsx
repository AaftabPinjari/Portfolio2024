import { FaGithub } from "react-icons/fa";
const Sidebar = () => {
    return (
        <div className="h-[120vh] w-1/8 sticky top-0  bg-[#080808]">

            <nav className="flex flex-col items-center py-2 gap-20">
                <a href="#home"><h1 className="text-4xl font-bold bg-[#232323] rounded-xl px-2 py-1">A<span className="text-[#ff004f]">.</span></h1></a>
                <ul className="flex flex-col text-2xl font-bold">
                    <a href="#about"><li className="rotate-90 mb-20">About</li></a>
                    <a href="#projects"><li className="rotate-90 mb-28">Projects</li></a>
                    <a href="#contact"><li className="rotate-90 mb-5">Contact</li></a>
                </ul>
                <a
                    target="_blank"
                    href="https://github.com/AaftabPinjari">
                    <FaGithub
                        size={30}
                    />
                </a>
            </nav>

        </div>
    )
}

export default Sidebar