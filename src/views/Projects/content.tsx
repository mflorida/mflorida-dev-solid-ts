import { JSXElement } from '../../types.ts';
import { baseKeywords } from '../../keywords.ts';

type Keyword = typeof baseKeywords[number];

type Header = {
  title: string,
}

type ProjectsContent = {
  header: Header,
  // profile: JSXElement,
  keywords: Keyword[],
  stack?: string[],
  projects: ProjectEntry[],
}

type ProjectEntry = {
  company?: string,
  title?: string,
  description?: JSXElement,
  skills?: string[],
  keywords?: Keyword[],
  // [k: string]: any,  // <-- cop-out 🤷‍♂️
}

export const content: ProjectsContent = {
  header: {
    title: 'Projects',
  },
  keywords: [...baseKeywords],
  stack: [],
  projects: [
    {
      title: 'Project 1',
      // company: 'Freelance',
      description: (
        <p class={'description'}>
          Project 1 description...
        </p>
      ) as Element,
      keywords: [
        'JavaScript',
        'TypeScript',
        'ES6+',
        'React',
        'React.js',
        'ReactJS',
        'JSX',
        'Semantic HTML',
        'HTML',
        'HTML5',
        'HTML 5',
        'Modern CSS',
        'SASS',
        'Tailwind CSS',
        'Git',
        'GitHub',
        'Jest',
        'Shell Scripting',
        'NodeJS Scripting',
        'Turborepo',
      ],
    },
    {
      title: 'Project 2',
      // company: 'Comcast (Contract)',
      description: (
        <p class={'description'}>
          Project 2 description...
        </p>
      ) as Element,
      keywords: [
        'JavaScript',
        'TypeScript',
      ],
    },
  ]
};
