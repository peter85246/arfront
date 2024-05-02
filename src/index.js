import React from "react";
import ReactDOM from "react-dom/client";
import i18n from "./i18n";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import PrivateRoute from "./utils/PrivateRoute"; //Private Route
import Login from "./pages/Login";
import Home from "./pages/Home";
import Machine from "./pages/Machine";
import UserManage from "./pages/UserManage";
import MachineAlarm from "./pages/MachineAlarm";
import SOP from "./pages/SOP";
import SOP2 from "./pages/SOP2";
import MachineIOTList from "./pages/MachineIOTList";
import MachineIOT from "./pages/MachineIOT";
import Knowledge from "./pages/Knowledge";
import Database from "./pages/Database";
import Alarm from "./pages/Alarm";
import PageMindMap from "./pages/PageMindMap";

import "./App.css";
import "./index.css";
import { RepairDocument } from "./components/RepairDocument";
import { DocumentEditor } from "./components/DocumentEditor";
import GPT from "./pages/GPT";
import MachineKnowledge from "./pages/MachineKnowledge";
import Assistant from "./components/Assistant";
import Demo from "./pages/Demo";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <Routes>
      <Route path="/" element={<Login />} />
      {/* <Route element={<PrivateRoute />}> */}
      <Route
        path="/demo"
        element={
          <Home>
            <Demo />
          </Home>
        }
      />
      <Route
        path="/machine"
        element={
          <Home>
            <Machine />
          </Home>
        }
      />
      <Route
        path="/machineKnowledge"
        element={
          <Home>
            <MachineKnowledge />
          </Home>
        }
      />
      <Route
        path="/machine/:machineId/machineAlarm"
        element={
          <Home>
            <MachineAlarm />
          </Home>
        }
      />
      <Route
        path="/machine/:machineId/machineAlarm/:machineAlarmId/SOP"
        element={
          <Home>
            <SOP />
          </Home>
        }
      />
      <Route
        path="/machine/:machineId/machineIOTList"
        element={
          <Home>
            <MachineIOTList />
          </Home>
        }
      />
      <Route
        path="/machine/:machineId/machineIOTList/:machineIOTId"
        element={
          <Home>
            <MachineIOT />
          </Home>
        }
      />
      <Route
        path="/userManage"
        element={
          <Home>
            <UserManage />
          </Home>
        }
      />
      <Route
        path="/knowledge"
        element={
          <Home>
            <Knowledge />
          </Home>
        }
      />
      <Route
        path="/sop2"
        element={
          <Home>
            <SOP2 />
          </Home>
        }
      />
      <Route
        path="/database"
        element={
          <Home>
            <Database />
          </Home>
        }
      />
      <Route
        path="/repairDocument"
        element={
          <Home>
            <RepairDocument />
          </Home>
        }
      />
      <Route
        path="/document-editor"
        element={
          <Home>
            <DocumentEditor />
          </Home>
        }
      />
      <Route
        path="/alarm"
        element={
          <Home>
            <Alarm />
          </Home>
        }
      />
      <Route
        path="/gpt"
        element={
          <Home>
            <GPT />
          </Home>
        }
      />
      <Route
        path="/pageMindMap"
        element={
          <Home>
            <PageMindMap />
          </Home>
        }
      />
      {/* </Route> */}
    </Routes>
    <Assistant />
  </Router>,
);
