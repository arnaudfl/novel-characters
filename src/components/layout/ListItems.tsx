import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import * as firebase from 'firebase/app';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PeopleIcon from '@material-ui/icons/People';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';

export const MainListItems = () => {
  const matchNew = useRouteMatch('/new');
  const matchList = useRouteMatch('/');

  return (
    <div>
      <Link to="/" style={{ textDecoration: 'none' }}>
        <ListItem button selected={!!(matchList && matchList.isExact)}>
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
      </Link>
      <Link to="/new" style={{ textDecoration: 'none' }}>
        <ListItem button selected={!!(matchNew && matchNew.isExact)}>
          <ListItemIcon>
            <PeopleIcon />
          </ListItemIcon>
          <ListItemText primary="Characters" />
        </ListItem>
      </Link>
    </div>
  );
};

export const secondaryListItems = (
  <div>
    <ListItem button onClick={() => {
      firebase.auth().signOut();
    }}>
      <ListItemIcon>
        <PowerSettingsNewIcon />
      </ListItemIcon>
      <ListItemText primary="Logout" />
    </ListItem>
  </div>
);
