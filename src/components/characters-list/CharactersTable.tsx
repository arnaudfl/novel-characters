import React from 'react';
import * as firebase from 'firebase';
import { useList } from 'react-firebase-hooks/database';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import { firebaseConfig } from '../../config/config';

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
  loading: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
}));

export default function Orders() {
  const classes = useStyles();
  const [initializeApp, setInitializeApp] = React.useState(false);
  const [characters, setCharacters] = React.useState({});

  React.useEffect(() => {
    if (!initializeApp) {
      const database = firebase.database();
      database.ref('/characters').on('value', snapshot => {
        let allCharacters: any[] = [];
        console.log('SNAPSHOT', snapshot);
        snapshot.forEach(snap => {
          allCharacters.push(snap.val());
        });
        setCharacters({ characters: allCharacters });
        setInitializeApp(true);
      }, (error: any) => {
        console.log(error);
      });

    
    }
  }, [initializeApp, characters]);

  const charactersRef = firebase.database().ref('/characters');
  const [snapshots, loading, error] = useList(charactersRef);

  return (
    <React.Fragment>
      <Title>Recent Characters</Title>
      {loading &&
        <div className={classes.loading}>
          <CircularProgress />
        </div>
      }
      {!loading && snapshots &&
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
            {snapshots.map((row) => (
              <TableRow key={row.val().id}>
                <TableCell>{row.val().createdAt}</TableCell>
                <TableCell>{row.val().name}</TableCell>
                <TableCell>{row.val().age}</TableCell>
                <TableCell>{row.val().occupation}</TableCell>
                <TableCell align="right">{row.val().role}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      }
      <div className={classes.seeMore}>
        <Link color="primary" href="#" onClick={preventDefault}>
          See more orders
        </Link>
      </div>
    </React.Fragment>
  );
}
