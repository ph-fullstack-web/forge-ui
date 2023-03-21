import React, {useState} from 'react';
import {Outlet} from 'react-router-dom';

import {AppShell, Title} from 'components/UI/atoms';
import {PageFooter, PageHeader, PageNavbar} from 'components/UI/organisms';

interface AppLayoutProps {
  pageTitle: string;
}

export const AppLayout = ({pageTitle}: AppLayoutProps) => {
  const openedState = useState<boolean>(false);

  return (
    <AppShell
      padding="md"
      header={<PageHeader openedState={openedState} />}
      navbar={<PageNavbar opened={openedState[0]} />}
      footer={<PageFooter />}
      navbarOffsetBreakpoint="md"
      styles={theme => ({
        main: {
          backgroundColor:
            theme.colorScheme === 'dark'
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      })}
    >
      <Title order={2} mb="md">
        {pageTitle}
      </Title>
      <Outlet />
    </AppShell>
  );
};
