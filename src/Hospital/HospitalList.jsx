import React from 'react';

// Material stuff
import {
  TableContainer,
  Paper,
  TableRow,
  TableCell,
  TableBody,
  Table
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { blue, green } from '@material-ui/core/colors';

// My stuff
import HospitalCount from './HospitalCount';

function HospitalList(props) {
  const classes = useStyles();
  return (
    <TableContainer component={Paper} style={{ marginTop: 20 }}>
      <Table className={classes.table}>
        <TableBody>
          {props.tableData.map(row => (
            <TableRow key={row.id}>
              <TableCell>
                {row.hospital.name}
                <br />
                {row.hospital.name_si}
                <br />
                {row.hospital.name_ta}
              </TableCell>
              <TableCell align="left">
                <HospitalCount
                  count={row.cumulative_local}
                  text="Treated/Observed Sri Lankans"
                  bgcolor={blue[300]}
                />
                <HospitalCount
                  count={row.cumulative_foreign}
                  text="Treated/Observed Foreign"
                  bgcolor={green[300]}
                />
                <Paper style={{ marginTop: 20 }} />
                <HospitalCount
                  count={row.treatment_local}
                  text="Sri Lankans on treatment/observation"
                  bgcolor={blue[100]}
                />
                <HospitalCount
                  count={row.treatment_foreign}
                  text="Foreigners on treatment/observation"
                  bgcolor={green[100]}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

const useStyles = makeStyles({
  table: {
    minWidth: 650
  }
});

export default HospitalList;
