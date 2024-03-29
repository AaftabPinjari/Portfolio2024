/* eslint-disable react/no-unescaped-entities */

const Home = () => {
    return (
        <div
            id="home"
            className='px-4 md:px-10 lg:px-24 gap-4 text-center flex flex-col items-center  justify-center min-h-screen'>
            <h1 className="font-bold text-3xl font-serif">Hey, I'm Aaftab</h1>
            <h2 className="text-xl font-bold text-[#ff004f]">I am a ReactJs Developer.</h2>
            <p className="text-lg font-semibold">
                I'm currently a  Front-End Developer seeking many ways to improve my skills through problem-solving and creating various projects!
                Scroll down to learn more about me.</p>
            <a href="#contact"><button className="bg-[#ff004f] text-black border-[#101101] font-bold rounded-lg px-4 py-2">Contact Me!</button></a>
        </div>
    )
}

export default Home