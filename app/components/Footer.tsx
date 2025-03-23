import Link from 'next/link'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className="select-none py-7 border-theme !border-0 !border-t-[1.5px]">
      <div className="flex-center max-w-6xl mx-auto px-4 lg:px-6">
        <Link href="/" className="flex items-center gap-1 text-2xl group">
          <span className="text-xl group-hover:-rotate-90 group-hover:scale-125 transform ease-in-out duration-300">
            ✦
          </span>
          <span className="group font-medium">Deepak</span>
          <span className="text-xl group-hover:-rotate-90 group-hover:scale-125 transform ease-in-out duration-300">
            ✦
          </span>
        </Link>
        <div className="flex-center gap-2 ms-4">
          <a
            href="https://github.com/deepak252"
            target="_blank"
            className="relative size-8"
          >
            <Image src="/images/handles/github.png" fill alt="github" />
          </a>
          <a
            href="https://www.linkedin.com/in/deepak-chaurasiya-dc"
            target="_blank"
            className="relative size-8"
          >
            <Image src="/images/handles/linkedin.png" fill alt="linkedin" />
          </a>
          <a
            href="https://leetcode.com/u/deepakchaurasiya/"
            target="_blank"
            className="relative size-8"
          >
            <Image src="/images/handles/leetcode.png" fill alt="leetcode" />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
