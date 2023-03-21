import React, {useState} from 'react';
import {createStyles} from '@mantine/core';
import {useLocation} from 'react-router-dom';

import {NavbarItemGroup} from 'components/UI/molecules';
import {ScrollArea, Navbar} from 'components/UI/atoms';

import {navigationItems} from './navigationItems';

const useStyles = createStyles(theme => ({
  navbar: {
    backgroundColor:
      theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
    paddingBottom: 0,
  },

  links: {
    marginLeft: -theme.spacing.md,
    marginRight: -theme.spacing.md,
  },

  linksInner: {
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,
  },
}));

interface PageNavbarProps {
  opened: boolean;
}

export const PageNavbar = ({opened}: PageNavbarProps) => {
  const location = useLocation();
  const activeState = useState<string>(
    navigationItems.find(item => item.link === location.pathname)?.label ??
      navigationItems[0].label
  );
  const {classes} = useStyles();

  return (
    <Navbar
      width={{sm: 250}}
      p="md"
      hidden={!opened}
      className={classes.navbar}
    >
      <Navbar.Section grow className={classes.links} component={ScrollArea}>
        <div className={classes.linksInner}>
          {navigationItems.map(item => (
            <NavbarItemGroup
              activeState={activeState}
              {...item}
              key={item.label}
            />
          ))}
        </div>
      </Navbar.Section>
    </Navbar>
  );
};
