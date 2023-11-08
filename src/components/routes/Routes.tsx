import { FC } from "react";
import { BrowserRouter, Routes as RRoutes, Route } from "react-router-dom";
import Layout from "../layout/Layout";
import { routes } from "./list";

const Routes: FC = () => {
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
                  <route.component />
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
