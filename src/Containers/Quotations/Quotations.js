import React, { useState } from "react";
import Price from "../../Components/Price";
import { Grid, Box, RadioGroup } from "@material-ui/core";
import edit from "../../assets/edit.png";
import download from "../../assets/download.png";
import { Typography } from "antd";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

let arr = [
  { heading: "Trip Type", value: "NA" },
  { heading: "Days", value: "6 Days" },
  { heading: "Nights", value: "5 Nights" },
  { heading: "Quotation Price", value: "Quotation Price" },
  { heading: "Destination", value: "Bali" },
  { heading: "No. of Adults & Children", value: "2 Adults &  1 Children" }
];

const useStyles = makeStyles(theme => ({
  root: {
    "& > *": {
      margin: theme.spacing(1)
    }
  },
  text: {
    color: "black"
  },
  containedPrimary: {
    backgroundColor: "white"
  }
}));

function Quotations() {
  const [value, setValue] = useState("1");
  const classes = useStyles();

  return (
    <Grid container>
      <Grid item xs={12}>
        <RadioGroup
          aria-label="price"
          name="price"
          value={value}
          onChange={e => setValue(e.target.value)}
        >
          <Grid container>
            <Grid item xs={4}>
              <Price amount="63,000" cancelled={true} value="1" />
            </Grid>
            <Grid item xs={4}>
              <Box ml={1} mr={1}>
                <Price amount="49,000" value="2" cancelled={true} />
              </Box>
            </Grid>
            <Grid item xs={4}>
              <Price amount="69,000" value="3" cancelled={false} />
            </Grid>
          </Grid>
        </RadioGroup>
      </Grid>
      <Grid item xs={12}>
        <Box mt={2}>
          <Grid container style={{ display: "flex" }}>
            <Grid style={{ display: "flex", flexDirection: "column" }}>
              <img src={edit} alt="" width="25" height="25" />
              <span>
                Create <br /> Invoice
              </span>
            </Grid>
            <Grid
              style={{
                display: "flex",
                flexDirection: "column",
                marginLeft: "10px"
              }}
            >
              <img
                src={download}
                alt=""
                width="25"
                height="25"
                style={{ marginLeft: "10px" }}
              />
              <span>
                Download <br /> Quote
              </span>
            </Grid>
          </Grid>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Box mt={2}>
          <Grid container>
            <Grid xs={12}>
              <Box my={2}>
                <Typography variant="h5" style={{ fontWeight: "bold" }}>
                  Basic Details
                </Typography>
              </Box>
            </Grid>
            {arr.map((item, index) => (
              <Grid key={index} item xs={4}>
                <Box my={1}>
                  <Typography variant="subtitle2" style={{ color: "grey" }}>
                    {item.heading}
                  </Typography>
                  <Typography variant="h5" style={{ fontWeight: "bold" }}>
                    {item.value}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Button
          className={`${classes.text} ${classes.containedPrimary}`}
          style={{ float: "right" }}
          variant="contained"
        >
          Show More
        </Button>
      </Grid>
    </Grid>
  );
}

export default Quotations;
