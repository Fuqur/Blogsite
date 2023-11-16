import { FC } from "react";
import { BrowserRouter, Routes as RRoutes, Route } from "react-router-dom";
import Layout from "../layout/Layout";
import { routes } from "./list";
import  Auth  from "../pages/auth/Auth";
import { useAuth } from "../providers/useAuth";

const Routes: FC = () => {
  const {user}=useAuth ()
  return (
    <BrowserRouter>
      <RRoutes>
        {routes.map((route, index) => {
          return (
            <Route
              key={index}
              path={route.path}
              element={
                <Layout>
                  {route.auth&&!user?<Auth/>:
                  <route.component />}
                </Layout>
              }
            />
          );
        })}
      </RRoutes>
    </BrowserRouter>
  );
};

export default Routes;