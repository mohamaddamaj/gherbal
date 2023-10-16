import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  jurisdiction: {
    margin: "50px 0 30px",
  },
  grid: {
    margin: "30px 0",
  },
  card: {
    position: "relative",
    padding: "20px 15px",
    minHeight: "100%",
    boxShadow: "5px 8px 0 0 rgb(102 150 255), -5px -8px 0 0 rgb(253 70 146)",
  },
  exception: {
    position: "relative",
    padding: "20px 15px",
    minHeight: "100%",
  },
  paperException: {
    backgroundColor: "#fafafa",
    padding: "50px 20px",
    marginBottom: "30px",
  },
  span: {
    position: "absolute",
    right: 0,
    bottom: 0,
    background: "#333",
    padding: "1px 5px",
    color: "white",
    borderRadius: "2px",
  },
  paper: {
    display: "flex",
    alignContent: "center",
    backgroundColor: "rgb(102, 150, 255)",
    color: "#f6f6f6",
    padding: "15px 10px 10px 15px",
    marginBottom: "30px",
  },
}));
