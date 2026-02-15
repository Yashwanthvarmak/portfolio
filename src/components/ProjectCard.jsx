import { Github } from 'lucide-react'

function ProjectCard({ title, description, technologies, githubLink }) {
  return (
    <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-blue-500 transition-colors duration-300 flex flex-col">

      <h3 className="text-white text-xl font-bold mb-3">
        {title}
      </h3>

      <p className="text-gray-400 text-sm mb-5 leading-relaxed">
        {description}
      </p>

      <div className="flex flex-wrap gap-2 mb-6">
        {technologies.map((tech) => (
          <span key={tech} className="bg-gray-800 text-blue-400 text-xs px-3 py-1 rounded-full">
            {tech}
          </span>
        ))}
      </div>

      <div className="mt-auto">
        <a href={githubLink} target="_blank" className="flex items-center gap-2 text-white hover:text-blue-500 transition-colors duration-300">
          <Github size={20} />
          <span className="text-sm">View on GitHub</span>
        </a>
      </div>

    </div>
  )
}

export default ProjectCard