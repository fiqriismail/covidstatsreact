import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// My Stuff
import LocalDashboard from './LocalDashboard';
import GlobalDashboard from './GlobalDashboard';
import HospitalList from '../Hospital/HospitalList';
import Navbar from '../shared/Navigation/Navbar';
import {
  Typography,
  Container,
  Paper,
  LinearProgress
} from '@material-ui/core';

function Dashboard() {
  const [stats, setStats] = useState({ dashboard: {}, hospitalData: [] });

  useEffect(() => {
    fetch('https://hpb.health.gov.lk/api/get-current-statistical')
      .then(response => response.json())
      .then(response => {
        if (response.success === true) {
          setStats({
            dashboard: response.data,
            hospitalData: response.data.hospital_data
          });
        }
      })
      .catch(() => console.log('Something went wrong...'));
  }, []);

  const localDasboard = () => {
    return (
      <div>
        <LocalDashboard dashboardData={stats.dashboard} />
        <Paper style={{ marginTop: 20 }} />
        <GlobalDashboard dashboardData={stats.dashboard} />
      </div>
    );
  };

  return (
    <React.Fragment>
      <BrowserRouter>
        <Navbar />
        <Container style={{ marginTop: 30 }}>
          <Switch>
            <Route path="/hospitals">
              <Typography variant="h5">Hospital Breakdown</Typography>
              <Typography variant="subtitle1">{`Last updated: ${stats.dashboard.update_date_time}`}</Typography>
              <HospitalList tableData={stats.hospitalData} />
            </Route>
            <Route path="/">
              {stats.hospitalData.length > 0 ? (
                localDasboard()
              ) : (
                <LinearProgress variant="query" />
              )}
            </Route>
          </Switch>
        </Container>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default Dashboard;
