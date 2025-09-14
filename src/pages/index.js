import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Banner from '../components/Banner';
import CarCompanyLogoSlider from '../components/CarCompanyLogoSlider';
import Blogs from '../components/Blogs';
import CarSection from '../components/CarSection';
import GlobalReach from '@/components/GlobalReach';
import TrucksAndOffHighway from '@/components/TrucksAndOffHighway';
import ExpertiesArea from '@/components/ExpertiesArea';

// Animation variants
const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

export default function Home() {
  const bannerRef = useRef(null);
  const isBannerInView = useInView(bannerRef, { once: true, threshold: 0.1 });

  const partnersRef = useRef(null);
  const isPartnersInView = useInView(partnersRef, { once: true, threshold: 0.1 });

  const cardsRef = useRef(null);
  const isCardsInView = useInView(cardsRef, { once: true, threshold: 0.1 });

  const discRef = useRef(null);
  const isDiscInView = useInView(discRef, { once: true, threshold: 0.1 });

  const carRef = useRef(null);
  const isCarInView = useInView(carRef, { once: true, threshold: 0.1 });

  const blogsRef = useRef(null);
  const isBlogsInView = useInView(blogsRef, { once: true, threshold: 0.1 });

  const globalRef = useRef(null);
  const isGlobalInView = useInView(globalRef, { once: true, threshold: 0.1 });

  const discHandRef = useRef(null);
  const isDiscHandInView = useInView(discHandRef, { once: true, threshold: 0.1 });

  const teamRef = useRef(null);
  const isTeamInView = useInView(teamRef, { once: true, threshold: 0.1 });

  const investorsRef = useRef(null);
  const isInvestorsInView = useInView(investorsRef, { once: true, threshold: 0.1 });

  const preFooterRef = useRef(null);
  const isPreFooterInView = useInView(preFooterRef, { once: true, threshold: 0.1 });

  return (
    <main className="main-container">
      <motion.section
        ref={bannerRef}
        initial="hidden"
        animate={isBannerInView ? 'visible' : 'hidden'}
        variants={sectionVariants}
        className="banner-section"
      >
        <Banner />
      </motion.section>

      <motion.section
        ref={blogsRef}
        initial="hidden"
        animate={isBlogsInView ? 'visible' : 'hidden'}
        variants={sectionVariants}
        className="comm-section blogs-section"
      >
        <Blogs />
      </motion.section>

      <motion.div
        ref={partnersRef}
        initial="hidden"
        animate={isPartnersInView ? 'visible' : 'hidden'}
        variants={sectionVariants}
        className="partner-wrap"
      >
        <CarCompanyLogoSlider />
      </motion.div>

      <motion.div
        ref={cardsRef}
        initial="hidden"
        animate={isCardsInView ? 'visible' : 'hidden'}
        variants={sectionVariants}
        className="cards-wrap"
      >
        <TrucksAndOffHighway />
      </motion.div>

      <motion.div
        ref={discRef}
        initial="hidden"
        animate={isDiscInView ? 'visible' : 'hidden'}
        variants={sectionVariants}
        className="disc-wrap"
      >
        <ExpertiesArea />
      </motion.div>

      <motion.section
        ref={carRef}
        initial="hidden"
        animate={isCarInView ? 'visible' : 'hidden'}
        variants={sectionVariants}
        className="car-section"
      >
        <CarSection />
      </motion.section>

      <motion.section
        ref={globalRef}
        initial="hidden"
        animate={isGlobalInView ? 'visible' : 'hidden'}
        variants={sectionVariants}
        className="comm-section global-section"
      >
        <GlobalReach />
      </motion.section>
    </main>
  );
}