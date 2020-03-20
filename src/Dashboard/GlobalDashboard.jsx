import React from 'react';
import NumberFormat from 'react-number-format';

// Material Stuff
import { Chip } from '@material-ui/core';

function GlobalDashboard({ dashboardData }) {
  return (
    <React.Fragment>
      Global new cases{' '}
      <Chip
        label={
          <NumberFormat
            value={dashboardData.global_new_cases}
            thousandSeparator={true}
            displayType={'text'}
          />
        }
      />{' '}
      - Global total cases{' '}
      <Chip
        label={
          <NumberFormat
            value={dashboardData.global_total_cases}
            thousandSeparator={true}
            displayType={'text'}
          />
        }
      />{' '}
      - Global deaths{' '}
      <Chip
        label={
          <NumberFormat
            value={dashboardData.global_deaths}
            thousandSeparator={true}
            displayType={'text'}
          />
        }
      />{' '}
      - Global new deaths{' '}
      <Chip
        label={
          <NumberFormat
            value={dashboardData.global_new_deaths}
            thousandSeparator={true}
            displayType={'text'}
          />
        }
      />{' '}
      - Global new recovered{' '}
      <Chip
        label={
          <NumberFormat
            value={dashboardData.global_recovered}
            thousandSeparator={true}
            displayType={'text'}
          />
        }
        color="primary"
      />
    </React.Fragment>
  );
}

export default GlobalDashboard;
