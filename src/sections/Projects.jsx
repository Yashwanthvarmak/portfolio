import ProjectCard from '../Components/ProjectCard'
const projects = [
    {
        title: "Task Management Dashboard",
        description: "A Kanban-style project management app with drag and drop, real-time updates, and data visualization using Chart.js.",
        technologies: ["React", "TypeScript", "Zustand", "React Query", "Tailwind CSS, Chart.js"],
        githubLink: "https://github.com/Yashwanthvarmak"
    },
    {
        title: "E-Commerce Platform",
        description: "Full-Stack e-commerce app with authentication, product catalog, shopping cart, and Stripe payment integration.",
        technologies: ["React", "Redux Toolkit", "Node.js", "MongoDB", "Stripe", "Material UI"],
        githubLink: "https://github.com/Yashwanthvarmak"
    },
  {
    title: "Weather Forecast Dashboard",
    description: "Progressive Web App with real-time weather data, 7-day forecasts, and interactive data visualizations.",
    technologies: ["React", "Next.js", "OpenWeather API", "Recharts", "PWA"],
    githubLink: "https://github.com/Yashwanthvarmak"
  },
  {
    title: "Real-Time Chat Application",
    description: "Feature-rich messaging platform with WebSocket technology, video calling via WebRTC, and message encryption.",
    technologies: ["React", "Socket.io", "WebRTC", "Node.js", "MongoDB", "Tailwind CSS"],
    githubLink: "https://github.com/Yashwanthvarmak"
  },
  {
    title: "Social Media Analytics Dashboard",
    description: "Comprehensive analytics platform with user profiles, post creation, follower systems, and Firebase integration.",
    technologies: ["React", "Redux", "Firebase", "Chart.js", "React Router", "Chakra UI"],
    githubLink: "https://github.com/Yashwanthvarmak"
  },
  {
    title: "Portfolio with Headless CMS",
    description: "Modern animated portfolio with Sanity CMS integration, Framer Motion animations, and 95+ Lighthouse scores.",
    technologies: ["Next.js", "React", "Sanity CMS", "GraphQL", "Framer Motion", "Tailwind CSS"],
    githubLink: "https://github.com/Yashwanthvarmak"
  }
]

function Projects() {
  return (
    <section id="projects" className="px-10 py-24">

      <div className="text-center mb-16">
        <p className="text-blue-500 text-sm font-medium tracking-widest uppercase mb-4">
          My Work
        </p>
        <h2 className="text-white text-5xl font-bold">
          Featured <span className="text-blue-500">Projects</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            description={project.description}
            technologies={project.technologies}
            githubLink={project.githubLink}
          />
        ))}
      </div>

    </section>
  )
}

export default Projects
