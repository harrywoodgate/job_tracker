import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import "./global.css";
import routes from "./routes.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const router = createBrowserRouter(routes);
const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </StrictMode>,
);
