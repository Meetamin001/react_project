import React from "react";
import './App.css';
import { Container } from "react-bootstrap";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import EmployeeList from "./component/EmployeeList";

function App() {
  return (
    <div className="App">
      <Container>
        <EmployeeList />
      </Container>
    </div>
  );
}

export default App;
