import React from 'react';
import {createStyles} from '@mantine/core';
import {IMAGE_MIME_TYPE} from '@mantine/dropzone';
import {IconPhoto, IconUpload, IconX} from '@tabler/icons';

import {Dropzone, Group, Text} from 'components/UI/atoms';

const useStyles = createStyles(() => ({
  dropzone: {
    width: 200,
    height: 200,
    borderRadius: 200,
  },
  group: {
    textAlign: 'center',
    pointerEvents: 'none',
  },
}));

interface PhotoDropzoneProps {
  onDrop: (file: File | null) => void;
}

export const PhotoDropzone = ({onDrop}: PhotoDropzoneProps) => {
  const {classes, theme} = useStyles();

  const handleOnDrop = (files: File[]) => {
    onDrop(files.length > 0 ? files[0] : null);
  };

  return (
    <Dropzone
      onDrop={handleOnDrop}
      maxSize={5 * 1024 ** 2}
      maxFiles={1}
      radius="xl"
      accept={IMAGE_MIME_TYPE}
      className={classes.dropzone}
    >
      <Group position="center" spacing="xl" className={classes.group}>
        <Dropzone.Accept>
          <IconUpload
            size={50}
            stroke={1.5}
            color={
              theme.colors[theme.primaryColor][
                theme.colorScheme === 'dark' ? 4 : 6
              ]
            }
          />
        </Dropzone.Accept>
        <Dropzone.Reject>
          <IconX
            size={50}
            stroke={1.5}
            color={theme.colors.red[theme.colorScheme === 'dark' ? 4 : 6]}
          />
        </Dropzone.Reject>
        <Dropzone.Idle>
          <IconPhoto size={50} stroke={1.5} />
        </Dropzone.Idle>

        <div>
          <Text size="xl" inline>
            Select or Drag Photo
          </Text>
          <Text size="sm" color="dimmed" inline mt={7}>
            File should not exceed 5mb
          </Text>
        </div>
      </Group>
    </Dropzone>
  );
};
