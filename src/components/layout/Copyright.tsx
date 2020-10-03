import React from 'react';
import { useTranslation } from "react-i18next";
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

const Copyright = () => {
  const { t } = useTranslation();
  return (
    <>
      <Typography variant="body2" color="textSecondary" align="center">
        {t('app.copyright')}
        <Link color="inherit" href="#">
          {t('app.title')}
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    </>
  );
}

export default Copyright;
