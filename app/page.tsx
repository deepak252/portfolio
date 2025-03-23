import AboutMe from './components/AboutMe'
import Connect from './components/ContactMe'
import Introduction from './components/Introduction'
import Projects from './components/Projects'

export default function Home() {
  return (
    <>
      <Introduction />
      <AboutMe />
      <Projects />
      <Connect />
    </>
  )
}
