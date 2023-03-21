import React from 'react';
import {createStyles} from '@mantine/core';
import {useNavigate} from 'react-router-dom';

import {Image, Paper, GoogleLoginButton, Stack} from 'components/UI/atoms';
import darkBackground from 'lib/assets/cognizant_background_right_dark.png';
import lightBackground from 'lib/assets/cognizant_background_right.png';
import logo from 'lib/assets/softvision_teal.png';
import {useAuthContext} from 'hooks';
import {PagePaths} from 'routes/PagePaths';

const useStyles = createStyles(theme => ({
  wrapper: {
    minHeight: '100vh',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'right',
    backgroundImage: `url(${
      theme.colorScheme === 'dark' ? darkBackground : lightBackground
    })`,
    backgroundColor: theme.white,
  },

  form: {
    borderRight: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[3]
    }`,
    minHeight: 'inherit',
    maxWidth: 450,
    paddingTop: 80,
    backgroundColor:
      theme.colorScheme === 'dark'
        ? theme.colors.dark[0]
        : theme.colors.gray[0],

    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      maxWidth: '100%',
    },
  },

  googleButton: {
    paddingTop: 80,
  },
}));

export const GoogleLogin = () => {
  const {classes} = useStyles();
  const {login} = useAuthContext();
  const navigate = useNavigate();

  const handleCallback = (response: ApprovedAny) => {
    login(response.credential, () => {
      navigate(PagePaths.CECTracker);
    });
  };

  return (
    <div className={classes.wrapper}>
      <Paper className={classes.form} radius={0}>
        <Stack align="center">
          <Image src={logo} height={128} width={350} />
          <GoogleLoginButton
            className={classes.googleButton}
            onCallbackResponse={handleCallback}
          />
        </Stack>
      </Paper>
    </div>
  );
};
