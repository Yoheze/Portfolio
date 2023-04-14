import NavBar from '@/components/navbar.js'
import Header from '@/components/header.js'
import About from '@/components/about.js'
import Experience from '@/components/experience.js'
import Projects from '@/components/projects.js'
import Footer from '@/components/footer.js'

export default function Home() {

  return (
    <>
      <NavBar/>
      <Header/>
      <About/>
      <Experience/>
      <Projects/>
      <Footer/>
    </>
  )
}
