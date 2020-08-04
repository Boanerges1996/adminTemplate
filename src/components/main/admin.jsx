import React, { Component } from "react";
import clsx from "clsx";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

import DrawerSideBar from "./sideBar";
// import Dashboard from "./dashboard/dashboard";
import { useStyles } from "./style";

export class Admin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
      admin: false,
      dashboard: true,
      student: false,
      parent: false,
      teachers: false,
      settings: false,
      header: "Dashboard",
    };
  }

  componentDidMount() {}

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          style={{ backgroundColor: "#e91e63" }}
          position="fixed"
          className={clsx(classes.appBar, {
            [classes.appBarShift]: this.state.open,
          })}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={this.handleDrawerOpen}
              edge="start"
              className={clsx(classes.menuButton, {
                [classes.hide]: this.state.open,
              })}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap>
              {this.state.header}
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          className={clsx(classes.drawer, {
            [classes.drawerOpen]: this.state.open,
            [classes.drawerClose]: !this.state.open,
          })}
          classes={{
            paper: clsx({
              [classes.drawerOpen]: this.state.open,
              [classes.drawerClose]: !this.state.open,
            }),
          }}
        >
          <div className={classes.toolbar}>
            <IconButton onClick={this.handleDrawerClose}>
              {"rtl" ? <ChevronRightIcon /> : <ChevronLeftIcon />}
            </IconButton>
          </div>
          <Divider />
          <DrawerSideBar
            clickAdmins={() =>
              this.setState({
                header: "Administrators",
                admin: true,
                dashboard: false,
                student: false,
                parent: false,
                teachers: false,
                settings: false,
              })
            }
            clickDashboard={() =>
              this.setState({
                header: "Dashboard",
                admin: false,
                dashboard: true,
                student: false,
                parent: false,
                teachers: false,
                settings: false,
              })
            }
            clickTeachers={() =>
              this.setState({
                header: "Teachers",

                admin: false,
                dashboard: false,
                student: false,
                parent: false,
                teachers: true,
                settings: false,
              })
            }
            clickParents={() =>
              this.setState({
                header: "Parents",
                admin: false,
                dashboard: false,
                student: false,
                parent: true,
                teachers: false,
                settings: false,
              })
            }
            clickStudents={() =>
              this.setState({
                header: "Students",

                admin: false,
                dashboard: false,
                student: true,
                parent: false,
                teachers: false,
                settings: false,
              })
            }
            clickHistory={() =>
              this.setState({
                header: "History",
                dashboard: false,
                category: false,
                orders: false,
                transactions: false,
                chats: false,
                history: true,
                customers: false,
                settings: false,
                restaurant: false,
                delivery: false,
              })
            }
            clickCustomers={() =>
              this.setState({
                header: "Customers",
                dashboard: false,
                category: false,
                orders: false,
                transactions: false,
                chats: false,
                history: false,
                customers: true,
                settings: false,
                restaurant: false,
                delivery: false,
              })
            }
            clickRestaurantInfo={() =>
              this.setState({
                header: "Restaurant",
                dashboard: false,
                category: false,
                orders: false,
                transactions: false,
                chats: false,
                history: false,
                customers: false,
                settings: false,
                restaurant: true,
                delivery: false,
              })
            }
            clickSettings={() =>
              this.setState({
                header: "Settings",
                admin: false,
                dashboard: false,
                student: false,
                parent: false,
                teachers: false,
                settings: true,
              })
            }
            clickDelivery={() =>
              this.setState({
                header: "Delivery Personal",
                dashboard: false,
                category: false,
                orders: false,
                transactions: false,
                chats: false,
                history: false,
                customers: false,
                settings: false,
                restaurant: false,
                delivery: true,
              })
            }
          />
        </Drawer>
      </div>
    );
  }
}

export default withStyles(useStyles)(Admin);
