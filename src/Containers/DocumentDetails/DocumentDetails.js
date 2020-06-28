import React from "react";
import { Grid, Box } from "@material-ui/core";

const arr = [
  {
    title: "PASSPORT",
    valid: true,
    subtitle: "VIEW"
  },
  {
    title: "PANCARD",
    valid: false,
    subtitle: "UPLOAD"
  },
  {
    title: "OTHER'S",
    valid: false,
    subtitle: "UPLOAD"
  }
];

function DocumentDetails() {
  return (
    <Box p={2}>
      <Grid container>
        {arr.map((item, index) => (
          <Grid item xs={12} key={index}>
            <Box my={1}>
              <Grid
                container
                style={{
                  display: "flex",
                  alignItems: "center",
                  color: "brown"
                }}
              >
                <Grid
                  item
                  xs={1}
                  style={{
                    backgroundColor: item.valid ? "green" : "red",
                    borderRadius: "100%",
                    width: "10px",
                    height: "20px",
                    display: "flex"
                  }}
                ></Grid>
                <Grid xs={1}></Grid>
                <Grid item xs={10}>
                  {item.title}
                  <br />
                  <span style={{ textDecoration: "underline" }}>
                    {item.subtitle}
                  </span>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default DocumentDetails;
