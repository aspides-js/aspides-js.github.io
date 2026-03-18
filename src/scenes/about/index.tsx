import Navbar from "@/scenes/navbar";
import ClickableText from '@/scenes/about/ClickableText';
import ImageGallery from '@/scenes/about/ImageGallery';
import tfImage from '@/assets/tf.png';
import shinyappImage from '@/assets/shinyapp.png';
import floraImage from '@/assets/flora.png';
import lookImage from '@/assets/look.png';
import chromToolsImage from '@/assets/chromtools.png';
import JEMPaper from '@/assets/jempaper.png';
import { motion } from 'framer-motion';
import type { SectionType } from '@/shared/types';
import { useSectionObserver } from '@/hooks/useSectionObserver';
import useMediaQuery from '@/hooks/useMediaQuery';

type Props = {
  onBack: () => void;
  selectedSection: SectionType;
  setSelectedSection: (value: SectionType) => void;
}

const IntroPage = ({ selectedSection, setSelectedSection }: Props) => {useSectionObserver({ setSelectedSection });
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

// Portfolio items
  const portfolioItems = [
    {
      id: '1',
      title: 'transc-factor',
      description: "This application enables users to input their own datasets to query putative transcription factors regulating \
          their data. The frontend I built using Flask, with a PostgreSQL database backend",
      imageUrl: tfImage,
      // link: 
    },
    {
      id: '2',
      title: 'Early TB Transcriptomics App',
      description: "I built this Shiny web application to accompany our publication, allowing readers to explore our transcriptomics data from mouse models of early tuberculosis",
      imageUrl: shinyappImage,
      link: 'https://ogarra.shinyapps.io/earlymousetb/'
    },
    {
      id: '3',
      title: 'Type I IFN drives neutrophil swarming, impeding lung T cell–macrophage interactions and TB control',
      description: 'Our research exploring immune cell interactions during early tuberculosis infection',
      imageUrl: JEMPaper,
      link: 'https://rupress.org/jem/article/222/12/e20250466/278334/Type-I-IFN-drives-neutrophil-swarming-impeding'
    },
    {
      id: '4',
      title: 'ChromTools complete',
      description: "I created this tool for researchers to be able to model the 'completeness' of their datasets, modelling the efficiency of peak detection in peak-enriched genome sequencing data",
      imageUrl: chromToolsImage,
      link: 'https://github.com/aspides-js/chromTools'
    },
  ];

  // Project items (can be different from portfolio)
  const projectItems = [
    {
      id: '1',
      title: 'Learning to Look',
      description: "Our submission to D&AD New Blood Awards: an answer to Canestan's brief to break a specific taboo in female intimate health. \
        I'm working with Tallula Torthe, Creative Designer and Rhiana Mills, Reproductive and Sexual Health Researcher, to design a campaign to encourage women to take a look at their vulvas.",
      imageUrl: lookImage,
      link: "/NBA2026_Canesten.pdf"
    },
    {
      id: '2',
      title: 'FLORA: how the vaginal microbiome shapes us',
      description: 'I am currently writing a book about the vaginal microbiome, aiming for a curious, accessible and amusing exploration of emerging research in the field.',
      imageUrl: floraImage,
      // link: 'https://example.com/current2'
    },
  ];

  return (
    <div className="min-h-screen">
       <Navbar 
          selectedSection={selectedSection} 
          setSelectedSection={setSelectedSection} 
        />
      
      {/* First Section - Full Height */}
      <div id="home" className="min-h-screen flex items-center justify-center">
        <div className={`${isAboveMediumScreens ? 'max-w-6xl' : 'max-w-2xl'} mx-auto px-6 py-24`}>
          <div className="text-center mb-16">
            <h1 className={`${isAboveMediumScreens ? 'text-9xl' : 'text-7xl'} font-bold text-text-primary mb-1`}>JESSICA SHIELDS</h1>
          </div>

          <motion.div 
            className={`${isAboveMediumScreens ? 'max-w-6xl' : 'max-w-1xl'} mb-8 mx-auto px-6 flex flex-wrap justify-between`}
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
              tooltip="Here is my CV"
            />
          </motion.div>
        </div>
      </div>

      {/* About Section */}
      <div id="about" className="min-h-screen bg-about flex items-center">
        <div className={`${isAboveMediumScreens ? 'max-w-6xl' : 'max-w-2xl'} mx-auto px-6 py-24 w-full`}>
          <h2 className="text-6xl font-bold text-text-primary mb-8">ABOUT ME</h2>
          <p className="text-xl text-text-primary">
            Hello, I'm Jessica.
            <br /><br />
            I'm a research software engineer looking to move into the area I am most interested in: women's health.
            <br /> <br />
            I have extensive experience designing pipelines in Python and R to analyse complex data for biological research, but now I want to apply my skillset to helping women. 
            <br /> <br />
            It can take a long time for research to reach its intended audience. I want to work directly towards putting the research in the hands of those that need it.
            <br /> <br />
            I've built this website in TypeScript and React to demonstrate my approach to designing, building, and 
            maintaining a clean, well-structured web application. Also, because it's fun!
          </p>
        </div>
      </div>

      {/* Portfolio Section */}
      <div id="portfolio" className="min-h-screen bg-portfolio flex items-center">
        <div className={`${isAboveMediumScreens ? 'max-w-6xl' : 'max-w-2xl'} mx-auto px-6 py-24 w-full`}>
          <h2 className="text-6xl font-bold text-text-primary mb-8">PORTFOLIO</h2>
          <ImageGallery items={portfolioItems} />
        </div>
      </div>

      {/* Projects Section */}
      <div id="projects" className="min-h-screen bg-projects flex items-center">
        <div className={`${isAboveMediumScreens ? 'max-w-6xl' : 'max-w-2xl'} mx-auto px-6 py-24 w-full`}>
          <h2 className="text-6xl font-bold text-text-primary mb-8">PROJECTS</h2>
          <ImageGallery items={projectItems} />
        </div>
      </div>
    </div>
  );
};

export default IntroPage