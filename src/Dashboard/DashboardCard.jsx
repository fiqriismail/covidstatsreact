import React from 'react';

// Material Stuff
import {
  Card,
  CardContent,
  Typography,
  makeStyles,
  CardHeader,
  Avatar
} from '@material-ui/core';

function DashboardCard(props) {
  const useStyles = makeStyles({
    root: {
      maxWidth: 280
    },
    media: {
      height: 140
    },
    avatarNumbers: {
      backgroundColor: props.colorLevel,
      width: 120,
      height: 120
    }
  });

  const classes = useStyles();

  return (
    <Card className={classes.root} style={{ marginBottom: 20 }}>
      <CardHeader component="div" title={props.cardTitle} />
      <CardContent>
        <div align="center">
          <Avatar
            className={classes.avatarNumbers}
            style={{ marginBottom: 25 }}
          >
            <Typography variant="h3" component="h3">
              {props.count}
            </Typography>
          </Avatar>
        </div>
        <small>{`Last updated: ${props.lastUpdated}`}</small>
      </CardContent>
    </Card>
  );
}

export default DashboardCard;
