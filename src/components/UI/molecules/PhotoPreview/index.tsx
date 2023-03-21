import React from 'react';
import {createStyles} from '@mantine/core';

import {Button, Container, Image} from 'components/UI/atoms';

const useStyles = createStyles((theme, _params, getRef) => ({
  photoPreview: {
    borderRadius: 200,
    border: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[3]
    }`,
  },
  photoContainer: {
    ref: getRef('photoContainer'),
    display: 'block',
    opacity: 1,

    width: '100%',
    height: 'auto',
    transition: '.5s ease',
    backfaceVisibility: 'hidden',
  },
  middle: {
    ref: getRef('middle'),
    transition: '.5s ease',
    opacity: 0,
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    msTransform: 'translate(-50%, -50%)',
    textAlign: 'center',
  },
  container: {
    position: 'relative',

    [`&:hover .${getRef('photoContainer')}`]: {
      opacity: 0.3,
    },

    [`&:hover .${getRef('middle')}`]: {
      opacity: 1,
    },
  },
}));

interface PhotoPreviewProps {
  photo?: File;
  src?: string;
  onRemovePhoto: () => void;
}

export const PhotoPreview = ({
  photo,
  src,
  onRemovePhoto,
}: PhotoPreviewProps) => {
  if (!photo && !src) return <></>;

  const {classes} = useStyles();

  const url = photo ? URL.createObjectURL(photo) : src;

  const handleRemovePhoto = () => {
    onRemovePhoto();
  };

  return (
    <Container className={classes.container}>
      <Image
        src={url}
        width={200}
        height={200}
        className={classes.photoContainer}
        imageProps={{className: classes.photoPreview}}
      />
      <Container className={classes.middle}>
        <Button variant="light" onClick={handleRemovePhoto}>
          Remove Photo
        </Button>
      </Container>
    </Container>
  );
};
