import "./App.scss";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "Routes";
import { Modal } from "Components/Shared/Modal";

function App() {
  return (
    <Modal>
      <Router>
        <Routes></Routes>
      </Router>
    </Modal>
  );
}

export default App;
