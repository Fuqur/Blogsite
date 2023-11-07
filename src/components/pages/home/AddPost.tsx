import { Box, TextField } from "@mui/material";
import React,{FC, useState} from "react";
import { IPost,TypeSetState } from "../../../types";
import { users } from "../../layout/sidebar/dataUsers";

interface IAddPost {
    setPosts: TypeSetState<IPost[]>
}

const AddPost:FC<IAddPost> =({setPosts}) => {
    const [content,setContent] =useState('')

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
          e.preventDefault(); 
          addPostHandler();
        }
      };
    
      const addPostHandler = () => {
        setPosts((prev) => [
          {
            author: users[0],
            content,
            createdAt: '5 minutes ago',
          },
          ...prev,
        ]);
        setContent(''); 
      };

    return (
        <Box sx={{
            border:'1px solid #ccc',
            borderRadius:'200px',
            padding:2, 
            bgcolor:'#FFCCFF'
        }}>
            <TextField label = 'Share your news with others' variant='outlined' 
            InputProps={{
            sx:{borderRadius:'25px',bgcolor:'F8F8F8'},}}
            sx={{
                width:'100%'
            }}
            onKeyDown={handleKeyDown}
            onChange={e=>setContent(e.target.value)}
            value={content}
            />
        </Box>
    )
}

export default AddPost