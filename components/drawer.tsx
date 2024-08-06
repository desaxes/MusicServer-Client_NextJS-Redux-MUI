"use client"
import { Box, Button, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { useState } from "react";
import A from './A'

const DrawerComponent = () => {
    const [open, setOpen] = useState(false);

    const toggleDrawer = (newOpen: boolean) => () => {
        setOpen(newOpen);
    };
    const DrawerList = (
        <Box  sx={{ width: 300 }} role="presentation" onClick={toggleDrawer(false)}>
            <List style={{padding:'20px'}}>
                {['Main', 'Tracks', 'Albums'].map((text, index) => (
                    <A href={'/' + text.toLowerCase()} text={text}/>
                ))}
            </List>
        </Box>
    )
    return (
        <div>
            <Button variant="contained" color="error" size="large" onClick={toggleDrawer(true)}>Menu</Button>
            <Drawer open={open} onClose={toggleDrawer(false)}>
                {DrawerList}
            </Drawer>
        </div>
    )
}
export default DrawerComponent