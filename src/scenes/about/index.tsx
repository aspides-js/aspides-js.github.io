import Navbar from "@/scenes/navbar";
import ClickableText from '@/scenes/about/ClickableText';
import ImageGallery from '@/scenes/about/ImageGallery';

import { motion } from 'framer-motion';
import type { SectionType } from '@/shared/types';

type IntroPageProps = {
  onBack: () => void;
  selectedSection: SectionType;
  setSelectedSection: (value: SectionType) => void;
}

const IntroPage = ({ onBack, selectedSection, setSelectedSection }: IntroPageProps) => {

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

// Portfolio items
  const portfolioItems = [
    {
      id: '1',
      title: 'Project Alpha',
      description: 'A web application for data visualization',
      imageUrl: '/images/project1.jpg',
      link: 'https://example.com/project1'
    },
    {
      id: '2',
      title: 'Project Beta',
      description: 'Mobile app for health tracking',
      imageUrl: '/images/project2.jpg',
      link: 'https://example.com/project2'
    },
    {
      id: '3',
      title: 'Project Gamma',
      description: 'AI-powered chatbot for customer support',
      imageUrl: '/images/project3.jpg',
      link: 'https://example.com/project3'
    }
  ];

  // Project items (can be different from portfolio)
  const projectItems = [
    {
      id: '1',
      title: 'Current Work 1',
      description: 'Women\'s health research',
      imageUrl: '/images/current1.jpg',
      link: 'https://example.com/current1'
    },
    // ... add 8 more items
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
          <p className="text-2xl">
            Hello, I'm Jessica.
            <br /><br />
            I'm a research software engineer looking to move into the area I am most interested in: women's health.
            I'm passionate about using technology to solve real-world problems and make a positive impact on people's lives.
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