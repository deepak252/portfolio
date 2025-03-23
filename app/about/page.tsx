import Image from 'next/image'
import Skills from './components/Skills'

export default function AboutPage() {
  return (
    <>
      <section className="max-w-4xl mx-auto pb-4 px-6">
        <h2>About Me</h2>
        <div className="mt-6">
          <div>
            <p className="text-lg text-light">
              Hello 👋 I&apos;m Deepak, a Software Engineer with 2.5+ years of
              experience in backend, microservices, frontend, and
              micro-frontend. I enjoy solving complex programming challenges,
              staying ahead with the latest technologies, and building scalable,
              high-performance applications. Adaptable, quick to learn, and
              thrive in dynamic environments. I actively contribute to
              collaborative teams, ensuring smooth communication and teamwork to
              achieve project goals, and I am always up for a challenge.
            </p>
          </div>
        </div>
        <div className="relative h-52 w-full sm:h-80">
          <Image
            src="/images/developer2.png"
            alt="about"
            fill
            className="mt-8 rounded-2xl object-cover"
          />
        </div>
        <Skills />
      </section>
    </>
  )
}
