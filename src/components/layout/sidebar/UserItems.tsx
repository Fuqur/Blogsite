import React,{FC} from 'react'
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import Card from '@mui/material/Card';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import {QuestionAnswer} from '@mui/icons-material'
import { useNavigate } from 'react-router-dom';
import { users } from './dataUsers';

const UserItems: FC = () => {
  const navigate = useNavigate();

    return (
        <Card 
        variant='outlined'
        sx={{
           padding:2,
           backgroundColor:'#CC66CC'
        }}>
      <Box style={{ display: 'flex', alignItems: 'center',flexDirection: 'column', }}>
        {users.map(user => (
        <Link key={user.id}
        to={`/profile/${user.id}`} style={{display:'flex',alignItems:'center',textDecoration:'none',color:'#111',marginBottom:12,width: '200px',}}>
          <Box style={{ position: 'relative', marginRight: 2,width:50, height:50 }}>
            <Avatar src={user.avatar}
             alt=''  
             sx={{width:46,height:46,borderRadius:'50%'}}
             />
             {user.isOnline &&
            <Box style={{ backgroundColor: '#33FF00',border:'3px solid #fff', width: 13, height: 13, position: 'absolute', bottom: 0, right: 0,borderRadius:'50%' }} />
             }
            </Box>
          <span style={{fontSize:14}}>{user.name}</span>
        </Link>
        ))}
      </Box>

      <List>
            <ListItem disablePadding>
                <ListItemButton onClick={() => navigate('/messages')}>
                    <ListItemIcon>
                        <QuestionAnswer/>
                    </ListItemIcon>
                    <ListItemText primary="Messages"/>
                </ListItemButton>
            </ListItem>
        </List>
      </Card>
    )
  }
  
  export default UserItems;