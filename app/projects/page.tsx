import { projects } from '@/lib/utils'
import { Project } from '@/types'
import Image from 'next/image'

export default function ProjectsPage() {
  return (
    <>
      <section className="max-w-4xl mx-auto pb-4 px-6">
        <h2>Projects</h2>
        <div className="flex flex-col gap-4 mt-6">
          {projects.map((project) => (
            <ProjectItem key={project.name} project={project} />
          ))}
        </div>
      </section>
    </>
  )
}

const ProjectItem = ({ project }: { project: Project }) => {
  return (
    <div className="flex items-start cursor-pointer group">
      <div className="py-6">
        <p className="text-xl font-medium mb-2">{project.name}</p>
        <p className="text-base">{project.description}</p>
      </div>
      <div className="relative h-48 w-full bg-red rounded-2xl  overflow-hidden bg-white sm:h-44 lg:h-44">
        <Image
          src={project.imgPath}
          fill
          alt="project-img"
          className="object-cover group-hover:scale-105 transition-all duration-300"
        />
        <div className="absolute inset-0 size-full bg-neutral-800 bg-opacity-30 group-hover:bg-opacity-0 transition-all duration-300" />
      </div>
    </div>
  )
}
