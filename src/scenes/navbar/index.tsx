import { useState } from "react"
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid"
import useMediaQuery from "@/hooks/useMediaQuery"
import Link from "./link"
import type { SectionType } from '@/shared/types';

type Props = {
    selectedSection: SectionType;
    setSelectedSection: (value: SectionType) => void;
}


const Navbar = ({ selectedSection, setSelectedSection }: Props) => {
  const flexBetween = "flex items-center justify-between"
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

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
            { isAboveMediumScreens ? (
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
            ) : (
            <button
                className="rounded-full bg-secondary-500 p-2"
                onClick={() => setIsMenuToggled(!isMenuToggled)}
              >
                <Bars3Icon className="h-6 w-6 text-white" />
              </button>
            )}
          </div>
        </div>
      </div>

            {/* MOBILE MENU MODAL */}
      {!isAboveMediumScreens && isMenuToggled && (
        <div className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-primary-100 drop-shadow-xl">
          {/* CLOSE ICON */}
          <div className="flex justify-end p-12">
            <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
              <XMarkIcon className="h-6 w-6 text-text-secondary" />
            </button>
          </div>

          {/* MENU ITEMS */}
          <div className="ml-[33%] flex flex-col gap-10 text-2xl">
            <Link
              page="home"
              selectedSection={selectedSection}
              setSelectedSection={setSelectedSection}
            />
            <Link
              page="about"
              selectedSection={selectedSection}
              setSelectedSection={setSelectedSection}
            />
            <Link
              page="portfolio"
              selectedSection={selectedSection}
              setSelectedSection={setSelectedSection}
            />
            <Link
              page="projects"
              selectedSection={selectedSection}
              setSelectedSection={setSelectedSection}
            />
            <a href="./JS_CV_25.pdf" className="transition duration-300 hover:text-text-primary" target="_blank" rel="noopener noreferrer">
              <span>cv</span>
            </a>
            <a href="mailto:jess.m.shields@live.co.uk" className=" transition duration-300 hover:text-text-primary">
              <span>contact</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar