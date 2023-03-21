import React from 'react';
import {Paper, Text, ThemeIcon, Divider} from 'components/UI/atoms';
import {IconUserCheck} from '@tabler/icons';
import {createStyles} from '@mantine/core';

interface DataCardProps {
  iconClassname?: string;
  cardClassname?: string;
  textClassname?: string;
  headerText: string;
  additionalText?: string;
  withIcon: boolean;
}

const ICON_SIZE = 60;
const useStyles = createStyles(theme => ({
  icon: {
    position: 'absolute',
    top: -ICON_SIZE / 3,
    left: `calc(50% - ${ICON_SIZE / 2}px)`,
  },
  card: {
    position: 'relative',
    overflow: 'visible',
    padding: theme.spacing.xs,
    width: theme.spacing.xl * 10,
    marginTop: theme.spacing.sm,
    marginBottom: theme.spacing.sm,
  },
  text: {
    padding: theme.spacing.md,
    fontSize: theme.fontSizes.lg,
  },
}));

export const DataCard = (props: DataCardProps) => {
  const {classes} = useStyles();
  return (
    <>
      <Paper
        radius="md"
        withBorder
        className={props.cardClassname ? props.cardClassname : classes.card}
      >
        {props.withIcon ? (
          <ThemeIcon
            className={props.iconClassname ? props.iconClassname : classes.icon}
          >
            <IconUserCheck size={34} stroke={1.5} />
          </ThemeIcon>
        ) : null}
        <Text
          align="center"
          weight={700}
          className={props.textClassname ? props.textClassname : classes.text}
        >
          {props.headerText}
        </Text>
        <Divider size="md" />
        <Text
          align="center"
          weight={700}
          className={props.textClassname ? props.textClassname : classes.text}
        >
          {props.additionalText}
        </Text>
      </Paper>
    </>
  );
};
