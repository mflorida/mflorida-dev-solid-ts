const levels = ['Lead', 'Senior'];
const descriptions = ['Web', 'Frontend', 'Front-end', 'JavaScript', 'Full-stack'];
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
      if (/^(Lead (JavaScript|Full-stack))/i.test(fullTitle)) {
        return;
      }
      jobTitleMap.set(fullTitle, true);
    });
  });
});

const jobTitles = [...jobTitleMap.keys()];

const baseKeywords = [
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
];

const output = [
  '/* Auto-generated file. DO NOT EDIT */'
];

output.push(
  'export const jobTitles = ' +
  JSON.stringify(jobTitles, null, 2) +
  ' as const;'
);

output.push(
  'export const baseKeywords = ' +
  JSON.stringify(baseKeywords, null, 2) +
  ' as const;')

// Hack to use a shell command to write output to a file.
console.log(output.join('\n\n'));
