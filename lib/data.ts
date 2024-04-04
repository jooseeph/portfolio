import React from 'react';
import { CgWorkAlt } from 'react-icons/cg';
import { FaAngular, FaReact } from 'react-icons/fa';
import { LuGraduationCap } from 'react-icons/lu';
import corpcommentImg from '@/public/corpcomment.png';
import rmtdevImg from '@/public/rmtdev.png';
import wordanalyticsImg from '@/public/wordanalytics.png';

export const links = [
  {
    name: 'Home',
    hash: '#home',
  },
  {
    name: 'About',
    hash: '#about',
  },
  {
    name: 'Projects',
    hash: '#projects',
  },
  {
    name: 'Skills',
    hash: '#skills',
  },
  {
    name: 'Experience',
    hash: '#experience',
  },
  {
    name: 'Contact',
    hash: '#contact',
  },
] as const;

export const experiencesData = [
  {
    title: 'EA bootcamp',
    location: 'Baku, Az',
    description: 'I graduated after 6 months of studying.',
    icon: React.createElement(LuGraduationCap),
    date: '2022',
  },
  {
    title: 'Front-End Developer',
    location: 'Baku, Az',
    description:
      'I have 4 months of experience as an Angular developer during an internship, where I focused on front-end development tasks, refining my skills in the Angular framework.',
    icon: React.createElement(FaAngular),
    date: '2023',
  },
  {
    title: 'Full-Stack Developer',
    location: 'Baku, Az',
    description:
      'I have 4 months of experience as a React developer during an internship, where I specialized in front-end development, gaining proficiency in React framework and contributing to dynamic web application projects.',
    icon: React.createElement(FaReact),
    date: '2023 - 2024',
  },
] as const;

export const projectsData = [
  {
    title: 'CorpComment',
    description:
      'I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.',
    tags: ['React', 'Next.js', 'MongoDB', 'Tailwind', 'Prisma'],
    imageUrl: corpcommentImg,
  },
  {
    title: 'rmtDev',
    description:
      'Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.',
    tags: ['React', 'TypeScript', 'Next.js', 'Tailwind', 'Redux'],
    imageUrl: rmtdevImg,
  },
  {
    title: 'Word Analytics',
    description:
      'A public web app for quick analytics on text. It shows word count, character count and social media post limits.',
    tags: ['React', 'Next.js', 'SQL', 'Tailwind', 'Framer'],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Next.js',
  'Node.js',
  'Git',
  'Tailwind',
  'MongoDB',
  'Redux',
  'Framer Motion',
] as const;
