import React from 'react';
import {createStyles} from '@mantine/core';
import {useMediaQuery} from '@mantine/hooks';

import {Container, Footer, Text} from 'components/UI/atoms';
import {FooterLinks, SocialLinks} from 'components/UI/molecules';

const useStyles = createStyles(theme => ({
  footer: {
    marginTop: 120,
    borderTop: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]
    }`,
  },

  inner: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: theme.spacing.sm,
    paddingBottom: theme.spacing.sm,

    [theme.fn.smallerThan('xs')]: {
      flexDirection: 'column',
    },
  },

  links: {
    [theme.fn.smallerThan('xs')]: {
      marginTop: theme.spacing.xs,
    },
  },
}));

export const PageFooter = () => {
  const {classes} = useStyles();
  const matches = useMediaQuery('(min-width: 768px)');

  return (
    <Footer height={matches ? 60 : 120}>
      <Container fluid={true} className={classes.inner}>
        <Text color="dimmed">© 2022 Cognizant Softvision</Text>
        <FooterLinks />
        <SocialLinks className={classes.links} />
      </Container>
    </Footer>
  );
};
