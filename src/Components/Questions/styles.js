import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  root: {
    display: 'flex',
    flexDirection: 'row',
  },

  emptySide: {
    width: '20%',
    backgroundColor: 'pink',
    height: '100vh',
    boxShadow: '2px 0px 6px 0px black',
    marginRight: '5px',
  }, 

  questions: {
    width: '50%',
  },
});

export default useStyles;
