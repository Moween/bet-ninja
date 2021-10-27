import React from "react";
import Box from "@material-ui/core/Box";
import Drawer from "@material-ui/core/Drawer";
import Toolbar from "@material-ui/core/Toolbar";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import DatePicker from './DatePicker';

const SideBar = () => {
  const drawerWidth = "18%";
  return (
    <aside>
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
          <List>
            <ListItem sx={{marginTop: '1rem', marginBottom: '1rem'}}>
              <DatePicker />
            </ListItem>
            <Divider />
            {["Soccer", "HighLight", "Live", "Promo"].map((text, index) => (
              <ListItem
                button
                key={text}
                sx={{ paddingLeft: '0.5rem', marginLeft: "1.05rem" }}
              >
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </aside>
  );
};

export default SideBar;
