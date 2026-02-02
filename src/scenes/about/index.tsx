import Navbar from "@/scenes/navbar";
import ClickableText from '@/scenes/about/ClickableText';
import ImageGallery from '@/scenes/about/ImageGallery';

import shinyappImage from '@/assets/shinyapp.png';
import floraImage from '@/assets/flora.png';
import lookImage from '@/assets/look.png';
import chromToolsImage from '@/assets/chromTools.png';

import { motion } from 'framer-motion';
import type { SectionType } from '@/shared/types';

type IntroPageProps = {
  onBack: () => void;
  selectedSection: SectionType;
  setSelectedSection: (value: SectionType) => void;
}

const IntroPage = ({ selectedSection, setSelectedSection }: IntroPageProps) => {

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

// Portfolio items
  const portfolioItems = [
    {
      id: '1',
      title: 'Early TB Transcriptomics App',
      description: "A Shiny web application for exploration of transcriptomics data in mouse models of early tuberculosis",
      imageUrl: shinyappImage,
      link: 'https://ogarra.shinyapps.io/earlymousetb/'
    },
    {
      id: '2',
      title: 'ChromTools',
      description: 'A tool for characterising the efficiency of peak detection in genome sequencing data',
      imageUrl: chromToolsImage,
      link: 'https://github.com/aspides-js/chromTools'
    },
    {
      id: '3',
      title: 'Type I IFN drives neutrophil swarming, impeding lung T cell–macrophage interactions and TB control',
      description: 'Research exploring immune cell interactions during early TB infection',
      imageUrl: '/assets/react.svg',
      link: 'https://rupress.org/jem/article/222/12/e20250466/278334/Type-I-IFN-drives-neutrophil-swarming-impeding'
    },
  ];

  // Project items (can be different from portfolio)
  const projectItems = [
    {
      id: '1',
      title: 'Learning to Look',
      description: "Our submission to D&AD New Blood Awards: an answer to Canestan's brief to break taboos in female intimate health",
      imageUrl: lookImage,
      link: "./NBA2026-Canestan.pdf"
    },
    {
      id: '2',
      title: 'FLORA: how the vaginal microbiome shapes us',
      description: 'Still very much in progress - I am currently writing a book about the vaginal microbiome. Click for a sneak peek',
      imageUrl: floraImage,
      // link: 'https://example.com/current2'
    },
    // ... add more items
  ];

  return (
    <div className="min-h-screen">
       <Navbar 
          selectedSection={selectedSection} 
          setSelectedSection={setSelectedSection} 
        />
      
      {/* First Section - Full Height */}
      <div id="home" className="min-h-screen flex items-center justify-center">
        <div className="max-w-6xl mx-auto px-6 py-24">
          <div className="text-center mb-16">
            <h1 className="text-9xl font-bold text-text-primary mb-2">JESSICA SHIELDS</h1>
          </div>

          <motion.div 
            className="mb-8 flex flex-wrap justify-between max-w-6xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <ClickableText 
              text="ABOUT" 
              onClick={() => scrollToSection('about')}
              tooltip="Hello, I'm a research software engineer looking to move into the area I am most interested in: women's health."
            />
            <ClickableText 
              text="PORTFOLIO" 
              onClick={() => scrollToSection('portfolio')}
              tooltip="Take a look at my portfolio"
            />
            <ClickableText 
              text="PROJECTS" 
              onClick={() => scrollToSection('projects')}
              tooltip="This is just some of what I'm working on at the moment"
            />
            <ClickableText 
              text="CV" 
              href="./JS_CV_25.pdf"
              tooltip="Here is my CV!"
            />
          </motion.div>
        </div>
      </div>

      {/* About Section */}
      <div id="about" className="min-h-screen bg-about flex items-center">
        <div className="max-w-6xl mx-auto px-6 py-24 w-full">
          <h2 className="text-6xl font-bold text-text-primary mb-8">ABOUT ME</h2>
          <p className="text-2xl text-text-primary">
            Hello, I'm Jessica.
            <br /><br />
            I'm a research software engineer looking to move into the area I am most interested in: women's health.
            <br /> <br />
            I have extensive experience designing pipelines in Python and R to analyse complex data for biological research, but now I want to apply my skillset to helping women. 
            <br /> <br />
            It can take years for research to reach its intended audience. I want to work directly towards putting the research in the hands of those that need it.
            <br /> <br />
            I've built this website with TypeScript, React and Tailwind CSS to show you at Hertility that, while I may not know a lot of TypeScript and React, 
            what I do know is how to design, build and maintain a clean and clear web application. And that it's fun!
            <br /> <br />
            Most importantly, I hope to show you my dedication and desire to join your team.
          </p>
        </div>
      </div>

      {/* Portfolio Section */}
      <div id="portfolio" className="min-h-screen bg-portfolio flex items-center">
        <div className="max-w-6xl mx-auto px-6 py-24 w-full">
          <h2 className="text-6xl font-bold text-text-primary mb-8">PORTFOLIO</h2>
          <ImageGallery items={portfolioItems} />
        </div>
      </div>

      {/* Projects Section */}
      <div id="projects" className="min-h-screen bg-projects flex items-center">
        <div className="max-w-6xl mx-auto px-6 py-24 w-full">
          <h2 className="text-6xl font-bold text-text-primary mb-8">PROJECTS</h2>
          <ImageGallery items={projectItems} />
        </div>
      </div>
    </div>
  );
};

export default IntroPage