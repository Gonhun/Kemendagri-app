import { Grid } from "@material-ui/core";
import React, { Component } from "react";
import Tableau from "tableau-api";

class TableauKemendagriNew extends Component {
  componentDidMount() {
    this.initViz();
  }

  //Function call API
  initViz() {
    const vizUrl =
      "https://public.tableau.com/views/DemografiPendudukIndonesia/Dashboard13?:embed=y&:display_count=y";
    const options = {
      height: "100vh",
      width: "105%",
      hideTabs: true,
    };
    console.log(this);
    // const vizContainer = this.props.vizContainer;
    // let viz = new window.tableau.Viz(vizContainer, vizUrl, options);
    this.viz = new Tableau.Viz(this.container, vizUrl, options);
  }

  render() {
    return (
      <React.Fragment>
        <Grid container spacing={12}>
          <Grid item xs={1}></Grid>
          <Grid item xs={10}>
            <div ref={(c) => (this.container = c)} />
          </Grid>
          <Grid item xs={1}></Grid>
        </Grid>
      </React.Fragment>
    );
  }
}

export default TableauKemendagriNew;
