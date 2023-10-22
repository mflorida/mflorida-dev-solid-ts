import { JSXElement, Header } from '../../types.ts';
import { jobTitles, baseKeywords } from '../../keywords.ts';

type JobTitle = typeof jobTitles[number];
type Keyword = typeof baseKeywords[number];

type ResumeContent = {
  header: Header,
  profile: JSXElement,
  keywords: Keyword[],
  stack?: string[],
  jobs: JobEntry[],
}

export type JobEntry = {
  company: string,
  title: JobTitle | string,
  dates: JobDates,
  description: JSXElement,
  skills?: string[],
  keywords: Keyword[],
  // [k: string]: any,  // <-- cop-out 🤷‍♂️
}

type JobDates = {
  start: string,
  end: string,
}

export const content: ResumeContent = {
  header: {
    name: 'Mark M. Florida',
    tooltip: `I refuse to spell it 'Frontend'. How is that even pronounced?`,
    role: `Senior Front-end Engineer`
  },
  profile: (
    <>
      <p>
        I'm an experienced senior front-end developer currently looking to join a team who's passionate about
        shipping quality code that delivers real-world benefits in UX for end-users as well as fostering good
        DX through thoughtfully built component libraries and APIs.
      </p>
      <p>
        I've worked in all stages of the development lifecycle, from whiteboarding to release, and always keep
        a project's overall goals in mind when contributing in ways that leverage my skills and experience. I'm
        eager to learn and implement new technologies when needed. I know when to dig into code and when to dig
        for more information before cracking open an IDE. I'm also comfortable diving into back-end code when
        necessary to help track down an issue or identify an area that needs tweaking.
      </p>
      <p>
        As a front-end developer, I take UX and DX very seriously. I'm passionate about creating performant and
        intuitive UIs using modern best practices with front-end technologies including JavaScript, React,
        TypeScript, semantic HTML, advanced CSS, Webpack, Tailwind CSS, etc. I thrive on collaborating with other
        specialists such as: UX designers, back-end developers, QA, and DevOps engineers. I'm also comfortable
        interfacing directly with clients and stakeholders as needed.
      </p>
    </>
  ) as DocumentFragment,
  keywords: [...baseKeywords],
  stack: [],
  jobs: [
    {
      title: 'Senior/Lead Front-end Engineer',
      company: 'Freelance',
      dates: {
        start: '2023-01-01',
        end: 'Present'
      },
      description: (
        <p class={'job-description'}>
          Working with clients to… Build web application UIs using modern best-practices with JavaScript, React,
          TypeScript, and 3rd-party libraries • Mentor front-end developers to modernize skillsets • Improve
          developer experience through streamlined tooling • Improve code quality through standardization of
          patterns used • Develop strategies to modernize deprecated legacy front-end code • Publish documentation
          and examples for modernization • Perform code reviews • Handle feature development and bugfixes
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
      title: 'Senior Front-end Engineer',
      company: 'Comcast (Contract)',
      dates: {
        start: '2022-08-15',
        end: '2022-12-21'
      },
      description: (
        <p class={'job-description'}>
          Modernized UI component library used by downstream Comcast teams • Improved CLI tools for scaffolding
          and component development • Migrated packages to Turbo monorepo • Improved TypeScript code quality
          • Pruned deprecated dependencies and refactored as needed • Updated unit tests to reflect current
          implementations • Improved documentation through reorganization and inclusion of code samples
          • Participated in code reviews and PR approvals
        </p>
      ) as Element,
      keywords: [
        'JavaScript',
        'TypeScript',
      ],
    },
    {
      title: 'Senior Front-end Engineer',
      company: 'Formidable Labs',
      dates: {
        start: '2022-05-02',
        end: '2022-07-25'
      },
      description: (
        <p class={'job-description'}>
          Worked on advanced React-based front-end projects for major clients • Used modern JavaScript
          patterns and best-practices for front-end development • Updated and added unit and e2e tests
          as needed • Used advanced SCSS patterns through Styled Components • Participated in code
          reviews and PR approvals
        </p>
      ) as Element,
      keywords: [
        'JavaScript',
        'React',
        'ReactJS',
        'React.js',
      ]
    },
    {
      title: 'Senior Front-end Engineer',
      company: 'Charter Communications (Contract)',
      dates: {
        start: '2021-09-08',
        end: '2022-04-29'
      },
      description: (
        <p class={'job-description'}>
          Improved JavaScript/React code quality and established migration strategy for critical internal web
          application • Defined and demonstrated patterns for migration of React components away from 'Styled
          Components' library to a greatly simplified implementation using Tailwind CSS • Greatly improved
          developer experience with these new patterns • Managed daily workflow with industry-standard tools
          like Jira and Bitbucket (Git)
        </p>
      ) as Element,
      keywords: [
        'JavaScript',
        'React',
        'ReactJS',
        'React.js',
      ]
    },
    {
      title: 'Senior Front-end Engineer',
      company: 'Comcast (Contract)',
      dates: {
        start: '2023-08-15',
        end: '2023-12-21'
      },
      description: (
        <p class={'job-description'}>
          Modernized UI component library used by downstream Comcast teams • Improved CLI tools for scaffolding
          and component development • Migrated packages to Turbo monorepo • Improved TypeScript code quality
          • Pruned deprecated dependencies and refactored as needed • Updated unit tests to reflect current
          implementations • Improved documentation through reorganization and inclusion of code samples
          • Participated in code reviews and PR approvals
        </p>
      ) as Element,
      keywords: [
        'JavaScript',
        'React',
        'ReactJS',
        'React.js',
      ]
    },
  ]
};
