
const About = () => {
    return (
        <div id="about" className='text-start flex py-5 flex-col gap-4 items-center min-h-screen'>
            <h1 className="text-4xl font-bold">About<span className="text-[#ff004f] ">.</span></h1>
            <div className="border-b-[1px] border-white w-full"></div>
            <p className="px-4 md:px-10 lg:px-24 font-semibold text-md">
                Hey there! I'm a passionate web developer with a versatile skill set, specializing  in front-end development.
                I  am constantly refining my abilities while seeking opportunities for growth in this domain.
            </p>
            <p className="px-4 md:px-10 lg:px-24 font-semibold text-md">
                Currently, I am actively seeking opportunities that encompass front-end development. If you're interested, I'd be thrilled to connect and discuss potential collaborations.
                I am currently working on several projects that emphasize specific tech stacks and frameworks, allowing me to further enhance my expertise.
            </p>
            <p className="px-4 md:px-10 lg:px-24 font-semibold text-md">
                In my personal life, I enjoy collecting various figures, spending time watching Tv shows, and working out.
            </p>
            <p className="px-4 md:px-10 lg:px-24 font-semibold text-md">
                Feel free to <a href="#contact"><span className="text-[#ff004f]">reach out</span></a> if you would like to explore the potential of working together!
            </p>
            <h1 className="px-2 text-3xl font-bold mt-5">Languages<span className="text-[#ff004f]"> / </span>Frameworks</h1>
            <ul className="flex flex-wrap gap-3 mx-4">
                <li className="px-2 py-1 bg-[#232323] rounded-lg font-semibold">HTML</li>
                <li className="px-2 py-1 bg-[#232323] rounded-lg font-semibold">CSS</li>
                <li className="px-2 py-1 bg-[#232323] rounded-lg font-semibold">JavaScript</li>
                <li className="px-2 py-1 bg-[#232323] rounded-lg font-semibold">Python</li>
                <li className="px-2 py-1 bg-[#232323] rounded-lg font-semibold">ReactJs</li>
                <li className="px-2 py-1 bg-[#232323] rounded-lg font-semibold">NextJS</li>
                <li className="px-2 py-1 bg-[#232323] rounded-lg font-semibold">TailwindCSS</li>
                <li className="px-2 py-1 bg-[#232323] rounded-lg font-semibold">Redux</li>
                <li className="px-2 py-1 bg-[#232323] rounded-lg font-semibold">Redux-Toolkit(RTK)</li>
                <li className="px-2 py-1 bg-[#232323] rounded-lg font-semibold">Github/Git</li>
            </ul>
            <h1 className="text-3xl font-bold">Learning<span className="text-[#ff004f]"> . . .</span></h1>
            <ul className="flex flex-wrap gap-3 mx-4">
                <li className="px-2 py-1 bg-[#232323] rounded-lg font-semibold">NodeJs</li>
                <li className="px-2 py-1 bg-[#232323] rounded-lg font-semibold">MongoDB</li>
                <li className="px-2 py-1 bg-[#232323] rounded-lg font-semibold">Express</li>

            </ul>
        </div>
    )
}

export default About