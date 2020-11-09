import React from 'react';
import Grid from '@material-ui/core/Grid';

import CharactersTable from './CharactersTable';

const CharactersList = () => {
    return (
      <>
        <Grid item xs={12}>
            <CharactersTable />
          </Grid>
      </>
    );
}

export default CharactersList;
