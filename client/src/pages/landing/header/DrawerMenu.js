import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import HomeIcon from "@mui/icons-material/Home";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

import { useNavigate } from "react-router-dom";

function DrawerMenu(props) {
  const { window } = props;
  const { drawerToggle, setDrawerToggle } = props;

  const navigate = useNavigate();

  const handleDrawerToggle = () => {
    setDrawerToggle(!drawerToggle);
  };

  const drawer = (
    <div>
      <List>
        <ListItem button key="Home" onClick={() => navigate("/")}>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
      </List>
      <IconButton
        color="inherit"
        aria-label="close drawer"
        onClick={handleDrawerToggle}
        sx={{
          position: "absolute",
          bottom: "0",
          right: "0",
        }}
      >
        <ArrowBackIosNewIcon fontSize="large" />
      </IconButton>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        edge="start"
        onClick={handleDrawerToggle}
        sx={{ ml: 2, display: { l: "none" } }}
      >
        <MenuIcon fontSize="large" />
      </IconButton>
      {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
      <Drawer
        container={container}
        variant="temporary"
        open={drawerToggle}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: {
            xs: "block",
            sm: "block;",
            md: "none",
            l: "none",
            xl: "none",
          },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: "100vw",
          },
        }}
      >
        {drawer}
      </Drawer>
      <Drawer
        variant="temporary"
        open={drawerToggle}
        anchor="right"
        sx={{
          display: {
            xs: "none",
            sm: "none",
            md: "block",
            l: "block",
            xl: "block",
          },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: "20rem",
          },
        }}
      >
        {drawer}
      </Drawer>
    </Box>
  );
}

DrawerMenu.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DrawerMenu;
