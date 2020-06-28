import React from "react";
import Accordian from "../../Components/Accordian";
import Grid from "@material-ui/core/Grid";
import { Box } from "@material-ui/core";
import Quotations from "../Quotations";
import Details from "../Details";

function Home() {
  return (
    <div>
      <Grid container>
        <Grid xs={8}>
          <Accordian heading="TRAVELER'S REQUIREMENT" />
          <Box mt={2}>
            <Accordian heading="QUOTATION">
              <Quotations />
            </Accordian>
          </Box>
        </Grid>
        <Grid xs={4}>
          <Details />
        </Grid>
      </Grid>
    </div>
  );
}

export default Home;
