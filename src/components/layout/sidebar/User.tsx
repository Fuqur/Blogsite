import React from "react";
import { Card,Button, Avatar,Chip } from "@mui/material";
import { useAuth } from "../../providers/useAuth";
import { signOut } from "firebase/auth";

const User = () => {
    const { user,ga } = useAuth();

    return (
        <Card
            variant='outlined'
            sx={{
                padding: 2,
                backgroundColor: '#CC66CC',
                border: 'none',
                borderRadius: 3,
                marginBottom:5,
            }}
        >
         <Chip
            avatar={<Avatar alt="Sergey" src={user?.avatar} />}
            label={user?.name||'No name'} 
            sx={{display:'flex',marginBottom:2}}
            />
             <Button
                onClick={() => signOut(ga)}
                sx={{ backgroundColor: '#FF33CC', color: '#FFFFFF' }}
            >
                Log out
            </Button>
        </Card>
    );
}

export default User;