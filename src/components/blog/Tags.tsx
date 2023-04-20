import React from 'react';
import { Tag } from '@site/src/interfaces/blog';
import { Tag as TagComponent } from './Tag';

interface TagsProps {
  tags: Tag[];
}

export function Tags({ tags }: TagsProps) {
  return (
    <>
      <b>Tags:</b>
      <ul className="list-inside inline p-0 ml-2">
        {tags.map((tag) => (
          <li
            key={tag.permalink}
            className="inline-block mt-0 ml-0 mr-[0.4rem] mb-2"
          >
            <TagComponent {...tag} />
          </li>
        ))}
      </ul>
    </>
  );
}
