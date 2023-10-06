import type { JobEntry } from '../../types.ts';
import { employmentPeriod } from './helpers.ts';

type JobProps = {
  data: JobEntry
}

export function Job({ data }: JobProps) {
  const title = data.title
    ? `- ${data.title}`
    : '';
  return (
    <section>
      <header>
        <h3>{data.company} {title}</h3>
        <div class={'dates'}>{employmentPeriod(data.dates.start, data.dates.end)}</div>
        <p>{data.description}</p>
      </header>
    </section>
  );
}
