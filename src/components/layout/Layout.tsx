import { Grid } from "@mui/material";
import { FC, ReactNode, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../providers/useAuth";
import Header from "./header/Header";
import Sidebar from "./sidebar/Sidebar";

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  const { user } = useAuth();
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user && pathname !== "/auth") {
      navigate("/auth", { replace: true });
    }
  }, [user, pathname, navigate]);

  return (
    <>
      <Header />
      <Grid container spacing={2} paddingX={5} marginTop={2}>
        {user&&
        <Grid item md={2}>
          <Sidebar />
        </Grid>}
        <Grid item md={user?9:12}>
          {children}
        </Grid>
      </Grid>
    </>
  );
};

export default Layout;