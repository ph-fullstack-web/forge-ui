import React, {useState} from 'react';
import {createStyles} from '@mantine/core';
import {useDisclosure} from '@mantine/hooks';
import {
  IconSettings,
  IconLogout,
  IconChevronDown,
  IconChevronUp,
} from '@tabler/icons';

import {
  Avatar,
  Group,
  Menu,
  Paper,
  Text,
  UnstyledButton,
} from 'components/UI/atoms';
import {useAuthContext} from 'hooks';

import {ThemeButton} from '../ThemeButton';

const useStyles = createStyles(theme => ({
  user: {
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
    padding: `${theme.spacing.xs}px ${theme.spacing.sm}px`,
    borderRadius: theme.radius.sm,
    transition: 'background-color 100ms ease',

    '&:hover': {
      backgroundColor:
        theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
    },

    [theme.fn.smallerThan('xs')]: {
      display: 'none',
    },
  },

  userActive: {
    backgroundColor:
      theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
  },

  avatar: {
    [theme.fn.largerThan('xs')]: {
      display: 'none',
    },
  },

  dropdown: {
    position: 'absolute',
    top: 60,
    left: 0,
    right: 0,
    zIndex: 0,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
    borderTopWidth: 0,
    overflow: 'hidden',

    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },

  link: {
    display: 'block',
    lineHeight: 1,
    padding: '8px 12px',
    borderRadius: theme.radius.sm,
    textDecoration: 'none',
    color:
      theme.colorScheme === 'dark'
        ? theme.colors.dark[0]
        : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    '&:hover': {
      backgroundColor:
        theme.colorScheme === 'dark'
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
    },

    [theme.fn.smallerThan('sm')]: {
      borderRadius: 0,
      padding: theme.spacing.md,
    },
  },
}));

export const UserButton = () => {
  const [userMenuOpened, setUserMenuOpened] = useState<boolean>(false);

  const [opened, {toggle}] = useDisclosure(false);
  const {googleUser: user, logout} = useAuthContext();
  const {classes, cx} = useStyles();

  const handleLogout = () => {
    logout();
  };

  if (!user) return <></>;

  const {pictureSource, name, email} = user;

  return (
    <>
      <Menu
        width={230}
        position="bottom-end"
        transition="pop-top-right"
        offset={5}
        onClose={() => setUserMenuOpened(false)}
        onOpen={() => setUserMenuOpened(true)}
      >
        <Menu.Target>
          <UnstyledButton
            className={cx(classes.user, {[classes.userActive]: userMenuOpened})}
            mr="sm"
          >
            <Group spacing={7}>
              <Avatar src={pictureSource} alt={name} radius="xl" size={20} />
              <div>
                <Text weight={500} size="sm" sx={{lineHeight: 1}} mr={3}>
                  {name}
                </Text>
                <Text size="xs" color="dimmed">
                  {email}
                </Text>
              </div>
              {!userMenuOpened && <IconChevronDown size={12} stroke={1.5} />}
              {userMenuOpened && <IconChevronUp size={12} stroke={1.5} />}
            </Group>
          </UnstyledButton>
        </Menu.Target>
        <Menu.Dropdown>
          <Menu.Item>
            <ThemeButton />
          </Menu.Item>
          <Menu.Label>Settings</Menu.Label>
          <Menu.Item disabled icon={<IconSettings size={14} stroke={1.5} />}>
            Account settings
          </Menu.Item>
          <Menu.Item
            onClick={handleLogout}
            icon={<IconLogout size={14} stroke={1.5} />}
          >
            Logout
          </Menu.Item>
        </Menu.Dropdown>
      </Menu>

      <UnstyledButton onClick={toggle} className={classes.avatar}>
        <Avatar src={pictureSource} alt={name} radius="xl" size={35} mr="sm" />
      </UnstyledButton>

      {opened && (
        <Paper withBorder className={classes.dropdown}>
          <ThemeButton />
          <span className={classes.link}>Account Settings</span>
          <span className={classes.link} onClick={handleLogout}>
            Logout
          </span>
        </Paper>
      )}
    </>
  );
};
