import "./App.css";
import { useStyles } from "./Component/style";
import {
  AppBar,
  Container,
  createMuiTheme,
  CssBaseline,
  IconButton,
  MuiThemeProvider,
  Slide,
  Toolbar,
  Typography,
  useScrollTrigger,
  useTheme,
} from "@material-ui/core";
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import PropTypes from "prop-types";
import MenuIcon from "@material-ui/icons/Menu";
import TableauKemendagri from "./Component/Tableau/TableauKemendagri";
import background from "./assets/img/background_sipd.png";

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
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

function App(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

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
          {/* <NavBar
          open={open}
          onOpen={handleDrawerOpen}
          onClose={handleDrawerClose}
        /> */}
          <HideOnScroll {...props}>
            <AppBar position="fixed" elevation={0} className={classes.appBar}>
              {/* <Toolbar>
                <div className={classes.toolbarButtons}>
                  <IconButton
                    style={{ color: "#eeeeee" }}
                    aria-label="open drawer"
                    edge="start"
                  >
                    <MenuIcon />
                    <Typography variant="subtitle1" noWrap>
                      Menu
                    </Typography>
                  </IconButton>
                </div>
              </Toolbar> */}
            </AppBar>
          </HideOnScroll>
          <main className={classes.content}>
            <Container fixed component="main" className={classes.heroContent}>
              <Typography variant="h5" align="center" noWrap>
                Sistem Informasi Pemerintahan Daerah
              </Typography>
            </Container>
            {/* <div className={classes.drawerHeader} /> */}
            <Switch>
              {/* <Route exact path="/kemenag" component={TableauKemenag} /> */}
              <Route exact path="/" component={TableauKemendagri} />
            </Switch>
          </main>
        </div>
      </BrowserRouter>
    </MuiThemeProvider>
  );
}

export default App;
