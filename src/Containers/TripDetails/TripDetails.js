import React from "react";
import { Grid, Typography } from "@material-ui/core";
import eye from "../../assets/eye.png";
import call from "../../assets/call.png";

function TripDetails() {
  return (
    <Grid container>
      <Grid item xs={12} style={{ color: "brown" }}>
        <Typography variant="h5" style={{ textAlign: "center" }}>
          TRIP ID 3204939
        </Typography>
      </Grid>
      <Grid
        item
        xs={12}
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center"
        }}
      >
        <img src={eye} width="60" height="60" />
        <span style={{ color: "green" }}>CONVERTED</span>
      </Grid>
      <Grid
        item
        xs={12}
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          color: "brown"
        }}
      >
        <span>
          Quote worth <br /> 24000 seen.
        </span>
        <span>
          Dr. Krishana <br />{" "}
          <img
            src={call}
            style={{ transform: 'scaleX(-1)' }}
            alt=""
            width="15"
            height="15"
          />{" "}
          +2222222222{" "}
        </span>
      </Grid>
    </Grid>
  );
}

export default TripDetails;
