import { color, motion } from 'framer-motion'

import { styles } from "../styles"
import photo from '../assets/photo.png'
import { ComputersCanvas } from './canvas'

const Hero = () => {
  return (
    <section className="relative w-auto h-screen mx-auto flex justify-center items-center">
      <div className={`${styles.paddingX} relative insert-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient"/>
        </div>
        
        <div>
          <h1 className={`${styles.heroHeadText}`}>Hi, I&apos;m <span className="text-[#915eff]">Sameer</span></h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>I&apos;m a full-stack developer, currently interested in <br className="sm:block hidden"/>Machine Learning and Data Science.</p>
        </div>
      </div>
      <div className={`${styles.paddingX} relative insert-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <img src={`../assets/${photo}`} alt="MyPhoto" />
      </div>
      {/* <ComputersCanvas/> */}
      {/* <div className="absolute xs:bottom-10 bottom-32 w-flex flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y:[0,24,0]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop'
              }}
              className="w-3 h-3 rounded-full mb-1 bg-secondary"
              />
          </div>
        </a>
      </div> */}
    </section>
  )
}

export default Hero