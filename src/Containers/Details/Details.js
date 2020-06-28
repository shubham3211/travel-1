import React from "react";
import Accordian from "../../Components/Accordian";
import { Grid, Box } from "@material-ui/core";
import TripDetails from "../TripDetails";
import DocumentDetails from "../DocumentDetails";

function Details() {
  return (
    <Box pl={2} pr={2}>
      <Grid container>
        <Grid item xs={12}>
          <Accordian heading={"TRAVELLER'S DETAILS"}>
            <TripDetails />
          </Accordian>
          <Box mt={2}>
            <Accordian heading={"DOCUMENTS"}>
              <DocumentDetails />
            </Accordian>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Details;
