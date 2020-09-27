import React from 'react';
import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

import { MainListItems, secondaryListItems } from './ListItems';

interface ClassesProps {
    drawerPaper: string,
    drawerPaperClose: string,
    toolbarIcon: string,
}   

interface SideMenuProps {
    open: boolean,
    classes: ClassesProps,
    handleDrawerClose: (event: React.MouseEvent<HTMLButtonElement>) => void,
}

const SideMenu = ({ open, classes, handleDrawerClose }: SideMenuProps) => {
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
            <List>{secondaryListItems}</List>
      </Drawer>
    );
};

export default SideMenu;
