import React from "react";
import {
  AppBar,
  IconButton,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { Menu } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  root: {
      flexGrow: 1
  },
  menuButton : {
      marginRight : theme.spacing(2)
  },
  title : {
      flexGrow : 1,
  }
}));

export const Navbar = (params) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <Menu />
          </IconButton>
          <Typography variant="h6" className={classes.title}>ASUS</Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};
