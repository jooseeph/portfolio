'use client';

import React from 'react';
import SectionHeading from './section-heading';
import { motion } from 'framer-motion';
import { useSectionInView } from '@/lib/hooks';

export default function About() {
  const { ref } = useSectionInView('About');

  return (
    <motion.section
      ref={ref}
      className='mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28'
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id='about'
    >
      <SectionHeading>About me</SectionHeading>
      <p className='mb-3'>
        After graduating with a degree in{' '}
        <span className='font-medium'>Information Technology</span>, I delved
        into my passion for programming. Through hands-on experience and
        dedication, I've become proficient in{' '}
        <span className='font-medium'>front-end web development</span>. I thrive
        on the thrill of problem-solving, finding joy in crafting elegant
        solutions. My go-to tech stack includes{' '}
        <span className='font-medium'>
          React, Next.js, HTML, CSS, and JavaScript
        </span>
        , with a keen eye for UI/UX design. Eager to broaden my horizons, I'm
        constantly exploring new technologies and methodologies. Currently
        seeking exciting opportunities in{' '}
        <span className='font-medium'>front-end development</span>.
      </p>

      <p>
        <span className='italic'>Outside of coding</span>, I enjoy immersing
        myself in creative pursuits, whether it's sketching, photography, or
        discovering new music. I'm passionate about personal growth and
        currently diving into{' '}
        <span className='font-medium'>
          user-centric design principles and accessibility
        </span>{' '}
        to enhance my skills further.
      </p>
    </motion.section>
  );
}
