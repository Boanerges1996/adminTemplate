import React, { Component } from "react";
import { AppBar, Grid, Button, Typography } from "@material-ui/core";
import Footer from "./footer";
import { Link } from "react-router-dom";
import Slideshow from "./slider";

export class Homepage extends Component {
  render() {
    return (
      <div>
        <div
          style={{
            backgroundImage:
              "url(https://newmibridges.michigan.gov/resource/1593256551000/ISD_Icons/landing-page/group-3.svg)",
            width: "100vw",
            height: "550px",
            backgroundSize: "100% 100%",
            backgroundRepeat: "no-repeat",
          }}
        >
          <Grid container>
            <Grid item xs={11}>
              <Typography variant="h3" style={{ color: "white" }}>
                {" "}
                Verdant School Admin
              </Typography>
            </Grid>
            <Grid item style={{ textAlign: "right" }}>
              <Link to="/login">
                <Button
                  variant="contained"
                  color="secondary"
                  style={{ float: "left", margin: "5px" }}
                >
                  Login
                </Button>
              </Link>
            </Grid>
          </Grid>
        </div>
        <Slideshow />
        <Footer />
      </div>
    );
  }
}

export default Homepage;
