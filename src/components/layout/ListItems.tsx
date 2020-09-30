import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
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

interface SecondaryListItemsProps {
  signOut: (event: React.MouseEvent<HTMLDivElement>) => void,
}

export const SecondaryListItems = ({ signOut }: SecondaryListItemsProps) => {
  return (
    <div>
      <ListItem button onClick={signOut}>
        <ListItemIcon>
          <PowerSettingsNewIcon />
        </ListItemIcon>
        <ListItemText primary="Logout" />
      </ListItem>
    </div>
  )
};
