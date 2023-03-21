import React from 'react';
import {ActionIcon, Group} from 'components/UI/atoms';
import {
  IconBrandLinkedin,
  IconBrandTwitter,
  IconWorld,
  TablerIcon,
} from '@tabler/icons';

interface SocialData {
  link: string;
  icon: TablerIcon;
}

const socialData: SocialData[] = [
  {
    link: 'https://www.linkedin.com/company/softvision',
    icon: IconBrandLinkedin,
  },
  {
    link: 'https://twitter.com/wearesoftvision',
    icon: IconBrandTwitter,
  },
  {
    link: 'https://www.cognizantsoftvision.com/',
    icon: IconWorld,
  },
];

interface SocialLinksProps {
  className?: string;
}

export const SocialLinks = ({className}: SocialLinksProps) => {
  const handleClick = (link: string) => {
    window.open(link, 'blank');
  };

  return (
    <Group className={className} spacing="xs" position="right" noWrap>
      {socialData.map(item => (
        <ActionIcon
          key={item.link}
          size="lg"
          variant="default"
          radius="xl"
          onClick={() => handleClick(item.link)}
        >
          <item.icon size={18} stroke={1.5} />
        </ActionIcon>
      ))}
    </Group>
  );
};
