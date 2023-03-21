import React, {useState} from 'react';
import {IconChevronRight, TablerIcon} from '@tabler/icons';
import {createStyles} from '@mantine/core';
import {useNavigate} from 'react-router-dom';

import {
  Box,
  Collapse,
  Group,
  Text,
  ThemeIcon,
  UnstyledButton,
} from 'components/UI/atoms';
import {NavbarItemLink} from 'models/ui';

const useStyles = createStyles(theme => {
  return {
    control: {
      fontWeight: 500,
      display: 'block',
      width: '100%',
      padding: `${theme.spacing.xs}px ${theme.spacing.md}px`,
      color:
        theme.colorScheme === 'dark'
          ? theme.colors['csv-gray'][3]
          : theme.colors['csv-blue'][3],
      fontSize: theme.fontSizes.sm,

      '&:hover': {
        backgroundColor:
          theme.colorScheme === 'dark'
            ? theme.colors.dark[6]
            : theme.colors.gray[0],
      },
    },

    link: {
      fontWeight: 500,
      display: 'block',
      textDecoration: 'none',
      padding: `${theme.spacing.xs}px ${theme.spacing.md}px`,
      paddingLeft: 31,
      marginLeft: 30,
      fontSize: theme.fontSizes.sm,
      borderLeft: `1px solid ${
        theme.colorScheme === 'dark'
          ? theme.colors.dark[4]
          : theme.colors.gray[3]
      }`,
      cursor: 'pointer',

      '&:hover': {
        backgroundColor:
          theme.colorScheme === 'dark'
            ? theme.colors.dark[6]
            : theme.colors.gray[0],
      },
    },

    chevron: {
      transition: 'transform 200ms ease',
    },

    linkActive: {
      '&, &:hover': {
        backgroundColor:
          theme.colorScheme === 'dark'
            ? theme.colors['csv-gray'][4]
            : theme.colors['csv-blue'][3],
        color:
          theme.colorScheme === 'dark'
            ? theme.colors['csv-gray'][2]
            : theme.white,
      },
    },
  };
});

interface NavbarItemGroupProps {
  icon: TablerIcon;
  label: string;
  link: string;
  initiallyOpened?: boolean;
  links?: NavbarItemLink[];
  activeState: [string, React.Dispatch<React.SetStateAction<string>>];
}

export const NavbarItemGroup = ({
  icon: Icon,
  label,
  link,
  initiallyOpened,
  links,
  activeState,
}: NavbarItemGroupProps) => {
  const [opened, setOpened] = useState<boolean>(initiallyOpened || false);
  const [active, setActive] = activeState;

  const navigate = useNavigate();
  const {classes, cx, theme} = useStyles();

  const hasLinks = Array.isArray(links);

  const handleParentClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    {label, link}: NavbarItemLink
  ) => {
    event.preventDefault();
    if (!hasLinks) {
      setActive(label);
      navigate(link);
    }
    setOpened(!opened);
  };

  const handleChildClick = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    {label, link}: NavbarItemLink
  ) => {
    event.preventDefault();
    setActive(label);
    navigate(link);
  };

  const items = (hasLinks ? links : []).map(link => (
    <Text<'a'>
      component="a"
      className={cx(classes.link, {
        [classes.linkActive]: link.label === active,
      })}
      key={link.label}
      onClick={event => handleChildClick(event, link)}
    >
      {link.label}
    </Text>
  ));

  return (
    <>
      <UnstyledButton
        onClick={(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>
          handleParentClick(event, {label, link})
        }
        className={cx(classes.control, {
          [classes.linkActive]: active === label && !hasLinks,
        })}
      >
        <Group position="apart" spacing={0}>
          <Box sx={{display: 'flex', alignItems: 'center'}}>
            <ThemeIcon
              variant="light"
              size={30}
              color={
                theme.colorScheme === 'dark'
                  ? theme.colors['csv-gray'][4]
                  : theme.colors['csv-blue'][3]
              }
            >
              <Icon
                size={18}
                color={
                  theme.colorScheme === 'dark'
                    ? theme.colors['csv-gray'][2]
                    : theme.white
                }
              />
            </ThemeIcon>
            <Box ml="md">{label}</Box>
          </Box>
          {hasLinks && (
            <IconChevronRight
              className={classes.chevron}
              size={14}
              stroke={1.5}
              style={{
                transform: opened ? 'rotate(-90deg)' : 'none',
              }}
            />
          )}
        </Group>
      </UnstyledButton>
      {hasLinks ? <Collapse in={opened}>{items}</Collapse> : null}
    </>
  );
};
