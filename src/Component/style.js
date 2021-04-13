import { fade, makeStyles } from "@material-ui/core";
import background from '../assets/img/background_sipd.png';

const drawerWidth = 240;

export const useStyles = makeStyles((theme) => ({
  root: {
    display: 'block',
    height: "auto",
    backgroundSize:"cover",
    backgroundColor: fade("#2f323e", 0.5),
    // backgroundAttachment: "fixed"
  },
  appBar: {
    // backgroundColor: "#eeeeee",
    backgroundColor: "transparent",
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    backgroundColor: "transparent",
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  toolbarButtons: {
    marginLeft: 'auto',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor:"#303841",
    color:"#eeeeee"
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    // padding: theme.spacing(1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  icon: {
    fill: 'white'
  },
  content: {
    flexGrow: 1,
    padding: "5px",
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  heroContent: {
    padding: theme.spacing(4),
  },
  tableauContent:{
    height: "900px",
    marginTop: "-10px !important",
    marginBottom: "50px !important",
  }
}));