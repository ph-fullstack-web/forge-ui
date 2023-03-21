import React from 'react';
import {MantineProvider} from '@mantine/core';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import {FileItem} from '.';

const handleRemoveFileClick = jest.fn();

interface FileItemComponentProps {
  readonly?: boolean;
}

const FileItemComponent = ({readonly}: FileItemComponentProps) => {
  return (
    <MantineProvider
      theme={{
        colors: {
          'csv-blue': ['#92BBE6', '#6AA2DC', '#2F78C4', '#000048'],
          'csv-plum': ['#85A0F9', '#7373D8', '#2E308E'],
          'csv-gray': ['#F6F6F5', '#EFEFEE', '#D0D0CE', '#97999B', '#53565A'],
        },
      }}
      withNormalizeCSS
      withGlobalStyles
    >
      <FileItem
        index={0}
        fileName="test.jpg"
        fileSize={12331}
        signedUrl="test"
        readOnly={readonly}
        onRemoveFile={handleRemoveFileClick}
      />
    </MantineProvider>
  );
};

describe('file item to be okay', () => {
  beforeEach(() => {
    render(<FileItemComponent readonly />);
  });

  test('file item to be in the document', () => {
    const element = screen.getByRole('file-item');
    expect(element).toBeInTheDocument();
  });

  test('file item file size is 12.33 KB', () => {
    const element = screen.getByText('12.33 KB');
    expect(element).toBeInTheDocument();
  });

  test('file item with same name exists', () => {
    const element = screen.getByText('test.jpg');
    expect(element).toBeInTheDocument();
  });

  test('remove file button missing', () => {
    const element = screen.queryByRole('remove-file-button');
    expect(element).not.toBeInTheDocument();
  });

  test('signedUrl to be clicked', async () => {
    window.open = jest.fn();

    const element = screen.getByRole('file-name');

    expect(element).toBeInTheDocument();
    await userEvent.click(element);

    expect(window.open).toBeCalledTimes(1);
  });
});

describe('remove file item to be okay', () => {
  beforeEach(() => {
    render(<FileItemComponent />);
  });

  test('remove file button exists', () => {
    const element = screen.getByRole('remove-file-button');
    expect(element).toBeInTheDocument();
  });

  test('remove file button click is called', async () => {
    const element = screen.getByRole('remove-file-button');
    expect(element).toBeInTheDocument();

    await userEvent.click(element);
    expect(handleRemoveFileClick).toBeCalledTimes(1);
  });
});
