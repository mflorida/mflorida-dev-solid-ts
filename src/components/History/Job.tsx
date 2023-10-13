import type { JobEntry } from '../../types.ts';
import { employmentPeriod } from './helpers.ts';
import style from './style.module.scss';

type JobProps = {
  data: JobEntry
}

export function Job({ data }: JobProps) {
  const title = data.title
    ? `- ${data.title}`
    : '';
  return (
    <li class={style.job}>
      <header>
        <h3>{data.company} {title}</h3>
        <h4 class={'dates'}>
          {employmentPeriod(data.dates.start, data.dates.end)}
        </h4>
      </header>
      {data.description}
    </li>
  );
}
