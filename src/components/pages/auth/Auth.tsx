import { Alert, Button, ButtonGroup, Grid, TextField } from "@mui/material";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { FC, SyntheticEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../providers/useAuth";
import { IUserData } from "./types";

const Auth: FC = () => {
  const { ga, user } = useAuth();
  const [isRegForm, setIsRegForm] = useState(false);
  const [userData, setUserData] = useState<IUserData>({
    email: "",
    password: "",
  } as IUserData);
  const [error, setError] = useState("");

  const handlelogin = async (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isRegForm) {
      try {
        await createUserWithEmailAndPassword(
          ga,
          userData.email,
          userData.password
        );
      } catch (error: any) {
        error.message && setError(error.message);
      }
    } else
      try {
        await signInWithEmailAndPassword(ga, userData.email, userData.password);
      } catch (error: any) {
        error.message && setError(error.message);
      }

    console.log(ga, userData.email, userData.password);
    setUserData({
      email: "",
      password: "",
    });
  };

  const navigate = useNavigate();
  useEffect(() => {
    if (user) navigate("/");
  }, [user, navigate]);

  return (
    <>
      {error && (
        <Alert severity="error" style={{ marginBottom: 20 }}>
          {error}
        </Alert>
      )}
      <Grid container justifyContent="center" alignItems="center">
        <form onSubmit={handlelogin}>
          <TextField
            type="email"
            label="Email"
            variant="outlined"
            value={userData.email}
            onChange={(e) =>
              setUserData({ ...userData, email: e.target.value })
            }
            sx={{ display: "block", marginBottom: 3 }}
            required
          />

          <TextField
            type="password"
            label="Password"
            variant="outlined"
            value={userData.password}
            onChange={(e) =>
              setUserData({ ...userData, password: e.target.value })
            }
            sx={{ display: "block", marginBottom: 3 }}
            required
          />

          <ButtonGroup variant="outlined">
            <Button type="submit" onClick={() => setIsRegForm(false)}>
              Log in
            </Button>
            <Button type="submit" onClick={() => setIsRegForm(true)}>
              Register
            </Button>
          </ButtonGroup>
        </form>
      </Grid>
      ,
    </>
  );
};

export default Auth;
