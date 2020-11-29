import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  root: {
    display: "flex",
    flexDirection: "row",
  },

  emptySide: {
    width: "20%",
    backgroundColor: "pink",
    height: "100vh",
    boxShadow: "2px 0px 6px 0px black",
    marginRight: "5px",
  },

  questions: {
    width: "80%",
  },

  questionWrapper: {
    display: "flex",
    flexDirection: "column",
    padding: "10px 5px",
    boxShadow: "0 0 5px 1px black",
    marginTop: "10px",
  },

  options: {
    position: "absolute",
    right: "5px",
  },
});

export default useStyles;
