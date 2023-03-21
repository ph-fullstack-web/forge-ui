import {createStyles} from '@mantine/core';

const useStyles = createStyles(() => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    width: '20%',
    minWidth: 250,
    borderRight: '1px solid #eee',
    padding: '15px 10px',
    fontSize: 12,
    background: '#fcfcfc',
  },
  node: {
    display: 'flex',
    height: 20,
    paddingInline: 10,
    paddingBlock: 15,
    border: '1px solid #1a192b',
    borderRadius: 2,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'grab',
  },
}));

export default useStyles;
