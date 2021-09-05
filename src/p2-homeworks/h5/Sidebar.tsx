import React from 'react';
import clsx from 'clsx';
import {makeStyles} from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import SidebarList from "./SidebarList";
import {HashRouter} from "react-router-dom";

const useStyles = makeStyles({
    list: {
        width: 300,
    },
    fullList: {
        width: 'auto',
    },
});

type SidebarPropsType = {
    isOpen: boolean,
    openSideBar: (state: boolean) => void
}
export default function Sidebar(props: SidebarPropsType) {
    const classes = useStyles();
    const toggleDrawer = (open: boolean) => (
        event: React.KeyboardEvent | React.MouseEvent,
    ) => {
        if (
            event &&
            event.type === 'keydown' &&
            ((event as React.KeyboardEvent).key === 'Tab' ||
                (event as React.KeyboardEvent).key === 'Shift')
        ) {
            return;
        }

        props.openSideBar(open);
    };

    return (
        <div className={clsx(classes.list)}>
            <React.Fragment>
                <SwipeableDrawer
                    anchor={'left'}
                    open={props.isOpen}
                    onClose={toggleDrawer(false)}
                    onOpen={toggleDrawer(true)}
                >
                    <HashRouter>
                        <SidebarList closeOnClick={props.openSideBar}/>
                    </HashRouter>
                </SwipeableDrawer>
            </React.Fragment>
        </div>
    );
}
