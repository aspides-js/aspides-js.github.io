// import { useState } from "react"
// import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid"
import Link from "./link"
import type { SectionType } from '@/shared/types';

type Props = {
    selectedSection: SectionType;
    setSelectedSection: (value: SectionType) => void;
}


const Navbar = ({ selectedSection, setSelectedSection }: Props) => {
  const flexBetween = "flex items-center justify-between"

  return (
    <nav>
      <div className={`${flexBetween} fixed top-0 z-30 w-full py-6 bg-home`}>
        <div className={`${flexBetween} mx-auto w-5/6`}>
          <div className={`${flexBetween} w-full gap-16`}>
            {/* LEFT SIDE */}
            <a className= "text-3xl font-bold"
              href="/"
              onClick={() => setSelectedSection('home')}
            >
              JESSICA SHIELDS
              </a>

            {/* RIGHT SIDE */}
            <div className={`${flexBetween} w-full`}>
              <div className={`${flexBetween} gap-8 text-1xl`}>
              </div>
              <div className={`${flexBetween} gap-8 text-1xl font-bold`}>
                <Link 
                  page="ABOUT" 
                  selectedSection={selectedSection} 
                  setSelectedSection={setSelectedSection} 
                />
                <Link 
                  page="PORTFOLIO" 
                  selectedSection={selectedSection} 
                  setSelectedSection={setSelectedSection} 
                />
                <Link 
                  page="PROJECTS" 
                  selectedSection={selectedSection} 
                  setSelectedSection={setSelectedSection} 
                />
                <a href="./JS_CV_25.pdf" className="transition duration-300 hover:text-text-primary" target="_blank" rel="noopener noreferrer">
                  <span>CV</span>
                </a>
                <a href="mailto:jess.m.shields@live.co.uk" className=" transition duration-300 hover:text-text-primary">
                  <span>CONTACT</span>  
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar