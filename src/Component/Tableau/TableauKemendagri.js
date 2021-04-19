import { Grid } from "@material-ui/core";
import React from "react";
import TableauReport from "tableau-react";

export default function TableauKemendagri() {
  const options = {
    height: 730,
    width: "100%",
  };

  // Number of seconds between sending Tableau data refresh requests. 0 = do not automatically refresh (default)
  const refreshSeconds = 60 * 5;

  return (
    <React.Fragment>
      <Grid container spacing={1}>
        <Grid item xs={1}></Grid>
        <Grid item xs={10}>
          <TableauReport
            // url="https://public.tableau.com/views/DashboardLRAop_2/RealisasiAnggaran?:language=en&:display_count=y&:origin=viz_share_link"
            // url="http://192.168.193.177/views/DemografiPendudukIndonesia/Dashboard1?:showAppBanner=false&:display_count=n&:showVizHome=n&:origin=viz_share_link&:isGuestRedirectFromVizportal=y&:embed=y"
            url="https://public.tableau.com/views/DemografiPendudukIndonesia/Dashboard13?:language=en&:display_count=y&publish=yes&:origin=viz_share_link"
            // filters={filters}
            options={options} // vizCreate options
            refreshSeconds={refreshSeconds}
          />
        </Grid>
        <Grid item xs={1}></Grid>
      </Grid>
    </React.Fragment>
  );
}
