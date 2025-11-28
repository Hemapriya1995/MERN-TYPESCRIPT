import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App.tsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import HomePage from "./pages/HomePage.tsx";
import ProductPage from "./pages/ProductPage.tsx";
import axios from "axios";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

// axios.defaults.baseURL =
//   import.meta.env.MODE === "development" ? "http://localhost:5000" : "/";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} element={<HomePage />}></Route>
      <Route path="/product/:slug" element={<ProductPage />}></Route>
    </Route>
  )
);
import { QueryClient } from "@tanstack/react-query";
import { HelmetProvider } from "react-helmet-async";
import { StoreProvider } from "./Store.tsx";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* ... */}
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <StoreProvider>
          <RouterProvider router={router} />
        </StoreProvider>
      </HelmetProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </StrictMode>
);
