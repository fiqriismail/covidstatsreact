import React from 'react';

// Material stuff
import {
  blue,
  orange,
  green,
  grey,
  blueGrey,
  amber
} from '@material-ui/core/colors';
import { Grid } from '@material-ui/core';

// My stuff
import DashboardCard from './DashboardCard';

function LocalDashboard({ dashboardData }) {
  return (
    <React.Fragment>
      <Grid container spacing={1}>
        <Grid item xs>
          <DashboardCard
            count={dashboardData.local_new_cases}
            colorLevel={blue[300]}
            lastUpdated={dashboardData.update_date_time}
            cardTitle="Local new cases"
          />
        </Grid>
        <Grid item xs>
          <DashboardCard
            count={dashboardData.local_total_cases}
            colorLevel={orange[300]}
            lastUpdated={dashboardData.update_date_time}
            cardTitle="Local total cases"
          />
        </Grid>
        <Grid item xs>
          <DashboardCard
            count={dashboardData.local_recovered}
            colorLevel={green[300]}
            lastUpdated={dashboardData.update_date_time}
            cardTitle="Local recovered"
          />
        </Grid>
      </Grid>
      <Grid container spacing={1}>
        <Grid item xs>
          <DashboardCard
            count={dashboardData.local_deaths}
            colorLevel={grey[300]}
            lastUpdated={dashboardData.update_date_time}
            cardTitle="Local deaths"
          />
        </Grid>
        <Grid item xs>
          <DashboardCard
            count={dashboardData.local_new_deaths}
            colorLevel={blueGrey[300]}
            lastUpdated={dashboardData.update_date_time}
            cardTitle="Local new deaths"
          />
        </Grid>
        <Grid item xs>
          <DashboardCard
            count={dashboardData.local_total_number_of_individuals_in_hospitals}
            colorLevel={amber[800]}
            lastUpdated={dashboardData.update_date_time}
            cardTitle="Total in hospitals"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default LocalDashboard;
