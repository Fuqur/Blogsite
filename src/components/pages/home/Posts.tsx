import React,{FC} from "react";
import { IPost } from "../../../types";
import { Box, ImageList, ImageListItem } from "@mui/material";
import Avatar from '@mui/material/Avatar';
import { Link } from "react-router-dom";

interface IPosts {
    posts:IPost[]
}
const Posts:FC<IPosts> =({posts}) => {
return  ( <>
{posts.map((post,idx)=>(
    <Box sx={{
        border:'1px solid #ccc',
        borderRadius:'40px',
        padding:1, 
        backgroundColor:'#FF99FF',
        marginTop:3
    }}
    key={`Post-${idx}`}
    >

         <Link key={post.author.id} 
        to={`/profile/${post.author.id}`} style={{display:'flex',alignItems:'center',textDecoration:'none',color:'#111',marginBottom:12,width: '200px',}}>
          <Box style={{ position: 'relative', marginRight: 2,width:50, height:50 }}>
            <Avatar src={post.author.avatar}
             alt=''  
             sx={{width:46,height:46,borderRadius:'50%'}}
             />
             </Box>
             <div>
             <div style={{fontSize:14}}>{post.author.name}</div>
             <div style={{fontSize:14,opacity:'0.6'}}>{post.createdAt}</div>
             </div> 
        </Link>
        <p>
            {post.content}
        </p>
        {post?.images?.length && (
        <ImageList variant='masonry' cols={3} gap={8}>
              {post.images.map(image=>(
                 <ImageListItem key={image}>
                 <img
                   src={image}
                   alt={''}
                   loading='lazy'
                 />
               </ImageListItem>
        ))}
        </ImageList>
        )}
</Box>
))}
</>
)
}

export default Posts