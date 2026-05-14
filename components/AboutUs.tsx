'use client'

import { useRef } from 'react'
import Image from 'next/image'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, useGSAP)
}

export default function AboutUs() {
  const container = useRef<HTMLElement>(null)

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: 'top 75%',
      }
    })

    // Heading entrance animation
    tl.to('.about-heading-char', {
      y: 0,
      opacity: 1,
      rotate: 0,
      filter: 'blur(0px)',
      duration: 1.2,
      stagger: 0.05,
      ease: 'back.out(1.5)'
    }, 0)

    // Image slides up and scales in
    tl.fromTo('.about-image-container', 
      { y: 60, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, ease: 'power4.out' },
      0.2
    )

    // SVG frame
    tl.fromTo('.about-decor',
      { opacity: 0, scale: 0.95 },
      { opacity: 1, scale: 1, duration: 1.5, ease: 'power2.out' },
      '-=0.8'
    )
    
    // Left text blocks stagger in from the left
    tl.fromTo('.about-text-left',
      { x: -40, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: 'power3.out' },
      '-=1.0'
    )

    // Right text blocks stagger in from the right
    tl.fromTo('.about-text-right',
      { x: 40, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: 'power3.out' },
      '-=1.0'
    )

  }, { scope: container })

  const headingText = "Meet Diva".split("")

  return (
    <section id="about" ref={container} className="w-full py-32 md:py-48 bg-[#FDF6EE] relative overflow-hidden text-black px-6 md:px-12">
      <div className="max-w-[1400px] mx-auto">

        <div className="text-center mb-24 overflow-hidden pt-4">
           <h2 className="montserrat-black text-[12vw] md:text-[10rem] leading-[0.8] tracking-tighter text-[#8A1C31] flex justify-center uppercase scale-x-110 origin-center">
             {headingText.map((char, index) => (
               <span key={index} className="about-heading-char inline-block opacity-0 translate-y-[100%] rotate-12 blur-md">
                 {char === " " ? "\u00A0" : char}
               </span>
             ))}
           </h2>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-16 lg:gap-24">
          
          {/* Left Side - Details */}
          <div className="w-full md:w-1/4 flex flex-col gap-12 text-center md:text-left order-2 md:order-1">
            <div className="about-text-left">
              <h4 className="uppercase tracking-[0.2em] text-[10px] md:text-xs text-black/40 font-bold mb-4">The Face Behind MeriKi & Co</h4>
              <p className="montserrat-medium text-sm md:text-base text-black/80 leading-relaxed">
                Hi, I'm Diva! Director of MeriKi & Co, the creative-led social media agency.
              </p>
            </div>
            <div className="about-text-left">
              <h4 className="uppercase tracking-[0.2em] text-[10px] md:text-xs text-black/40 font-bold mb-4">Our Approach</h4>
              <p className="montserrat-medium text-sm md:text-base text-black/80 leading-relaxed">
                We blend strategy, soul and cultural intelligence to get your brand seen, remembered and chosen, while giving you back the time to build your empire.
              </p>
            </div>
            <div className="about-text-left">
              <h4 className="uppercase tracking-[0.2em] text-[10px] md:text-xs text-black/40 font-bold mb-4">Our Mission</h4>
              <p className="montserrat-medium text-sm md:text-base text-black/80 leading-relaxed">
                We work with international brands, create content that reaches millions, and give founders their time back.
              </p>
            </div>
          </div>

          {/* Center - Image with Frame and SVG Decor */}
          <div className="w-full md:w-2/4 flex justify-center order-1 md:order-2 about-image-container relative mt-12 md:mt-0 pt-10">
            
            {/* The SVG Frame */}
            <div className="about-decor absolute inset-0 pointer-events-none flex justify-center items-end z-0">
              {/* Arch Frame */}
              <div className="absolute bottom-0 w-[310px] h-[465px] md:w-[410px] md:h-[585px] border-[1.5px] border-black/30 rounded-t-full rounded-b-none"></div>
            </div>

            {/* Image Container (Arched) */}
            <div className="relative w-[280px] h-[450px] md:w-[380px] md:h-[570px] rounded-t-full overflow-hidden z-10 bg-[#E8573A]/10">
              <Image 
                src="/abbie.png" 
                alt="Amy - 17 Socials"
                fill
                className="object-cover"
              />
            </div>

            {/* Bottom Caption */}
            <div className="absolute -bottom-12 md:-bottom-16 text-center w-full">
              <p className="montserrat-medium text-xs text-black/50">Based in Glasgow, Scotland</p>
            </div>
          </div>

          {/* Right Side - Statistics */}
          <div className="w-full md:w-1/4 flex flex-col gap-12 text-center md:text-right order-3 md:order-3">
            <div className="about-text-right flex flex-col items-center md:items-end">
              <h4 className="uppercase tracking-[0.2em] text-[10px] md:text-xs text-black/40 font-bold mb-2">Vibe</h4>
              <p className="montserrat-medium text-5xl md:text-7xl text-[#8A1C31] tracking-tighter">Soul</p>
            </div>
            <div className="about-text-right flex flex-col items-center md:items-end">
              <h4 className="uppercase tracking-[0.2em] text-[10px] md:text-xs text-black/40 font-bold mb-2">Hobbies</h4>
              <p className="montserrat-medium text-5xl md:text-7xl text-[#E8D0C9] tracking-tighter">Creative</p>
            </div>
            <div className="about-text-right flex flex-col items-center md:items-end">
              <h4 className="uppercase tracking-[0.2em] text-[10px] md:text-xs text-black/40 font-bold mb-2">Addiction</h4>
              <p className="montserrat-medium text-5xl md:text-7xl text-[#6E8B3D] tracking-tighter">Strategy</p>
            </div>
            <div className="about-text-right flex flex-col items-center md:items-end">
              <h4 className="uppercase tracking-[0.2em] text-[10px] md:text-xs text-black/40 font-bold mb-2">Community</h4>
              <p className="montserrat-medium text-5xl md:text-7xl text-black tracking-tighter">Trust</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
