import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

const queryClient = new QueryClient();
// {
//   defaultOptions: {
//     queries: {
//       retry: 5,
//       cacheTime: 300_000, //5min
//       staleTime: 10 * 1000, //10sec
//       refetchOnMount: true,
//       refetchOnWindowFocus: true,
//       refetchOnReconnect: false,
//     },
//   },
// }

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
      <ReactQueryDevtools />
    </QueryClientProvider>
  </React.StrictMode>
);

