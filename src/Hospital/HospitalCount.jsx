import React from 'react';

// Material stuff
import { Badge, Chip } from '@material-ui/core';

function HospitalCount(props) {
  return (
    <span style={{ margin: 10 }}>
      <Badge color="primary" badgeContent={props.count} max={9999}>
        <Chip
          label={props.text}
          style={{ margin: 0.5, backgroundColor: props.bgcolor }}
        />
      </Badge>
    </span>
  );
}

export default HospitalCount;
