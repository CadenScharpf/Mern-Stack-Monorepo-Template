import { Box, Stack, SxProps } from "@mui/material";
import React from "react";
import { useAuth } from "../hooks/auth";
import CleaningServicesIcon from "@mui/icons-material/CleaningServices";
import { Link, useLocation, useNavigate } from "react-router-dom";

function NavBar() {
  const navigate = useNavigate();
  const auth = useAuth();

  const styles: Record<string, SxProps> = {
    nav: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
    stack: {
      display: "flex",
      justifyContent: "center",
      alignItems: "flex-end",
    },
  };
  return (
    <Box sx={{ ...styles.nav }}>
      <Stack direction={"row"} spacing={1} sx={{ ...styles.stack }}>
        <CleaningServicesIcon sx={{ fontSize: "3rem" }} />
        <h3>hive-link</h3>
      </Stack>
      <Stack direction={"row"} spacing={2} sx={{ ...styles.stack }}>
        <Link to={"/"}>Home</Link>
        <Link to={"/user"}>Dashboard</Link>
      </Stack>
      <Stack direction={"row"} spacing={2} sx={{ ...styles.stack }}>
        {auth.user ? (
          <>
            <Link to={"/user/profile"}>{auth.user.name}</Link>
            <button onClick={() => {auth.logout(); navigate('/') }}>Logout</button>
          </>
        ) : (
          <Link to={"/login"}>Login</Link>
        )}
      </Stack>
    </Box>
  );
}

export default NavBar;
