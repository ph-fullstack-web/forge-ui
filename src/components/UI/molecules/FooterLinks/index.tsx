import React from 'react';

import {Anchor, Group} from 'components/UI/atoms';

const data: FooterData[] = [
  {link: '', label: 'Contact'},
  {link: '', label: 'Privacy'},
  {link: '', label: 'Blogs'},
  {link: '', label: 'Store'},
  {link: '', label: 'Careers'},
];

interface FooterData {
  link: string;
  label: string;
}

export const FooterLinks = () => {
  return (
    <Group>
      {data.map(({label, link}) => (
        <Anchor key={label} color="dimmed" link={link}>
          {label}
        </Anchor>
      ))}
    </Group>
  );
};
