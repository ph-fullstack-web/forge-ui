export const formatFileSize = (fileSize: number) => {
  if (fileSize === 0) return '0 Bytes';

  const kilobytes = 1000;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
  const i = Math.floor(Math.log(fileSize) / Math.log(kilobytes));
  return (
    parseFloat((fileSize / Math.pow(kilobytes, i)).toFixed(2)) + ' ' + sizes[i]
  );
};
