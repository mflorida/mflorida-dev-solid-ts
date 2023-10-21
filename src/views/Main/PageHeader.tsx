import { A } from '@solidjs/router';
import './PageHeader.scss';

export function PageHeader() {
  return (
    <header id={'page-header'}>
      <nav>
        <A href={'/'} end>Home</A>
        <A href={'/resume'}>Résumé</A>
      </nav>
      <span class={'links'}>
        <a class={'github-link'} href={'https://github.com/mflorida'} target={'_blank'}>&nbsp;</a>
      </span>
    </header>
  )
}
