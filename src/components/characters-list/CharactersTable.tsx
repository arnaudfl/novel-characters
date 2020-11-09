import React from 'react';
import * as firebase from 'firebase';
import { useTranslation } from "react-i18next";
import MUIDataTable, { MUIDataTableOptions } from "mui-datatables";

import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

import Alert from '@material-ui/lab/Alert';

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

interface CharactersProps {
  id: number,
  createdAt: string,
  name: string,
  age: number,
  occupation: string,
  role: string,
}

const CharactersTable = () => {
  const classes = useStyles();
  const { t } = useTranslation();

  const [initializeApp, setInitializeApp] = React.useState(false);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);
  const [characters, setCharacters] = React.useState([] as any);

  React.useEffect(() => {
    if (!initializeApp) {
      const database = firebase.database();
      database.ref('/characters').on('value', snapshot => {
        const allCharacters: any[] = [];
        snapshot.forEach(snap => {
          allCharacters.push(snap.val());
        });
        setCharacters(allCharacters);
        setInitializeApp(true);
        setLoading(false);
      }, (error: any) => {
        setLoading(false);
        setError(error);
      });
    }
  }, [initializeApp, characters]);

  const columns = [
    {
     name: "createdAt",
     label: t('characters.tablehead.date'),
     options: {
      filter: false,
      sort: true,
     }
    },
    {
     name: "name",
     label: t('characters.tablehead.name'),
     options: {
      filter: false,
      sort: true,
     }
    },
    {
     name: "age",
     label: t('characters.tablehead.age'),
     options: {
      filter: false,
      sort: true,
     }
    },
    {
     name: "occupation",
     label: t('characters.tablehead.occupation'),
     options: {
      filter: false,
      sort: true,
     }
    },
    {
      name: "role",
      label: t('characters.tablehead.role'),
      options: {
       filter: true,
       sort: true,
      }
     },
   ];
  
  const options: MUIDataTableOptions = {
    filterType: 'checkbox',
  };

  return (
    <>
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
      {!loading && characters &&
        <>
          <MUIDataTable
            title={t('characters.title')}
            data={characters}
            columns={columns}
            options={options}
          />
        </>
      }
    </>
  );
}

export default CharactersTable;
