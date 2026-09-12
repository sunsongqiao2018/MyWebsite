import project1 from './assets/projects/project1.jpg'
import project2 from './assets/projects/project2.png'
import project3 from './assets/projects/project3_1.png'
import project3Detail from './assets/projects/project3_2.png'
export const skills = [
  'C#',
  'ASP.NET',
  'Unity3D',
  'C++',
  'Unreal',
  'AWS Cloud Services',
  'JavaScript',
  'React',
  'React Native',
  'CI/CD',
  'Test Automation',
]
export const projects = [
  {
    id: '01',
    title: 'VR Multiplayer Casino Game',
    category: 'Virtual reality',
    short: 'Real connections. Virtual worlds.',
    description:
      'Designed and improved key systems and features for a social casino game. The immersive VR experience brings players together with the feeling of sharing a real space. My favorite part is joining players in the game and seeing them enjoy the experience and compete.',
    images: [project1],
    technologies: ['Unity', 'C#', 'VR', 'Photon'],
  },
  {
    id: '02',
    title: 'Slot Machine Game',
    category: 'Game development',
    short: 'Built to play. Engineered to perform.',
    description:
      'Led the development of multiple slot machine titles, with a focus on captivating gameplay, exceptional quality and performance, and the standards required for charitable applications.',
    images: [project2],
    technologies: ['Unity', 'C#', '.NET', 'Mathematics'],
  },
  {
    id: '03',
    title: 'Immersive Kinect Gallery Experience',
    category: 'Interactive experience',
    short: 'Movement becomes the interface.',
    description:
      'For my bachelor’s final project, my tutor and I explored the possibilities of Microsoft Kinect. This interactive gallery investigates how motion sensing can create immersive experiences without the weight of a VR headset.',
    images: [project3, project3Detail],
    technologies: ['Unity', 'Kinect', 'Interactive'],
  },
]
