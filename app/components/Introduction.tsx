import Image from 'next/image'
import { ArrowRightIcon, DownloadIcon } from '../../components/icons'

const Introduction = () => {
  return (
    <section className="dashboard-section flex flex-col items-center gap-5 text-center max-sm:pt-8">
      <div className="relative size-32 rounded-full overflow-hidden">
        <Image src="/images/profile-md.png" fill alt="profile_pic" />
      </div>
      <h1 className="mt-2">
        Hello 👋 <br /> I&apos;m Deepak.
      </h1>
      <p className="text-2xl leading-9 text-light">
        Software Engineer | Building Scalable <br />& Efficient Software
      </p>
      <div className="flex items-center gap-4 py-8 max-sm:flex-col">
        <a href="#contact" className="btn-primary">
          Connect
          <ArrowRightIcon className="size-6 fill-white dark:fill-dark" />
        </a>
        <a href="/resume.pdf" download className="btn-outline-primary">
          Resume <DownloadIcon className="size-6" />
        </a>
      </div>
    </section>
  )
}

export default Introduction
