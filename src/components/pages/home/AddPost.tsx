import { Box, TextField, Alert } from "@mui/material";
import React, { FC, useState } from "react";
import { useAuth } from "../../providers/useAuth";
import { addDoc, collection } from "firebase/firestore";

const AddPost: FC = () => {
  const [content, setContent] = useState<string>("");
  const { user, db } = useAuth();
  const [error, setError] = useState('');

  const handleKeyDown = async (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      try {
        await addDoc(collection(db, 'posts'), {
          first: user,
          content,
          createdAt: '10 minutes ago'
        });
        setError('');
      } catch (e: any) {
        setError(e.message);
      }
      e.preventDefault();
      addPostHandler();
    }
  };

  const addPostHandler = () => {
    if (user) {
      setContent("");
    }
  };

  return (
    <>
      {error && (
        <Alert severity="error" style={{ marginBottom: 20 }}>
          {error}
        </Alert>
      )}
      <Box
        sx={{
          border: "1px solid #ccc",
          borderRadius: "200px",
          padding: 2,
          bgcolor: "#FFCCFF",
          '@media (max-width: 600px)': {
            padding: 1,
          },
        }}
      >
        <TextField
          label="Share your news with others"
          variant="outlined"
          InputProps={{
            sx: { borderRadius: "25px", bgcolor: "F8F8F8" },
          }}
          sx={{
            width: "100%",
          }}
          onKeyDown={handleKeyDown}
          onChange={(e) => setContent(e.target.value)}
          value={content}
        />
      </Box>
    </>
  );
};

export default AddPost;
