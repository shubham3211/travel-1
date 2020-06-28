import React, { useState } from "react";
import {
  Grid,
  FormControlLabel,
  Radio,
  Box,
  makeStyles
} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  colorSecondary: {
    color: "black"
  }
}));

function Price({ amount, cancelled, value }) {
  const classes = useStyles();
  return (
    <Box p={1} style={{ backgroundColor: "white" }}>
      <Grid container>
        <Grid item xs={12}>
          <FormControlLabel
            value={value}
            control={<Radio className={classes.colorSecondary} />}
            label={`$ ${amount}/person`}
          />
          <Grid container style={{ marginLeft: "30px" }}>
            <Grid
              item
              xs={6}
              style={{ textDecoration: cancelled ? "line-through" : "" }}
            >
              ${amount}/person
            </Grid>
            <Grid xs={4}>
              {cancelled ? (
                <span style={{ color: "red" }}>Cancelled</span>
              ) : (
                <span style={{ color: "green" }}>Completed</span>
              )}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Price;
