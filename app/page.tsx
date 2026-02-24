'use client'
import AsIf from './components/asIf'
import Civickit from './components/civickit'
import Contact from './components/contact'
import Escape from './components/escape'
import Home from './components/home'
import Navbar from './components/navbar'
import Pixel from './components/pixel'
import Saltify from './components/saltify'
import Wordle from './components/wordle'

export default function App() {

  return (
    <>
      <Navbar />
      <div className='relative'>
        <>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,200..800&display=swap" rel="stylesheet" />
        </>

        <div id="Home"><Home /></div>

        <div id="Projects" className='relative z-12 text-center mt-40 py-16'>
          <h1 className="text-6xl font-bold mt-24">Projects</h1>
          <hr className='w-sm max-w-1/2 border-2 border-(--darkBlue) justify-self-center mt-4' />
        </div>

        <div className='flex flex-col md:flex-row justify-center'>
          <div id="Civickit"><Civickit /></div>
          <div id="Saltify"><Saltify /></div>
        </div>

        <div id="AsIf"><AsIf /></div>

        <div className='absolute w-full top-280'>
          <div className='flex flex-col md:flex-row md:justify-between -translate-y-44 md:-translate-y-0 '>
            <img src={"MapCutoff.svg"} className='relative z-0 max-w-5/6 md:max-w-1/2 w-2xl' />
            <img src={"Mouth.svg"} className='relative z-0 md:max-w-1/2 w-4xl justify-self-right' />
          </div>
        </div>
        <img src={"Clothes.svg"} className='absolute z-0 top-612 sm:top-660 md:top-480 justify-self-center' />

        <div className="overflow-hidden">
          <img src={"GreenShape.svg"} className='absolute max-w-1/3 z-1 top-0 right-0' />
          <img src={"PurpleShape.svg"} className='absolute max-w-1/3 z-1 top-100 sm:top-130 left-0' />
          <img src={"Dots2.svg"} className='absolute w-220 max-w-2/3 z-0 top-120 right-0' />
          <img src={"Dots.svg"} className='absolute w-220 max-w-2/3 rotate-105 z-0 -top-20 -left-20 md:-left-60' />
        </div>

        <div className='relative z-12 text-center mt-52'>
          <h1 className="text-4xl font-bold">Fun & Games</h1>
          <hr className='w-sm max-w-1/2 border-1 border-(--darkBlue) justify-self-center mt-4' />
        </div>

        <div className='relative flex flex-wrap flex-row justify-center gap-y-8'>
          <div id="Wordle"><Wordle /></div>
          <div id="Pixel"><Pixel /></div>
          <div id="Escape"><Escape /></div>
        </div>

        <div id="Contact"><Contact /></div>

        <img src={"GreenShape.svg"} className='absolute z-1 -bottom-12 max-w-1/4 rotate-180 left-0 w-60' />
        <img src={"PurpleShape.svg"} className='absolute z-1 bottom-36 max-w-1/4 right-0 rotate-180 w-60' />
        <img src={"Dots1.svg"} className='absolute w-200  z-0 -bottom-12 right-0' />
        <img src={"Dots.svg"} className='absolute w-200 rotate-45 z-0 bottom-80 -left-80 md:-left-160' />

      </div>
    </>
  )
}