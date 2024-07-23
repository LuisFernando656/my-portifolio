import * as icons from 'lucide-react';
import './styles.css'

const Hero = () => {
  return (
    <section className="bg-black text-white min-h-screen">
      <div className="flex flex-col gap-3 lg:grid lg:grid-cols-3 lg:max-w-6xl lg:gap-5 px-6 mx-auto">
        <img src="https://picsum.photos/200" alt="Foto de perfil" />
        <div className="content-container">
          <h1>Luis Fernando de Oliveira</h1>
          <h2>I'm a Web Developer</h2>
          <div className='buttons-container'>
            <button>
              <icons.Download/> 
              Download CV
            </button>
            <button>
              <icons.Mail/>
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </section> 
  )
}

export default Hero;