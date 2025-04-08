import Image from 'next/image'
import Skills from './components/Skills'

export default function AboutPage() {
  return (
    <>
      <section className="max-w-4xl mx-auto pb-4 px-6">
        <h2>About Me</h2>
        <div className="mt-6">
          <div>
            <p className="text-lg text-light whitespace-pre-line mb-1">
              Hello 👋 I’m a Software Engineer with over 2.5 years of hands-on
              experience in designing and developing backend systems,
              microservices architectures, frontend interfaces, and
              micro-frontends. I specialize in building scalable,
              high-performance applications and enjoy solving complex
              engineering problems.
              <br />
            </p>
            <p className="text-lg text-light whitespace-pre-line mb-1">
              I completed my B.Tech in Computer Science from GGSIPU in 2023 with
              a CGPA of 8.6. Outside of work, I’ve solved over 1200 problems on
              LeetCode and CodeChef, constantly refining my problem-solving and
              algorithmic thinking.
            </p>
            <p className="text-lg text-light whitespace-pre-line">
              Known for being adaptable and proactive, I quickly grasp new
              technologies and contribute effectively in dynamic, fast-paced
              environments. I work well in cross-functional teams, ensuring
              smooth communication and collaboration to drive projects forward
              and deliver impactful results.
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
