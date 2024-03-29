import { MdEmail } from "react-icons/md";

const Contact = () => {
    return (
        <div
            id="contact"
            className="h-screen px-10 lg:px-24 flex flex-col items-center justify-center gap-5 text-center">
            <h1 className="text-4xl font-bold">Contact Me<span className="text-[#ff004f] ">!</span></h1>
            <p>
                Hey, send me an email if you want to connect! Additionally, you can find me on
                <a
                    target="_blank"
                    href="https://www.linkedin.com/in/aaftab-pinjari-2aba4b168/"><span className="text-[#ff004f]"> LinkedIn </span></a> , shoot a message if you have to!
            </p>
            <p className="flex gap-3 items-center">
                <MdEmail size={24} fill="#ff004f" />
                <a
                    target="_blank"
                    href="mailto:aaftab.pinjari@gmail.com"
                >aaftab.pinjari<span className="text-[#ff004f]">@gmail.com</span></a></p>
        </div>
    )
}

export default Contact