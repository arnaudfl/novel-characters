import React from 'react';
import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

import { MainListItems, SecondaryListItems } from './ListItems';

interface ClassesProps {
    drawerPaper: string,
    drawerPaperClose: string,
    toolbarIcon: string,
}   

interface SideMenuProps {
    open: boolean,
    classes: ClassesProps,
    handleDrawerClose: (event: React.MouseEvent<HTMLButtonElement>) => void,
    signOut: Function,
}

const SideMenu = ({ open, classes, handleDrawerClose, signOut }: SideMenuProps) => {
    const onClickSignOut = React.useCallback(() => {
        localStorage.removeItem('isSignedIn');
        signOut();
    }, [signOut]);

    return (
        <Drawer
            variant="permanent"
            classes={{
            paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
            }}
            open={open}
        >
            <div className={classes.toolbarIcon}>
                <IconButton onClick={handleDrawerClose}>
                    <ChevronLeftIcon />
                </IconButton>
            </div>
            <Divider />
            <List>
                <MainListItems />
            </List>
            <Divider />
            <List>
                <SecondaryListItems onClickSignOut={onClickSignOut} />
            </List>
      </Drawer>
    );
};

export default SideMenu;
