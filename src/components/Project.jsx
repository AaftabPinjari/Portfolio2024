
function Project({ project }) {
    return (
        <div className="bg-[#232323]  gap-3 rounded-lg flex flex-col items-center justify-between  p-2">
            <img className="h-[250px] w-[450px] hover:scale-95 hover:transition-transform  rounded-lg" alt={project.alt} src={project.src} />
            <h1 className="text-xl font-bold">{project.title}</h1>
            <div className="text-sm flex flex-wrap gap-3  text-[#ff004f]">
                {project.tech.map((ele, idx) => (
                    <h3 key={idx}>{ele}</h3>
                ))}
            </div>
            <p className="text-center text-md font-semibold">{project.description}</p>
            <div className="flex w-full items-center justify-evenly">
                <a target="_blank" href={project.code}><button className="bg-[#111] text-white px-8 py-1 font-semibold text-lg rounded-md">Code</button></a>
                <a target="_blank" href={project.live}><button className="bg-[#ff004f] text-black px-8 py-1 font-bold text-lg rounded-md">Live</button></a>
            </div>
        </div>
    )
}

export default Project