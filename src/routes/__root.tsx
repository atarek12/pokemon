import * as React from "react";
import { Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { AppWrapper } from "~/components/AppWrapper";
import { ErrorBoundary } from "~/components/ErrorBoundary";
import { NotFoundPage } from "~/components/NotFoundPage";

export const Route = createRootRoute({
  component: RootComponent,
  errorComponent: ErrorBoundary,
  notFoundComponent: NotFoundPage,
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
