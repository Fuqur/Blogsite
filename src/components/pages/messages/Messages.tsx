import React, { FC, useEffect, useState } from "react";
import { useAuth } from "../../providers/useAuth";
import { IMessage } from "../../../types";
import { onSnapshot, collection, addDoc } from "firebase/firestore";
import {
  Alert,
  Divider,
  Fab,
  Grid,
  ListItem,
  TextField,
  List,
  ListItemText,
  Avatar,
} from "@mui/material";
import Card from "../../ui/Card";
import { Send as SendIcon } from "@mui/icons-material";

const Messages: FC = () => {
  const { user, db } = useAuth();
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<IMessage[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsub = onSnapshot(collection(db, "messages"), (snapshot) => {
      const array: IMessage[] = [];

      snapshot.docs.forEach((doc) => {
        array.push(doc.data() as IMessage);
      });

      setLoading(false);
      setMessages(array);
    });

    return () => {
      unsub();
    };
  }, [db]);

  const addMessageHandler = async (e: React.MouseEvent) => {
    e.preventDefault();

    try {
      await addDoc(collection(db, "messages"), {
        user,
        message,
      });
    } catch (e: any) {
      setError(e);
    }
    setMessage("");
  };

  return (
    <>
      {loading && <p>Loading messages...</p>}
      {error && (
        <Alert severity="error" style={{ marginBottom: 20 }}>
          {error}
        </Alert>
      )}
      <Card>
        <List style={{ height: "70vh", overflowY: "auto",backgroundColor:'#FFFFCC', borderRadius: 16,marginBottom:'10px'}}>
          {messages.map((msg, idx) => (
            <ListItem key={idx}>
  <Grid container sx={{ flexDirection: 'column-reverse', textAlign: msg.user.id === user?.id ? 'right' : 'left' }}>
    <Grid item xs={12}>
      <ListItemText
        style={{ color: msg.user.id === user?.id ? 'blue' : 'inherit' }}
        secondary={msg.user.name}
      />
    </Grid>
    <Grid item xs={12}>
      <ListItemText primary={msg.message} />
    </Grid>
    <Grid display='flex' justifyContent={msg.user.id === user?.id ?'flex-end':'flex-start'} item xs={12}>
      <Avatar sx={{ width: '30', height: '30' }} src={msg.user.avatar} />
    </Grid>
  </Grid>
</ListItem>
          ))}
        </List>
        <Divider />
        <Grid container style={{ padding: "20px",backgroundColor: '#FFFFFF',  overflow: 'hidden',borderRadius: 16,}}>
          <Grid item xs={11}>
            <TextField
              id="outlined-basic-email"
              label="Type Something"
              fullWidth
              onChange={(e) => setMessage(e.target.value)}
              value={message}
            />
          </Grid>
          <Grid item xs={12} style={{ textAlign: "right" }}>
            <Fab color="primary" aria-label="add" onClick={addMessageHandler}>
              <SendIcon />
            </Fab>
          </Grid>
        </Grid>
      </Card>
    </>
  );
};

export default Messages;
