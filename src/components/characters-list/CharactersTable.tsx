import React from 'react';
import * as firebase from 'firebase';
import { useList } from 'react-firebase-hooks/database';
import { useTranslation } from "react-i18next";
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from '../shared/Title';

import Alert from '@material-ui/lab/Alert';

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

const CharactersTable = () => {
  const classes = useStyles();
  const { t } = useTranslation();

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
    <>
      <Title>{t('characters.title')}</Title>
      {error &&
        <Alert variant="filled" severity="error">
          Error: {error}
        </Alert>
      }
      {loading &&
        <div className={classes.loading}>
          <CircularProgress />
        </div>
      }
      {!loading && snapshots &&
        <>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell>{t('characters.tablehead.date')}</TableCell>
                <TableCell>{t('characters.tablehead.name')}</TableCell>
                <TableCell>{t('characters.tablehead.age')}</TableCell>
                <TableCell>{t('characters.tablehead.occupation')}</TableCell>
                <TableCell align="right">{t('characters.tablehead.role')}</TableCell>
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
          <div className={classes.seeMore}>
            <Link color="primary" href="#" onClick={preventDefault}>
              {t('characters.button.seemore')}
            </Link>
          </div>
        </>
      }
    </>
  );
}

export default CharactersTable;
