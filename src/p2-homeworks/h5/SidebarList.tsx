import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import {NavLink} from 'react-router-dom';


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: 250,
            maxWidth: 360,
            backgroundColor: theme.palette.background.paper,
        },
        nested: {
            paddingLeft: theme.spacing(4),
        },
        fontStyle:{
            textDecoration: 'none',
            color:'black'
        },
        activeLinkStyles:{
            color:'green',
            backgroundColor: theme.palette.background.paper,
        }
    }),
);
type SidebarListPropsType = {
    closeOnClick:(state:boolean)=>void
}
export default function SidebarList(props:SidebarListPropsType) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <>
        <List
            component="nav"
            aria-labelledby="nested-list-subheader"
            subheader={
                <ListSubheader component="div" id="nested-list-subheader">
                    Select a page to display
                </ListSubheader>
            }
            className={classes.root}
        >
            <NavLink activeClassName={classes.activeLinkStyles} className={classes.fontStyle} to={'/pre-junior'}><ListItem button onClick={()=>props.closeOnClick(false)}>
                <ListItemText primary="Pre-junior" />
            </ListItem></NavLink>
            <NavLink activeClassName={classes.activeLinkStyles} className={classes.fontStyle} to={'/junior'}><ListItem button onClick={()=>props.closeOnClick(false)}>
                <ListItemText primary="Junior" />
            </ListItem></NavLink>
            <ListItem button onClick={handleClick}>
                <ListItemText primary="Not ready pages" />
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <NavLink activeClassName={classes.activeLinkStyles} className={classes.fontStyle} to={'/notReady'}><ListItem button className={classes.nested} onClick={()=>props.closeOnClick(false)}>
                        <ListItemText primary="Junior Plus" />
                    </ListItem></NavLink>
                </List>
            </Collapse>
        </List>
        </>
    );
}
