import { Project } from '@/types'

export const getSkills = (theme: 'light' | 'dark') => {
  return [
    {
      label: 'ReactJS',
      imgPath:
        theme !== 'light'
          ? '/images/skills/react-light.png'
          : '/images/skills/react-dark.png',
    },
    {
      label: 'NextJS',
      imgPath:
        theme !== 'light'
          ? '/images/skills/nextjs-light.png'
          : '/images/skills/nextjs-dark.png',
    },
    {
      label: 'VueJS',
      imgPath:
        theme !== 'light'
          ? '/images/skills/vuejs-light.png'
          : '/images/skills/vuejs-dark.png',
    },
    {
      label: 'Flutter',
      imgPath:
        theme !== 'light'
          ? '/images/skills/flutter-light.png'
          : '/images/skills/flutter-dark.png',
    },
    {
      label: 'TailwindCSS',
      imgPath:
        theme !== 'light'
          ? '/images/skills/tailwindcss-light.png'
          : '/images/skills/tailwindcss-dark.png',
    },
    {
      label: 'HTML',
      imgPath: '/images/skills/html.png',
    },
    {
      label: 'CSS',
      imgPath: '/images/skills/css.png',
    },
    {
      label: 'Sass',
      imgPath: '/images/skills/sass.png',
    },
    {
      label: 'NodeJS',
      imgPath:
        theme !== 'light'
          ? '/images/skills/nodejs-light.png'
          : '/images/skills/nodejs-dark.png',
    },
    {
      label: 'Express',
      imgPath:
        theme !== 'light'
          ? '/images/skills/express-light.png'
          : '/images/skills/express-dark.png',
    },
    {
      label: 'FastAPI',
      imgPath: '/images/skills/fastapi.png',
    },
    {
      label: 'Redis',
      imgPath:
        theme !== 'light'
          ? '/images/skills/redis-light.png'
          : '/images/skills/redis-dark.png',
    },
    {
      label: 'MongoDB',
      imgPath: '/images/skills/mongodb.png',
    },
    {
      label: 'MySQL',
      imgPath:
        theme !== 'light'
          ? '/images/skills/mysql-light.png'
          : '/images/skills/mysql-dark.png',
    },
    {
      label: 'Docker',
      imgPath: '/images/skills/docker.png',
    },
    {
      label: 'Git',
      imgPath: '/images/skills/git.png',
    },
    {
      label: 'C++',
      imgPath: '/images/skills/cpp.png',
    },
    {
      label: 'JavaScript',
      imgPath: '/images/skills/javascript.png',
    },
    {
      label: 'TypeScript',
      imgPath: '/images/skills/typescript.png',
    },
    {
      label: 'Java',
      imgPath:
        theme !== 'light'
          ? '/images/skills/java-light.png'
          : '/images/skills/java-dark.png',
    },
    {
      label: 'Python',
      imgPath:
        theme !== 'light'
          ? '/images/skills/python-light.png'
          : '/images/skills/python-dark.png',
    },
    {
      label: 'Kotlin',
      imgPath:
        theme !== 'light'
          ? '/images/skills/kotlin-light.png'
          : '/images/skills/kotlin-dark.png',
    },
    {
      label: 'Dart',
      imgPath:
        theme !== 'light'
          ? '/images/skills/dart-light.png'
          : '/images/skills/dart-dark.png',
    },
  ]
}

export const projects: Project[] = [
  {
    imgPath: '/images/code.png',
    name: 'Devstore',
    description:
      'A developer-centric platform facilitating seamless saving and sharing of projects, including websites, apps, and games.',
    shortDescription:
      'A developer-centric platform facilitating seamless saving and sharing of projects, including websites, apps, and games.',
    technologies: [
      'NodeJS',
      'ReactJS',
      'MongoDB',
      'Javascript',
      'Typescript',
      'HTML',
      'CSS',
      'TailwindCSS',
    ],
  },
  {
    imgPath: '/images/code.png',
    name: 'Bus Tracking Application',
    description:
      'A real-time bus tracking application designed to improve transit efficiency with live location updates, interactive maps, and seamless travel planning.',
    shortDescription:
      'A real-time bus tracking application designed to improve transit efficiency with live location updates, interactive maps, and seamless travel planning.',
    technologies: [
      'NodeJS',
      'Kotlin',
      'ReactJS',
      'Javascript',
      'Socket.IO',
      'Android Jetpack Compose',
    ],
  },
  {
    imgPath: '/images/code.png',
    name: 'Food Delivery Ecommerce Application',
    description:
      'A seamless food ordering application connecting users with restaurants for quick browsing, ordering, and tracking.',
    shortDescription:
      'A seamless food ordering application connecting users with restaurants for quick browsing, ordering, and tracking.',
    technologies: ['Flutter', 'Firebase', 'Dart'],
  },
]
