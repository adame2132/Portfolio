import {
    SiJavascript,
    SiTypescript,
    SiSwift,
    SiKotlin,
    SiCplusplus,
    SiDotnet,
    SiPhp,
    SiPython,
    SiReact,
    SiVuedotjs,
    SiNodedotjs,
    SiExpress,
    SiMongodb,
    SiPostgresql,
    SiMysql,
} from 'react-icons/si';
import { TbBinaryTree } from 'react-icons/tb';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquare } from '@fortawesome/free-solid-svg-icons';


function Toolkit() {
    const frontend = [
        { name: 'React', icon: <SiReact className="text-cyan-400 text-4xl" />, color: 'bg-cyan-50' },
        { name: 'Vue', icon: <SiVuedotjs className="text-green-500 text-4xl" />, color: 'bg-green-50' },
    ]
    const backend = [
        { name: 'Node.js', icon: <SiNodedotjs className="text-green-600 text-4xl" />, color: 'bg-green-50' },
        { name: 'Express', icon: <SiExpress className="text-gray-700 text-4xl" />, color: 'bg-gray-100' },
    ]
    const databases = [
        { name: 'MongoDB', icon: <SiMongodb className="text-green-600 text-4xl" />, color: 'bg-green-50' },
        { name: 'PostgreSQL', icon: <SiPostgresql className="text-blue-500 text-4xl" />, color: 'bg-blue-50' },
        { name: 'SQL', icon: <SiMysql className="text-orange-500 text-4xl" />, color: 'bg-orange-50' },
    ]
    const languages = [
        { name: 'JavaScript', icon: <SiJavascript className="text-yellow-400 text-4xl" />, color: 'bg-yellow-50' },
        { name: 'TypeScript', icon: <SiTypescript className="text-blue-600 text-4xl" />, color: 'bg-blue-50' },
        { name: 'Swift', icon: <SiSwift className="text-orange-500 text-4xl" />, color: 'bg-orange-50' },
        { name: 'Kotlin', icon: <SiKotlin className="text-purple-500 text-4xl" />, color: 'bg-purple-50' },
        { name: 'C++', icon: <SiCplusplus className="text-blue-500 text-4xl" />, color: 'bg-blue-50' },
        { name: 'C#', icon: <SiDotnet className="text-indigo-600 text-4xl" />, color: 'bg-indigo-50' },
        { name: 'PHP', icon: <SiPhp className="text-indigo-400 text-4xl" />, color: 'bg-indigo-50' },
        { name: 'Python', icon: <SiPython className="text-blue-500 text-4xl" />, color: 'bg-blue-50' },
        { name: 'Assembly', icon: <TbBinaryTree className="text-gray-600 text-4xl" />, color: 'bg-gray-100' },
    ]
    const skills = [
        { name: "Full Stack Development" },
        { name: "UI/UX Design" },
        { name: "Agile Methodologies" },
        { name: "Version Control (Git)" },
        { name: "Problem Solving" },
        { name: "Communication" },
    ]
    return (
     <div className="flex">
        <div className="flex flex-col w-full px-12 py-16 gap-16 items-center">
            <div>
                <h1 className="text-3xl font-bold">Engineering</h1>
                <h2 className="text-xl font-semibold">Toolkit</h2>
            </div>
            <div className="flex flex-col gap-4">
                <h5 className="text-xl font-semibold">Frontend</h5>
                <div className="flex flex-wrap gap-4">
                    {frontend.map((item) => (
                        <div key={item.name} className={`flex flex-col items-center gap-2 p-4 rounded-xl ${item.color} w-24 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 cursor-default`}>
                            {item.icon}
                            <span className="text-xs font-medium text-gray-700 text-center">{item.name}</span>
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex flex-col gap-4">
                <h5 className="text-xl font-semibold">Backend</h5>
                <div className="flex flex-wrap gap-4">
                    {backend.map((item) => (
                        <div key={item.name} className={`flex flex-col items-center gap-2 p-4 rounded-xl ${item.color} w-24 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 cursor-default`}>
                            {item.icon}
                            <span className="text-xs font-medium text-gray-700 text-center">{item.name}</span>
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex flex-col gap-4">
                <h5 className="text-xl font-semibold">Databases</h5>
                <div className="flex flex-wrap gap-4">
                    {databases.map((item) => (
                        <div key={item.name} className={`flex flex-col items-center gap-2 p-4 rounded-xl ${item.color} w-24 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 cursor-default`}>
                            {item.icon}
                            <span className="text-xs font-medium text-gray-700 text-center">{item.name}</span>
                        </div>
                    ))}
                </div>
            </div>
            <div class="flex flex-col gap-4">
                <h5 className="text-xl font-semibold">Languages</h5>
                <div className="flex flex-wrap gap-4">
                    {languages.map((item) => (
                        <div key={item.name} className={`flex flex-col items-center gap-2 p-4 rounded-xl ${item.color} w-24 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 cursor-default`}>
                            {item.icon}
                            <span className="text-xs font-medium text-gray-700 text-center">{item.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        {/* skills */}
        <div className="flex flex-col w-full px-12 py-16 gap-4">
            <h5 className="text-xl font-semibold">Skills</h5>
            {skills.map((item) => (
                <div key={item.name} className="flex items-center gap-3">
                    <FontAwesomeIcon icon={faSquare} className="text-gray-900 text-sm" />
                    <span className="text-gray-700 font-medium">{item.name}</span>
                </div>
            ))}
        </div>
     </div>
)
}

export default Toolkit