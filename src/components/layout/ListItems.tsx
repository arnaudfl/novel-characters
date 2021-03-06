import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { useTranslation } from "react-i18next";

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PeopleIcon from '@material-ui/icons/People';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';

export const MainListItems = () => {
  const matchNew = useRouteMatch('/new');
  const matchList = useRouteMatch('/');
  const { t } = useTranslation();

  return (
    <div>
      <Link to="/" style={{ textDecoration: 'none' }}>
        <ListItem button selected={!!(matchList && matchList.isExact)}>
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary={t('sidemenu.dashboard')} />
        </ListItem>
      </Link>
      <Link to="/new" style={{ textDecoration: 'none' }}>
        <ListItem button selected={!!(matchNew && matchNew.isExact)}>
          <ListItemIcon>
            <PeopleIcon />
          </ListItemIcon>
          <ListItemText primary={t('sidemenu.addcharacter')} />
        </ListItem>
      </Link>
    </div>
  );
};

interface SecondaryListItemsProps {
  onClickSignOut: (event: React.MouseEvent<HTMLDivElement>) => void,
}

export const SecondaryListItems = ({ onClickSignOut }: SecondaryListItemsProps) => {
  const { t } = useTranslation();

  return (
    <div>
      <ListItem button onClick={onClickSignOut}>
        <ListItemIcon>
          <PowerSettingsNewIcon />
        </ListItemIcon>
        <ListItemText primary={t('sidemenu.logout')} />
      </ListItem>
    </div>
  )
};
