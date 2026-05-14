'use client'

import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { ArrowUpRight } from 'lucide-react'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, useGSAP)
}

export default function Connect() {
  const container = useRef<HTMLElement>(null)
  const marqueeInner = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    // 1. Marquee scrub animation
    // The text will move right-to-left as we scroll down
    gsap.to('.connect-marquee-content', {
      xPercent: -50,
      ease: 'none',
      scrollTrigger: {
        trigger: container.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1,
      }
    })

    // 2. Entrance animations for form elements
    gsap.set('.connect-field', { opacity: 0, y: 40 })
    gsap.set('.connect-btn', { opacity: 0, scale: 0.8 })

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.connect-form-wrapper',
        start: 'top 85%',
        end: 'top 40%',
        scrub: 1,
      }
    })

    tl.to('.connect-field', {
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: 0.2,
      ease: 'power2.out',
    })
    
    tl.to('.connect-btn', {
      opacity: 1,
      scale: 1,
      duration: 1,
      ease: 'back.out(1.5)',
    }, '-=0.5')

  }, { scope: container })

  return (
    <section id="connect" ref={container} className="relative w-full min-h-screen bg-white overflow-hidden text-black font-sans flex flex-col justify-center py-20 z-10">
      
      {/* Massive Marquee */}
      <div className="w-full overflow-hidden flex whitespace-nowrap mb-16 md:mb-24 select-none" style={{ perspective: '1200px' }}>
        <div ref={marqueeInner} className="connect-marquee-content flex items-center gap-8 md:gap-16">
          {/* Repeat the text a few times to ensure it covers the screen during scrub */}
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex items-center gap-8 md:gap-16">
              <h2 
                className="montserrat-hero text-black tracking-tighter"
                style={{ fontSize: 'clamp(3rem, 16vw, 20rem)', letterSpacing: '-0.04em', lineHeight: 0.85 }}
              >
                Book a Call!
              </h2>
              {/* Optional separator dot or star */}
              <span className="text-[#8A1C31]" style={{ fontSize: 'clamp(1.5rem, 8vw, 10rem)' }}>✦</span>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Horizontal Form */}
      <div className="connect-form-wrapper w-full max-w-7xl mx-auto px-6 md:px-12">
        <form className="flex flex-col lg:flex-row items-end justify-between gap-8 lg:gap-12 w-full" onSubmit={(e) => e.preventDefault()}>
          
          <div className="flex flex-col md:flex-row items-center w-full gap-8 lg:gap-12 flex-1">
            {/* Name Field */}
            <div className="connect-field relative group flex-1 w-full pt-4">
              <input 
                type="text" 
                id="name"
                required
                className="w-full bg-transparent border-b border-black/30 py-3 outline-none transition-colors duration-300 focus:border-[#8A1C31] peer text-lg md:text-xl montserrat-medium" 
                placeholder=" " 
              />
              <label 
                htmlFor="name"
                className="absolute left-0 top-7 text-black/50 transition-all duration-300 pointer-events-none peer-focus:top-0 peer-focus:text-xs peer-focus:text-[#8A1C31] peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:text-xs montserrat-medium uppercase tracking-widest"
              >
                Name
              </label>
            </div>

            {/* Email Field */}
            <div className="connect-field relative group flex-1 w-full pt-4">
              <input 
                type="email" 
                id="email"
                required
                className="w-full bg-transparent border-b border-black/30 py-3 outline-none transition-colors duration-300 focus:border-[#8A1C31] peer text-lg md:text-xl montserrat-medium" 
                placeholder=" " 
              />
              <label 
                htmlFor="email"
                className="absolute left-0 top-7 text-black/50 transition-all duration-300 pointer-events-none peer-focus:top-0 peer-focus:text-xs peer-focus:text-[#8A1C31] peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:text-xs montserrat-medium uppercase tracking-widest"
              >
                Email
              </label>
            </div>

            {/* Message Field */}
            <div className="connect-field relative group flex-1 w-full pt-4">
              <input 
                type="text" 
                id="message"
                required
                className="w-full bg-transparent border-b border-black/30 py-3 outline-none transition-colors duration-300 focus:border-[#8A1C31] peer text-lg md:text-xl montserrat-medium" 
                placeholder=" " 
              />
              <label 
                htmlFor="message"
                className="absolute left-0 top-7 text-black/50 transition-all duration-300 pointer-events-none peer-focus:top-0 peer-focus:text-xs peer-focus:text-[#8A1C31] peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:text-xs montserrat-medium uppercase tracking-widest"
              >
                Message
              </label>
            </div>
          </div>

          {/* Submit Button */}
          <button type="submit" className="connect-btn flex items-center gap-4 group cursor-pointer shrink-0 mt-8 lg:mt-0 outline-none">
            <div className="relative overflow-hidden flex flex-col text-right leading-tight montserrat-medium text-xl md:text-2xl text-black pb-1">
              <span className="group-hover:-translate-y-[120%] block transition-transform duration-500 ease-in-out">
                Book a call
              </span>
              <span className="absolute right-0 top-0 translate-y-[120%] group-hover:translate-y-0 block transition-transform duration-500 ease-in-out text-[#8A1C31]">
                Book a call
              </span>
            </div>
            <div className="relative overflow-hidden w-12 h-12 md:w-16 md:h-16 rounded-full border border-black flex items-center justify-center text-black group-hover:text-white transition-colors duration-500 z-10 shrink-0">
              <div className="absolute left-0 w-full bg-[#8A1C31] h-[150%] top-[100%] rounded-t-[100%] group-hover:top-0 group-hover:rounded-t-none transition-all duration-500 ease-in-out -z-10"></div>
              <ArrowUpRight size={24} strokeWidth={1.5} className="group-hover:rotate-45 transition-transform duration-500" />
            </div>
          </button>
          
        </form>
      </div>

    </section>
  )
}
