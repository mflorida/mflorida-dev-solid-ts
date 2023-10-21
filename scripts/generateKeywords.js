const levels = ['Senior', 'Lead'];
const descriptions = ['Web', 'Frontend', 'Front-end', 'Front End', 'JavaScript', 'Full-stack', 'Full Stack'];
const roles = ['Developer', 'Engineer'];

const jobTitleMap = new Map([
  [roles[0], true]
]);

descriptions.forEach(desc => {
  roles.forEach(role => {
    // example: 'Front-end Engineer'
    const descRole = `${desc} ${role}`;
    if (/(Web Engineer)$/i.test(descRole)) {
      return;
    }
    jobTitleMap.set(descRole, true);
    levels.forEach(level => {
      // example: 'Senior Front-end Engineer'
      const fullTitle = `${level} ${desc} ${role}`.trim();
      if (/^(Lead (JavaScript|Full[-\s]stack))/i.test(fullTitle)) {
        return;
      }
      jobTitleMap.set(fullTitle, true);
    });
  });
});

const jobTitles = [...jobTitleMap.keys()];

const currentDate = new Date();
const currentYear = currentDate.getFullYear();
const currentMonth = currentDate.getMonth() + 1;
const currentDay = currentDate.getDate();

const timeZoneOffset = currentDate.getTimezoneOffset();
const localDateTime = `${currentYear}-${currentMonth}-${currentDay}T01:01:01.001${timeZoneOffset}`;
const localDate = new Date(localDateTime);

// console.log('// localDateTime', localDateTime);
// console.log('// localDate', localDate);
// console.log('// Created: ' + localDate.toLocaleString() + '\n\n');

const localYear = localDate.getFullYear();
// const localMonth = localDate.getMonth() + 1;
// const localDay = localDate.getDate();

function since(year) {
  return localYear - year;
}

const technologies = {
  'Front-end Development': since(2010),
  HTML: since(2010),
  HTML5: since(2011),
  'HTML 5': since(2011),
  CSS: since(2010),
  CSS3: since(2010),
  'CSS Modules': since(2022),
  'Tailwind CSS': since(2021),
  JavaScript: since(2012),
  'ES6+': since(2016),
  React: since(2019),
  JSX: since(2019),
  TypeScript: since(2021),
  Redux: since(2021),
  Git: since(2017),
  Bash: since(2017),
  'Shell scripting': since(2017)
}

const baseKeywords = [
  'JavaScript',
  'TypeScript',
  'ES6+',
  'React',
  'React.js',
  'ReactJS',
  'SolidJS',
  'Solid JS',
  'Redux',
  'Zustand',
  'JSX',
  'HTML',
  'HTML5',
  'HTML 5',
  'Semantic HTML',
  'CSS',
  'CSS3',
  'CSS 3',
  'Modern CSS',
  'SASS',
  'SCSS',
  'CSS Modules',
  'Tailwind CSS',
  'CSS-in-JS',
  'Git',
  'GitHub',
  'Jest',
  'Shell Scripting',
  'Bash Scripting',
  'CLI Scripting',
  'NodeJS Scripting',
  'Ruby scripting',
  'Turborepo',
  'Turbo',
  'monorepo',
  'XML',
  'YAML'
];

const output = [
  '// ==================================================',
  '// Auto-generated file. DO NOT EDIT.',
  '// Created: ' + currentDate.toLocaleString(),
  '// ==================================================',
  ''
];

output.push(
  'export const jobTitles = ' +
  JSON.stringify(jobTitles, null, 2) +
  ' as const;\n'
);

output.push(
  'export const baseKeywords = ' +
  JSON.stringify(baseKeywords, null, 2) +
  ' as const;\n')

// Hack to use a shell command to write output to a file.
console.log(output.join('\n'));
