import React, {useEffect } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Container } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import http from '../http-common';

import Typography from '@material-ui/core/Typography';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(name, date, start, end, loginid, password) {
  return { name, date, start, end, loginid, password};
}

// var rows = [
//   createData('Eikon', '2021-08-31', '08:30', '09:30', 'ShareFinuser1', 's8736kdna8qkmfns'),
//   createData('Factset', '2021-08-31', '18:30', '19:30', 'ShareFinuser2', 'vla84%#98eclsf'),
//   createData('Koyfin', '2021-09-01', '18:30', '19:30', 'ShareFinuser3', 'vla84%#98eclsf'),
// ];

var row = "";

http.get('/')
  .then(response => {
    var rows = [];
    for (row of response.data.user_bookings){
      let datetime = row.start.split('T')
      console.log(datetime[0])
      rows.push(
        createData(row.service, datetime[0], datetime[1], row.end.split('T')[1], 'fdsfsd', 'sdfsdf')
        );
    }
  })
  .catch(e => {
    console.log(e);
  });

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});


export default function CustomizedTables() {
  const classes = useStyles();
  if (rows == undefined){
    return (
      <Container>
       </Container> 
    )
  }

  else {
  return (
    <React.Fragment>
      <Container>
        <Box mt={3}>
        <Typography component="h1" variant="h4" color="textPrimary" gutterBottom>
          Schedule
        </Typography>
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>Service</StyledTableCell>
                  <StyledTableCell align="right">Date</StyledTableCell>
                  <StyledTableCell align="right">Start&nbsp;Time</StyledTableCell>
                  <StyledTableCell align="right">End&nbsp;Time</StyledTableCell>
                  <StyledTableCell align="right">Login&nbsp;Id</StyledTableCell>
                  <StyledTableCell align="right">&nbsp;Password</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {console.log(rows)}
                {rows.map((row) => (
                  <StyledTableRow key={row.name}>
                    <StyledTableCell component="th" scope="row">
                      {row.name}
                    </StyledTableCell>
                    <StyledTableCell align="right">{row.date}</StyledTableCell>
                    <StyledTableCell align="right">{row.start}</StyledTableCell>
                    <StyledTableCell align="right">{row.end}</StyledTableCell>
                    <StyledTableCell align="right">{row.loginid}</StyledTableCell>
                    <StyledTableCell align="right">{row.password}</StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      
      </Container>
      
  </React.Fragment>
  );

}
}
