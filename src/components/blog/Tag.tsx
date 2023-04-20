import Link from '@docusaurus/Link';
import { Tag as ITag } from '@site/src/interfaces/blog';
import React from 'react';

export function Tag({ label, permalink }: ITag): JSX.Element {
  return (
    <Link
      to={permalink}
      className="text-[90%] border-solid border pt-[0.2rem] px-[0.5rem] pb-[0.3rem] hover:border-primary transition duration-200 hover:no-underline border-gray-500 rounded-[0.4rem]"
    >
      {label}
    </Link>
  );
}
