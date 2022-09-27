import Link from 'next/link';
import type { ReactNode } from 'react';

import { AppConfig } from '@/utils/AppConfig';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => (
  <div>
    {props.meta}

    <div>
      <div>
        <div>
          <div>{AppConfig.title}</div>
          <div>{AppConfig.description}</div>
        </div>
        <div>
          <ul>
            <li>
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link href="/about/">
                <a>About</a>
              </Link>
            </li>
            <li>
              <a href="https://github.com/ordinaryCoder/reacted-admin-fe">
                GitHub
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div>{props.children}</div>

      <div>
        © Copyright {new Date().getFullYear()} {AppConfig.title}.{' '}
        <a href="https://github.com/ordinaryCoder/reacted-admin-fe">
          OVAA Tech
        </a>
      </div>
    </div>
  </div>
);

export { Main };
