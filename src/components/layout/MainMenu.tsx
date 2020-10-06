import React from 'react';
import clsx from 'clsx';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';

interface ClassesProps {
    appBar: string,
    appBarShift: string,
    toolbar: string,
    menuButton: string,
    menuButtonHidden: string,
    title: string,
}

interface MainMenuProps {
    classes: ClassesProps,
    open: boolean,
    handleDrawerOpen: (event: React.MouseEvent<HTMLButtonElement>) => void,
}

const MainMenu = ({ open, classes, handleDrawerOpen }: MainMenuProps) => {
    return (
        <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
            <Toolbar className={classes.toolbar}>
            <IconButton
                edge="start"
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
            >
                <MenuIcon />
            </IconButton>
            <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
                Dashboard
            </Typography>
            <IconButton color="inherit">
                <Badge badgeContent={4} color="secondary">
                <NotificationsIcon />
                </Badge>
            </IconButton>
            </Toolbar>
        </AppBar>
    );
}

export default MainMenu;
