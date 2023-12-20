import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Link,
  IconButton,
  Grid,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import StorageIcon from "@mui/icons-material/Storage";

export default function Header() {
  const appBarStyle = {
    backgroundColor: "#2196f3",
  };

  const logoStyle = {
    textDecoration: "none",
    color: "#fff",
  };

  const navLinkStyle = {
    color: "#fff",
    textDecoration: "none",
    margin: "0 16px",
    "&:hover": {
      textDecoration: "underline",
    },
    cursor: "pointer",
  };

  const githubLinkStyle = {
    color: "#fff",
    textDecoration: "none",
    display: "flex",
    alignItems: "center",
    "&:hover": {
      textDecoration: "underline",
    },
    cursor: "pointer",
  };

  return (
    <AppBar position="static" style={appBarStyle}>
      <Toolbar>
        <Typography variant="h6">
          <Link href="/" style={logoStyle}>
            DoExercise
          </Link>
        </Typography>
        <Grid container alignItems="center">
          <Grid item xs={12} md={8}>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Link href="/" style={navLinkStyle}>
                Home
              </Link>
              <Link href="/exercises" style={navLinkStyle}>
                Exercises
              </Link>
              <Link href="/goals" style={navLinkStyle}>
                Goals
              </Link>
              <Link href="/calories-intake" style={navLinkStyle}>
                Calories
              </Link>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <Link
                href="https://github.com/anshu1016/fitness-tracker-app/"
                target="_blank"
                rel="noopener noreferrer"
                style={githubLinkStyle}
              >
                <GitHubIcon style={{ marginRight: "5px" }} />
                GitHub
              </Link>
            </div>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}
