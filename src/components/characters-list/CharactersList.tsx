import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import CharactersTable from './CharactersTable';

interface ClassesProps {
  paper: string,
}

interface CharactersListProps {
  classes: ClassesProps,
}

const CharactersList = ({ classes }: CharactersListProps) => {
    return (
        <>
          <Grid item xs={12}>
              <Paper className={classes.paper}>
                <CharactersTable />
              </Paper>
            </Grid>
        </>
    );
}

export default CharactersList;
