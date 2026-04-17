import { useState, useEffect, useRef } from 'react';
import test1 from '../assets/test1.jpg';
import test2 from '../assets/test2.jpg';
import test3 from '../assets/test3.jpg';
import test4 from '../assets/test4.jpg';

function Projects(){
    const [active, setActive] = useState(0);
    const [visible, setVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) setVisible(true); },
            { threshold: 0.15 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);
    


    const projects = [
        {
            name: "Project 1",
            catagory: "CRM System",
            description: "A web application that allows users to track their fitness goals and progress over time. Built with React for the frontend and Node.js/Express for the backend, with MongoDB as the database.",
            technologies: ["React", "Node.js", "Express", "MongoDB"],
            link: "https://example.com/project1",
            img: test1
        },
        {
            name: "Project 2",
            catagory: "E-commerce Platform",
            description: "An e-commerce platform that allows users to browse and purchase products online. Built with React for the frontend and Node.js/Express for the backend, with MongoDB as the database.",
            technologies: ["React", "Node.js", "Express", "MongoDB"],
            link: "https://example.com/project2",
            img: test2
        },
        {
            name: "Project 3",
            catagory: "Social Media App",
            description: "A social media app that allows users to connect with friends and share updates. Built with React for the frontend and Node.js/Express for the backend, with MongoDB as the database.",
            technologies: ["React", "Node.js", "Express", "MongoDB"],
            link: "https://example.com/project3",
            img: test3
        },
        {
            name: "Project 4",
            catagory: "Task Management Tool",
            description: "A task management tool that helps users organize and prioritize their work. Built with React for the frontend and Node.js/Express for the backend, with MongoDB as the database.",
            technologies: ["React", "Node.js", "Express", "MongoDB"],
            link: "https://example.com/project4",
            img: test4
        }
    ];

    const getCardStyle = (index) => {
        const offset = index - active;
        const absOffset = Math.abs(offset);
        const direction = offset < 0 ? -1 : 1;

        if (absOffset === 0) {
            return {
                transform: 'translateX(0px) scale(1.08)',
                zIndex: 40,
                opacity: 1,
                filter: 'none',
            };
        }
        if (absOffset === 1) {
            return {
                transform: `translateX(${direction * 140}px) scale(0.88) rotate(${direction * 4}deg)`,
                zIndex: 30,
                opacity: 0.75,
                filter: 'brightness(0.7)',
            };
        }
        return {
            transform: `translateX(${direction * 220}px) scale(0.72) rotate(${direction * 8}deg)`,
            zIndex: 20,
            opacity: 0.5,
            filter: 'brightness(0.5)',
        };
    };

    return (
        <div className="flex flex-col w-full px-12 py-16 gap-16 items-center">
            <div className="flex w-full h-screen items-center">
                    {/* About Me */}
                <div className="flex flex-col gap-4 w-1/2">
                    <h1 className="text-4xl font-bold">About Me</h1>
                    <p className="text-gray-600 leading-relaxed">
                        I'm a full-stack developer focused on turning ideas into scalable, real-world applications. I enjoy building clean, efficient systems from the ground up—taking projects from initial concept all the way to production. My work centers around creating responsive, user-focused experiences backed by reliable and well-structured APIs.
                    </p>
                </div>

                {/* Carousel */}
                <div className="flex flex-col items-center gap-6 w-1/2">
                    <div className="relative flex items-center justify-center w-full h-80">
                        {projects.map((project, index) => (
                            <div
                                key={index}
                                onClick={() => setActive(index)}
                                className="absolute w-64 h-72 rounded-2xl overflow-hidden shadow-2xl cursor-pointer"
                                style={{
                                    ...getCardStyle(index),
                                    transition: 'transform 0.4s cubic-bezier(0.25,0.8,0.25,1), opacity 0.4s, filter 0.4s',
                                }}
                            >
                                <img src={project.img} alt={project.name} className="w-full h-full object-cover" />
                            </div>
                        ))}
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-semibold">{projects[active].name}</h3>

                    {/* Dot indicators */}
                    <div className="flex gap-3">
                        {projects.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setActive(index)}
                                className={`h-2.5 rounded-full transition-all duration-300 ${
                                    index === active ? 'bg-gray-900 w-6' : 'bg-gray-300 w-2.5'
                                }`}
                            />
                        ))}
                    </div>
                </div>

            </div>


            {/* Recent Projects */}
            <div ref={sectionRef} className="flex flex-col w-full px-12 pb-16 gap-8">
                <h2 className="text-3xl font-bold">Recent Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="flex flex-col rounded-2xl overflow-hidden shadow-lg bg-white group hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02] transition-all duration-500 ease-[cubic-bezier(0.25,0.8,0.25,1)] cursor-pointer"
                            style={{
                                opacity: visible ? 1 : 0,
                                transform: visible ? 'translateY(0)' : 'translateY(60px)',
                                transition: `opacity 0.5s ease ${index * 0.15}s, transform 0.5s ease ${index * 0.15}s`,
                            }}
                        >
                            <img src={project.img} alt={project.name} className="w-full h-48 object-cover transition-transform duration-700 ease-[cubic-bezier(0.25,0.8,0.25,1)] group-hover:scale-105" />
                            <div className="flex flex-col gap-2 p-5">
                                <p className="text-xs uppercase tracking-widest text-gray-400">{project.catagory}</p>
                                <h3 className="text-lg font-bold group-hover:text-gray-500 transition-colors duration-500 ease-[cubic-bezier(0.25,0.8,0.25,1)]">{project.name}</h3>
                                <p className="text-gray-500 text-sm leading-relaxed">{project.description}</p>
                                <div className="flex flex-wrap gap-2 mt-2">
                                    {project.technologies.map((tech) => (
                                        <span key={tech} className="px-2 py-0.5 bg-gray-100 text-gray-600 text-xs rounded-full">{tech}</span>
                                    ))}
                                </div>
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="mt-3 self-start px-4 py-1.5 bg-gray-900 text-white rounded-full text-xs font-medium hover:bg-gray-700 transition-colors duration-200"
                                >
                                    View Project →
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
}

export default Projects;
