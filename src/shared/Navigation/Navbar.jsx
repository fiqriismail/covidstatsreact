import React from 'react';
import { Link } from 'react-router-dom';

// Material Stuff
import { AppBar, Toolbar, Typography, MenuItem } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

function Navbar() {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" className={classes.title} noWrap>
          COVID - 19 Statistics SRI LANKA
        </Typography>

        <MenuItem component={Link} to="/">
          Dashboard
        </MenuItem>
        <MenuItem component={Link} to="/hospitals">
          Hospitals
        </MenuItem>
      </Toolbar>
    </AppBar>
  );
}

const useStyles = makeStyles({
  root: {
    textDecoration: 'none',
    display: 'block'
  },
  title: {
    display: 'block',
    marginRight: 20
  }
});

export default Navbar;
