import React, { FC } from "react";
import { routes } from "./list";
import { BrowserRouter, Route, Routes as RRoutes } from 'react-router-dom';
import Layout from "../layout/Layout";
import { useAuth } from "../providers/useAuth";

const Routes: FC = () => {
  const {user} = useAuth()

  return (
    <BrowserRouter>
      <RRoutes>
        {routes.map((route, index) => {
          if (route.auth && !user) {
            return null;
          }
          return (
            <Route
              key={index}
              path={route.path}
              element={
                <Layout>
                  <route.component />
                </Layout>
              }
            />
          );
        })}
      </RRoutes>
    </BrowserRouter>
  );
}

export default Routes;