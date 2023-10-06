import { jobTitles, baseKeywords } from './keywordList.ts';

export type JobTitle = typeof jobTitles[number];
export type Keyword = typeof baseKeywords[number];

type JSXElement = (Element | DocumentFragment | string | undefined | null);

type Header = {
  name: JSXElement,
  title: JSXElement,
}

export type Content = {
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
