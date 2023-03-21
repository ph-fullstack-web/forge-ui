import React from 'react';
import {createStyles} from '@mantine/core';
import {
  PDF_MIME_TYPE,
  IMAGE_MIME_TYPE,
  MS_WORD_MIME_TYPE,
} from '@mantine/dropzone';
import {IconFile, IconUpload, IconX} from '@tabler/icons';

import {Dropzone, Group, Text} from 'components/UI/atoms';
import {useNotification} from 'hooks';
import {NotificationType} from 'lib/constants';

const useStyles = createStyles(() => ({
  group: {
    minHeight: 220,
    pointerEvents: 'none',
  },
}));

interface FilesDropzoneProps {
  onDropFiles: (file: File[]) => void;
}

export const FilesDropzone = ({onDropFiles}: FilesDropzoneProps) => {
  const {classes, theme} = useStyles();
  const notify = useNotification();

  const acceptedFiles: string[] = [
    ...PDF_MIME_TYPE,
    ...IMAGE_MIME_TYPE,
    ...MS_WORD_MIME_TYPE,
  ];

  const handleOnDrop = (files: File[]) => {
    onDropFiles(files);
  };

  const handleReject = (files: ApprovedAny[]) => {
    files.forEach(file => {
      const errors = file.errors;
      const filename = file.file.name;

      let errorMessage = '';
      errors.forEach((error: ApprovedAny) => {
        if (error.code !== 'file-too-large')
          errorMessage += `${error.message}. `;
        else errorMessage += 'File is larger than 5 mb. ';
      });

      const message = `File: ${filename} - ${errorMessage}`;

      notify(NotificationType.Error, message);
    });
  };

  return (
    <Dropzone
      onDrop={files => handleOnDrop(files)}
      onReject={handleReject.bind(this)}
      maxSize={5 * 1024 ** 2}
      accept={acceptedFiles}
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
          <IconFile size={50} stroke={1.5} />
        </Dropzone.Idle>

        <div>
          <Text size="xl" inline>
            Drag files here or click to select files
          </Text>
          <Text size="sm" color="dimmed" inline mt={7}>
            Attach as many pdf, word document, and/or image files as you like,
            each file should not exceed 5mb
          </Text>
        </div>
      </Group>
    </Dropzone>
  );
};
