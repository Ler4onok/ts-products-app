import React from "react";
import ReactDOM from "react-dom/client";
// styles
import "./index.css";
// components
import App from "./App";
// context
import { ModalState } from "./context/ModalContext";
// navigation
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);
root.render(
    <BrowserRouter>
        <ModalState>
            <App />
        </ModalState>
    </BrowserRouter>
);
