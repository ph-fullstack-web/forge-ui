import React, {Component} from 'react';
import {Dropzone as MantineDropzone, DropzoneProps} from '@mantine/dropzone';

export class Dropzone extends Component<DropzoneProps> {
  static Accept = MantineDropzone.Accept;
  static Idle = MantineDropzone.Idle;
  static Reject = MantineDropzone.Reject;
  static FullScreen = MantineDropzone.FullScreen;

  render() {
    return <MantineDropzone {...this.props} />;
  }
}
