import React from "react";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import DashboardIcon from "@material-ui/icons/Dashboard";
import CategoryIcon from "@material-ui/icons/Category";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Badge } from "@material-ui/core";
import ChatIcon from "@material-ui/icons/Chat";
import ReceiptIcon from "@material-ui/icons/Receipt";
import HistoryIcon from "@material-ui/icons/History";
import PeopleIcon from "@material-ui/icons/People";
import SettingsIcon from "@material-ui/icons/Settings";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import LocalLibraryIcon from "@material-ui/icons/LocalLibrary";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import FaceIcon from "@material-ui/icons/Face";

export default function DrawerSideBar(props) {
  return (
    <div>
      <List>
        <ListItem button onClick={props.clickDashboard}>
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary={"Dashboard"} />
        </ListItem>
        <ListItem button onClick={props.clickAdmins}>
          <ListItemIcon>
            <SupervisorAccountIcon />
          </ListItemIcon>
          <ListItemText primary={"Administrators"} />
        </ListItem>
        <ListItem button onClick={props.clickTeachers}>
          <ListItemIcon>
            <Badge badgeContent={4} color="secondary">
              <LocalLibraryIcon />
            </Badge>
          </ListItemIcon>
          <ListItemText primary={"Teachers"} />
        </ListItem>
      </List>
      <ListItem button onClick={props.clickParents}>
        <ListItemIcon>
          <PermIdentityIcon />
        </ListItemIcon>
        <ListItemText primary={"Parents"} />
      </ListItem>
      <ListItem button onClick={props.clickStudents}>
        <ListItemIcon>
          <FaceIcon />
        </ListItemIcon>
        <ListItemText primary={"Students"} />
      </ListItem>
      <Divider />
      <List>
        <ListItem button onClick={props.clickSettings}>
          <ListItemIcon>
            <SettingsIcon />
          </ListItemIcon>
          <ListItemText primary={"Settings"} />
        </ListItem>
      </List>
      {/* <List>
        <ListItem button onClick={props.clickChats}>
          <ListItemIcon>
            <Badge badgeContent={4} color="secondary">
              <ChatIcon />
            </Badge>
          </ListItemIcon>
          <ListItemText primary={"Chats"} />
        </ListItem>

        <ListItem button onClick={props.clickHistory}>
          <ListItemIcon>
            <HistoryIcon />
          </ListItemIcon>
          <ListItemText primary={"History"} />
        </ListItem>
        <ListItem button onClick={props.clickCustomers}>
          <ListItemIcon>
            <PeopleIcon />
          </ListItemIcon>
          <ListItemText primary={"Customers"} />
        </ListItem>
        <ListItem button onClick={props.clickRestaurantInfo}>
          <ListItemIcon>
            <RestaurantIcon />
          </ListItemIcon>
          <ListItemText primary={"Restaurant Info"} />
        </ListItem>
        <ListItem button onClick={props.clickSettings}>
          <ListItemIcon>
            <SettingsIcon />
          </ListItemIcon>
          <ListItemText primary={"Settings"} />
        </ListItem>
      </List> */}
    </div>
  );
}
