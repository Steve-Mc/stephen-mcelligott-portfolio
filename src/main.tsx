import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "./components/ui/provider.tsx";
import App from "./App.tsx";
import Layout from "./components/Layout.tsx";

const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("Root element #root not found");

const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <Provider>
      <Layout>
        <App />
      </Layout>
    </Provider>
  </React.StrictMode>,
);
