import React from "react";
import {Drawer, List, ListItem, ListItemIcon, ListItemText} from "@material-ui/core";
import InboxIcon from '@material-ui/icons/MoveToInbox'

type SidebarPropsType = {
    isOpen:boolean
}
export const Sidebar = (props:SidebarPropsType) =>{
    return <Drawer open={props.isOpen}>
        <List>
            {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                <ListItem button key={text}>
                    <ListItemIcon><InboxIcon /></ListItemIcon>
                    <ListItemText primary={text} />
                </ListItem>
            ))}
        </List>
    </Drawer>
}