import { Container, Grid, Typography } from "@material-ui/core";
import React from "react";
import TableauReport from "tableau-react";
import { useStyles } from "../style";

export default function TableauKemenag() {
  const classes = useStyles();
  const options = {
    height: 450,
    width: "100%",
    // hideTabs: false,
    // All other vizCreate options are supported here, too
    // They are listed here: https://onlinehelp.tableau.com/current/api/js_api/en-us/JavaScriptAPI/js_api_ref.htm#ref_head_9
  };

  // Number of seconds between sending Tableau data refresh requests. 0 = do not automatically refresh (default)
  const refreshSeconds = 60 * 5;
  return (
    <React.Fragment>
      {/* <Container fixed component="main" className={classes.heroContent}>
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="textPrimary"
          gutterBottom
        >
          Kemenag Dashboard
        </Typography>
      </Container> */}
      {/* <Container> */}
        {/* <div className={classes.tableauContent}> */}
          <TableauReport
            url="https://public.tableau.com/views/DemografiPendaftarJamaahHajiPeriodeSep-Okt2019Prov_JawaTimur2/DemografiPendaftarJemaahHajiPeriodeSeptember-Oktober2019JawaTimur?:language=en&:display_count=y&:origin=viz_share_link"
            // filters={filters}
            options={options} // vizCreate options
            refreshSeconds={refreshSeconds}
          />
        {/* </div> */}
      {/* </Container> */}
    </React.Fragment>
  );
}
