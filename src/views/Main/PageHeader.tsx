import { A } from '@solidjs/router';
import './PageHeader.scss';

export function PageHeader() {
  return (
    <header id={'page-header'}>
      <nav>
        <A end href={'/'}>Home</A>
        <A end href={'/resume'}>Résumé</A>
      </nav>
      <span class={'links'}>
        <a class={'github-link'} href={'https://github.com/mflorida'} target={'_blank'}>
          <span></span>
        </a>
      </span>
    </header>
  )
}
