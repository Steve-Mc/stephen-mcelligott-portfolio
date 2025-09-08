import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "./components/ui/provider.tsx";
import App from "./App.tsx";
import Layout from "@/components/layout/Layout.tsx";
import { Toaster } from "react-hot-toast";
const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("Root element #root not found");

const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <Provider>
      <Layout>
        <Toaster />
        <App />
      </Layout>
    </Provider>
  </React.StrictMode>,
);
