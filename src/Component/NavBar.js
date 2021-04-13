import {
  AppBar,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
  useTheme,
} from "@material-ui/core";
import React from "react";
import { useStyles } from "./style";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import BarChartIcon from "@material-ui/icons/BarChart";
import Logo from "../assets/img/logo.png";
import clsx from "clsx";
import { Link } from "react-router-dom";

export default function NavBar(props) {
  const classes = useStyles();
  const theme = useTheme();
  console.log(props);

  return (
    <div>
      <AppBar
        position="fixed"
        elevation={0}
        className={clsx(classes.appBar, {
          [classes.appBarShift]: props.open,
        })}
      >
        <Toolbar>
          <IconButton
            color="default"
            aria-label="open drawer"
            onClick={props.onOpen}
            edge="start"
            className={clsx(classes.menuButton, props.open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="subtitle1" noWrap>
            <img src={Logo} alt="Logo." width="50%" />
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={props.open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton style={{ color: "#eeeeee" }} onClick={props.onClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>
        <Divider style={{ backgroundColor: "#eeeeee" }} />
        <List>
          <Link to="/kemenag" style={{textDecoration: "none", color:"inherit"}}>
            <ListItem button>
              <ListItemIcon style={{ color: "#eeeeee" }}>
                <BarChartIcon />
              </ListItemIcon>
              <ListItemText primary="Kemenag" />
            </ListItem>
          </Link>

          <Link to="/kemendagri" style={{textDecoration: "none", color:"inherit"}}>
            <ListItem button>
              <ListItemIcon style={{ color: "#eeeeee" }}>
                <BarChartIcon />
              </ListItemIcon>
              <ListItemText primary="Kemendagri" />
            </ListItem>
          </Link>
        </List>
      </Drawer>
    </div>
  );
}
