import React from "react";
import Box from "@material-ui/core/Box";
import Drawer from "@material-ui/core/Drawer";
import Toolbar from "@material-ui/core/Toolbar";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";

const SideBar = () => {
  const drawerWidth = '20%';
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: drawerWidth,
          boxSizing: "border-box",
          backgroundColor: "inherit",
          color: "#ccc",
          borderColor: "rgb(0, 0, 0, 0.30)",
        },
      }}
    >
      <Toolbar />
      <Box sx={{ overflow: "hidden" }}>
        <Typography sx={{ margin: "1rem 1rem 0", fontWeight: "bold" }}>
          Top Leagues
        </Typography>
        <List>
          {["Lorem", "Ipsum", "Blah"].map((text, index) => (
            <ListItem
              button
              key={text}
              sx={{ paddingTop: 0, marginLeft: "1.05rem" }}
            >
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <Typography sx={{ marginLeft: "1rem", fontWeight: "bold" }}>
          News
        </Typography>
        <List>
          {["Soccer", "Winners", "Spam"].map((text, index) => (
            <ListItem
              button
              key={text}
              sx={{ paddingTop: 0, marginLeft: "1.05rem" }}
            >
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
};

export default SideBar;
