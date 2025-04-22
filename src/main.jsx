import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/Router.jsx";
import React from "react";
import { Toaster } from "react-hot-toast";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "./app/store.js";
import { Provider } from "react-redux";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Toaster />
        <RouterProvider router={router} />
      </PersistGate>
    </Provider>
  </StrictMode>
);