import React from "react"
import {Card,List,ListItem,ListItemButton,ListItemIcon,ListItemText} from '@mui/material'
import {menu} from "./dataMenu"
import { useNavigate } from 'react-router-dom';

const Menu =()=> {
 const navigate = useNavigate();
return (

<Card 
        variant='outlined'
        sx={{
           padding:2,
           backgroundColor:'#F1F7FA',
           Padding:2,
           borderRadius:3,
           marginBottom:10
        }}>
<List>
    {menu.map(item=>(

<ListItem key={item.link} disablePadding>
    <ListItemButton onClick={() => navigate(item.link)}>
        <ListItemIcon
        sx={{
            minWidth:36,    
        }}>
           <item.icon/>
        </ListItemIcon>
        <ListItemText primary={item.title}/>
    </ListItemButton>
</ListItem>
))}
</List>
</Card>
)}

export default Menu