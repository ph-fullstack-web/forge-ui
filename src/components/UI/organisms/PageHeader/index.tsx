import React from 'react';
import {useMantineColorScheme} from '@mantine/core';

import {Burger, Group, Header, Image, MediaQuery} from 'components/UI/atoms';
import {UserButton} from 'components/UI/molecules';
import darkLogo from 'lib/assets/softvision_rev.png';
import lightLogo from 'lib/assets/softvision_teal.png';

interface PageHeaderProps {
  openedState: [boolean, React.Dispatch<React.SetStateAction<boolean>>];
}

export const PageHeader = ({
  openedState: [opened, setOpened],
}: PageHeaderProps) => {
  const {colorScheme} = useMantineColorScheme();

  const handleBurgerClick = () => {
    setOpened(!opened);
  };

  return (
    <Header height={60}>
      <Group position="apart">
        <MediaQuery largerThan="md" styles={{display: 'none'}}>
          <Burger opened={opened} onClick={handleBurgerClick} ml="sm" />
        </MediaQuery>
        <Image
          src={colorScheme === 'dark' ? darkLogo : lightLogo}
          height={60}
          width={200}
          fit="contain"
        />
        <UserButton />
      </Group>
    </Header>
  );
};
