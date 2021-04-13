import { Container, Grid, Typography } from "@material-ui/core";
import React from "react";
import { useStyles } from "../style";
import TableauReport from 'tableau-react';

export default function TableauKemendagri() {
  const classes = useStyles();
  const options = {
    height: 720,
    width: "100%",
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
          Kemendagri Dashboard
        </Typography>
      </Container> */}
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <TableauReport
            // url="https://public.tableau.com/views/DashboardLRAop_2/RealisasiAnggaran?:language=en&:display_count=y&:origin=viz_share_link"
            url="http://192.168.193.177/views/DemografiPendudukIndonesia/Dashboard1?:showAppBanner=false&:display_count=n&:showVizHome=n&:origin=viz_share_link&:isGuestRedirectFromVizportal=y&:embed=y"
            // filters={filters}
            options={options} // vizCreate options
            refreshSeconds={refreshSeconds}
          />
        </Grid>
        {/* <Grid item xs={12}>
          <TableauReport
            url="https://public.tableau.com/views/DashboardLRAop_4/RealisasiAnggaran?:language=en&:display_count=y&:origin=viz_share_link"
            // filters={filters}
            options={options} // vizCreate options
            refreshSeconds={refreshSeconds}
          />
        </Grid>
        <Grid item xs={12}>
          <TableauReport
            url="https://public.tableau.com/views//CapaianKegiatanAPBDDKIJakarta/CapaianKegiatanAPBDDKIJakarta?:language=en&:display_count=y&:origin=viz_share_link"
            // filters={filters}
            options={options} // vizCreate options
            refreshSeconds={refreshSeconds}
          />
        </Grid> */}
      </Grid>
    </React.Fragment>
  );
}
