import * as React from "react";
import { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AuthService from "./services/auth.service";
import { IUser } from "hive-link-common";

import Login from "./pages/public/Login";
import Register from "./pages/public/Register";
import Profile from "./pages/user/Profile";
import EventBus, { EventMap } from "./common/EventBus";
import { useAuth } from "./hooks/auth";
import ProtectedRoute from "./components/ProtectedRoute";
import Landing from "./pages/public/Landing";
import NavBar from "./components/NavBar";
import { Box, Container } from "@mui/material";

import Paths, { IPath, getPathRoutes } from "./pages/constants/Paths";

const layoutParams = {
  navHeight: 64,
};

const App: React.FC = () => {
  const auth = useAuth();
  console.log(
    Paths.Subpaths.map((path) =>  getPathRoutes(path, '/'))     
  )
  return (
    <>
      <Box sx={{ height: layoutParams.navHeight }} component="nav">
        <NavBar />
      </Box>
      <Box
        sx={{ height: `calc(100vh - ${layoutParams.navHeight}px)` }}
        component="section"
      >
        <Routes>
          <Route index element={Paths.Component} />
          {Paths.Subpaths.map((path) => getPathRoutes(path, '/', true))}     
        </Routes>
      </Box>
    </>
  );
};

export default App;
