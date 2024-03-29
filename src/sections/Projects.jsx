import { useState } from "react"
import { useEffect } from "react"
import Project from '../components/Project'


const projects = [
    {
        id: 1,
        title: "20 React Projects",
        src: "https://i.ibb.co/GsZp25k/20reactprojects.png",
        alt: "20reactprojects",
        tech: ["React", "TailwindCSS", "React-Router-DOM"],
        description: "20 React projects built to enhance my ReactJs skills as a Front End Developer.",
        live: "https://20-react-projects.netlify.app/",
        code: "https://github.com/AaftabPinjari/25ReactProjects"
    },
    {
        id: 2,
        title: "Easy Shop",
        src: "https://i.ibb.co/Vvdnz4p/easyShop.png",
        alt: "easyShop",
        tech: ["React", "TailwindCSS", "React-Router-DOM", "react-Redux", "Redux-Toolkit (RTK)"],
        description: "An E-commerce React Website built to enhance my skills on redux-toolkit and advanced state management in a react web App.",
        live: "https://easy-shop-app.netlify.app/",
        code: "https://github.com/AaftabPinjari/Easy-Shop"
    },
]
const Projects = () => {

    return (
        <div
            id="projects"
            className="min-h-screen py-5 gap-4 flex flex-col items-center"
        >
            <h1 className="text-4xl font-bold">My Projects<span className="text-[#ff004f] ">.</span></h1>
            <div className="border-b-[1px] border-white w-full"></div>

            {
                projects && projects.length > 0 ?
                    <div className="grid grid-cols-1 lg:grid-cols-2 mx-4 gap-4">
                        {projects.map((project) => (

                            <Project key={project.id} project={project} />

                        ))}
                    </div> : <h1>Loading Projects</h1>
            }


        </div>
    )
}

export default Projects


// const projects = [
//     {
//         id:1,
//         title: "Code Canvas",
//         img: "",
//         tech: ["React","Tailwind"],
//         desc:"",
//         live: "",
//         code: "",
//     },
// ]