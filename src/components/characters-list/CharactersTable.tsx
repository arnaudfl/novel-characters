import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import Title from '../shared/Title';

// Generate Order Data
interface CreateDataProps {
    id: string,
    date: string,
    name: string,
    shipTo: string,
    paymentMethod: string,
    amount: number,
}
function createData(id: number, date: string, name: string, age: number, occupation: string, role: string) {
  return { id, date, name, age, occupation, role };
}

const rows = [
  createData(0, '16 Mar, 2019', 'Matt Suderland', 45, 'Hero', 'Master'),
  createData(1, '16 Mar, 2019', 'Phil Rigor', 32, 'Singer', 'Major'),
  createData(2, '16 Mar, 2019', 'Ellen Mitchell', 27, 'Journalist', 'Minor'),
  createData(3, '16 Mar, 2019', 'Paula Cloud', 89, 'Driver', 'Master'),
  createData(4, '15 Mar, 2019', 'Edgard Lazd', 21, 'Soldier', 'Major'),
];

function preventDefault(event: any) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export default function Orders() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Recent Characters</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Age</TableCell>
            <TableCell>Occupation</TableCell>
            <TableCell align="right">Role</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.age}</TableCell>
              <TableCell>{row.occupation}</TableCell>
              <TableCell align="right">{row.role}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
        <Link color="primary" href="#" onClick={preventDefault}>
          See more orders
        </Link>
      </div>
    </React.Fragment>
  );
}
