import project1 from './assets/projects/project1.jpg'
import project2 from './assets/projects/project2.png'
import project3 from './assets/projects/project3_1.png'
import project3Detail from './assets/projects/project3_2.png'
import mahjongLobby from './assets/projects/mahjong-zero-lobby.png'
import mahjongTable from './assets/projects/mahjong-zero-table.png'
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
    title: 'Mahjong Zero',
    category: 'Web multiplayer',
    short: 'Riichi strategy. Shared tables. Original worlds.',
    description:
      'A browser-based riichi mahjong game with local bot matches, private multiplayer rooms, and a 3D table. Built with React and TypeScript, Three.js rendering, and an authoritative Colyseus server backed by a shared game and scoring engine.',
    images: [mahjongLobby, mahjongTable],
    technologies: ['React', 'TypeScript', 'Three.js', 'Colyseus'],
    liveUrl: 'https://mahjong-zero.vercel.app/',
    sourceUrl: 'https://github.com/sunsongqiao2018/mahjongZero',
  },
  {
    id: '02',
    title: 'VR Multiplayer Casino Game',
    category: 'Virtual reality',
    short: 'Real connections. Virtual worlds.',
    description:
      'Designed and improved key systems and features for a social casino game. The immersive VR experience brings players together with the feeling of sharing a real space. My favorite part is joining players in the game and seeing them enjoy the experience and compete.',
    images: [project1],
    technologies: ['Unity', 'C#', 'VR', 'Photon'],
  },
  {
    id: '03',
    title: 'Slot Machine Game',
    category: 'Game development',
    short: 'Built to play. Engineered to perform.',
    description:
      'Led the development of multiple slot machine titles, with a focus on captivating gameplay, exceptional quality and performance, and the standards required for charitable applications.',
    images: [project2],
    technologies: ['Unity', 'C#', '.NET', 'Mathematics'],
  },
  {
    id: '04',
    title: 'Immersive Kinect Gallery Experience',
    category: 'Interactive experience',
    short: 'Movement becomes the interface.',
    description:
      'For my bachelor’s final project, my tutor and I explored the possibilities of Microsoft Kinect. This interactive gallery investigates how motion sensing can create immersive experiences without the weight of a VR headset.',
    images: [project3, project3Detail],
    technologies: ['Unity', 'Kinect', 'Interactive'],
  },
]
