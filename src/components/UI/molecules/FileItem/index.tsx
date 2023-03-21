import React from 'react';
import {createStyles} from '@mantine/core';

import {
  CloseButton,
  Divider,
  Group,
  Paper,
  Stack,
  Text,
} from 'components/UI/atoms';
import {formatFileSize} from 'lib/helpers';

interface FileItemProps {
  index: number;
  fileName: string;
  fileSize: number;
  signedUrl?: string;
  readOnly?: boolean;
  onRemoveFile?: (index: number) => void;
}

const useStyles = createStyles(theme => ({
  group: {flexGrow: 1},
  fileName: {
    '&:hover': {
      cursor: 'pointer',
    },
  },
  paper: {
    height: '63.2px',
    display: 'flex',

    [`@media (max-width: ${theme.breakpoints.lg}px)`]: {
      width: '100%',
    },
    [`@media (min-width: ${theme.breakpoints.lg}px)`]: {
      width: '500px',
    },
  },
}));

export const FileItem = ({
  index,
  fileName,
  fileSize,
  signedUrl,
  readOnly,
  onRemoveFile,
}: FileItemProps) => {
  const {classes, theme} = useStyles();

  const handleRemoveFile = () => {
    onRemoveFile && onRemoveFile(index);
  };

  const handleFileNameClick = () => {
    if (signedUrl) window.open(signedUrl);
  };

  return (
    <Paper key={index} withBorder className={classes.paper}>
      <Group className={classes.group} role="file-item">
        <Divider
          orientation="vertical"
          size={6}
          ml={3}
          my={4}
          sx={{borderRadius: '4px'}}
          color={
            theme.colorScheme === 'dark'
              ? theme.colors.blue[8]
              : theme.colors.blue[6]
          }
        />
        <Group position="apart" className={classes.group}>
          <Stack sx={{gap: 0}}>
            <Text
              fz="sm"
              fw={500}
              className={classes.fileName}
              role="file-name"
              onClick={handleFileNameClick}
            >
              {fileName}
            </Text>
            <Text fz="sm" c="dimmed">
              {formatFileSize(fileSize)}
            </Text>
          </Stack>
          {!readOnly && (
            <CloseButton
              role="remove-file-button"
              mr={5}
              onClick={handleRemoveFile}
            />
          )}
        </Group>
      </Group>
    </Paper>
  );
};

export default FileItem;
