import * as React from "react";
import { Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { AppWrapper } from "~/components/AppWrapper";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <React.Fragment>
      <AppWrapper>
        <Outlet />
      </AppWrapper>
      <TanStackRouterDevtools />
    </React.Fragment>
  );
}
