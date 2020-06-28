import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import AddIcon from "@material-ui/icons/Add";

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: "#e8840b",
    color: "white"
  }
}));

function Accordian({ heading, ...props }) {
  const classes = useStyles();

  return (
    <div>
      <ExpansionPanel>
        <ExpansionPanelSummary
          className={`${classes.expandIcon} ${classes.root}`}
          expandIcon={<AddIcon style={{ color: "white" }} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          style={{ height: "5px" }}
        >
          <Typography className={classes.heading}>{heading}</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails style={{ backgroundColor: "#FFFDD0" }}>
          {props.children}
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}

export default Accordian;
