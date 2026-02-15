const skills = [{
    category: "Frontend",
    items: ["React.js", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Framer Motion"]
},
{
    category: "State Management",
    items: ["Redux Toolkit", "Zustand", "React Query", "Context API"]
},
{
    category: "Backend & Database",
    items: ["Node.js", "Express.js", "MongoDB", "Firebase", "REST APIs", "GraphQL"]
},
{
    category: "Tools & Others",
    items:["Git", "Github", "Figma", "Postman", "Jest", "Vitest", "Vite"]
}
]

function Skills() {
    return(
        <section id="skills" className="px-10 py-24">
            <div className="text-center mb-16">
                <p className="text-blue-500 text-sm font-medium tracking-widest uppercase mb-4">
                    What I Know
                </p>
                <h2 className="text-white text-5xl font-bold">
                    My <span className="text-blue-500">Skills</span>
                </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-2-7xl mx-auto">
                {skills.map((skillGroup)=> (
                    <div 
                    key={skillGroup.category}
                    className="bg-grat-900 border border-gray-800 rounded-xl p-6 hover:border-blue-500 transition-colors duration-300">
                   <h3 className="text-white text-lg font-bold mb-4">
                    {skillGroup.category}
                    </h3>     
                    <div className="flex flex-wrap gap-2">
                        {skillGroup.items.map((item)=> (
                            <span
                            key={item}
                            className="bg-gray-800 text-gray-300 text-xs px-3 py-1 rounded-full">
                                {item}
                            </span>
                        ))}
                        </div>
                        
                    </div>
                ))}
            </div>
        </section>
    )
}
export default Skills