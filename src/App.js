import "./App.css";
import { useStyles } from "./Component/style";
import {
  AppBar,
  Container,
  createMuiTheme,
  CssBaseline,
  MuiThemeProvider,
  Slide,
  Typography,
  useScrollTrigger,
} from "@material-ui/core";
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import PropTypes from "prop-types";
import background from "./assets/img/background_sipd.png";
import TableauKemendagriNew from "./Component/Tableau/TableauKemendagriNew";

function HideOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};

function App(props) {
  const classes = useStyles();

  const themeLight = createMuiTheme({
    palette: {
      background: {
        default: "#ffffff",
      },
    },
    typography: {
      allVariants: {
        color: "white",
      },
    },
    icon: {
      primary: "white",
    },
    overrides: {
      MuiCssBaseline: {
        "@global": {
          body: {
            backgroundImage: `url(${background})`,
            backgroundRepeat: "no-repeat",
            // backgroundColor:
            //   theme.palette.type === "dark"
            //     ? theme.palette.grey[50]
            //     : theme.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          },
        },
      },
    },
  });

  return (
    <MuiThemeProvider theme={themeLight}>
      <BrowserRouter>
        <div className={classes.root}>
          <CssBaseline />
          <HideOnScroll {...props}>
            <AppBar position="fixed" elevation={0} className={classes.appBar}>
            </AppBar>
          </HideOnScroll>
          <main className={classes.content}>
            <Container maxWidth="lg" component="main" className={classes.heroContent}>
              <Typography variant="h5" align="center">
                Sistem Informasi Pemerintahan Daerah
              </Typography>
            </Container>
            <Switch>
              <Route exact path="/" component={TableauKemendagriNew} />
            </Switch>
          </main>
        </div>
      </BrowserRouter>
    </MuiThemeProvider>
  );
}

export default App;
