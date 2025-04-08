import Image from 'next/image'

const AboutMe = () => {
  return (
    <section id="about-me" className="dashboard-section">
      <h3 className="mb-10">A Little About Me</h3>
      <div className="flex mt-12 gap-8 max-md:flex-col">
        <div className="relative h-64 w-full min-w-64 max-md:mx-auto">
          <Image
            src="/images/code.png"
            fill
            alt="about"
            className="rounded-xl object-cover"
          />
        </div>
        <div>
          <p className="text-lg text-light whitespace-pre-line mb-1">
            I’m a Software Engineer with over 2.5 years of hands-on experience
            in designing and developing backend systems, microservices
            architectures, frontend interfaces, and micro-frontends. I
            specialize in building scalable, high-performance applications and
            enjoy solving complex engineering problems.
            <br />
          </p>
          <p className="text-lg text-light whitespace-pre-line mb-1">
            I completed my B.Tech in Computer Science from GGSIPU in 2023 with a
            CGPA of 8.6. Outside of work, I’ve solved over 1200 problems on
            LeetCode and CodeChef, constantly refining my problem-solving and
            algorithmic thinking.
          </p>
          <p className="text-lg text-light whitespace-pre-line">
            Known for being adaptable and proactive, I quickly grasp new
            technologies and contribute effectively in dynamic, fast-paced
            environments. I work well in cross-functional teams, ensuring smooth
            communication and collaboration to drive projects forward and
            deliver impactful results.
          </p>
        </div>
      </div>
    </section>
    // <section
    //   id="about"
    //   className="h-screen mx-auto w-full px-5 pt-28 lg:px-8 xl:px-[8%]"
    // >
    //   <h2 className="text-center">A Little About Me</h2>
    //   <div className="flex mt-12 gap-8 max-lg:flex-col max-lg:items-center">
    //     <Image
    //       src={DeveloperImg}
    //       alt="profile_pic"
    //       className="size-36 bg-white rounded-xl md:size-40 lg:size-48"
    //     />
    //     <div>
    //       <p className="text-lg max-lg:text-center">
    //         I am an experienced Frontend Developer with over a decade of
    //         professional expertise in the field. Throughout my career, I have
    //         had the privilege of collaborating with prestigious organizations,
    //         contributing to their success and growth.
    //       </p>
    //     </div>
    //   </div>
    // </section>
  )
}

export default AboutMe
