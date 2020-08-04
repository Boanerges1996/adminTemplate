import React from "react";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { Grid } from "@material-ui/core";

const fadeImages = [
  "images/slide_5.jpg",
  "images/slide_6.jpg",
  "images/slide_7.jpg",
];

export default function Slideshow() {
  return (
    <div className="slide-container">
      <Grid container>
        <Grid item xs={0} sm={2}></Grid>
        <Grid item xs={12} sm={8}>
          <Fade>
            <div className="each-fade">
              <div className="image-container">
                <img
                  src="https://lh3.googleusercontent.com/proxy/rsyzoJXuyrx9IOYqC-tFv0Q4G9z9fF7m5P5hZ8_WuUV22Hp0RtuISy-dDSZKt3oqV7pOuhTCKxZp6Gy5WCreD3ZHkw"
                  style={{ width: "90%", height: "300px" }}
                  alt="go"
                />
              </div>
              <h2>First Slide</h2>
            </div>
            <div className="each-fade">
              <div className="image-container">
                <img
                  src="https://www.joonsquare.com/usermanage/image/business/loyola-matriculation-higher-secondary-school-chennai-9177/loyola-matriculation-higher-secondary-school-chennai-loyala-1.jpg"
                  style={{ width: "90%", height: "300px" }}
                  alt="go"
                />
              </div>
              <h2>Second Slide</h2>
            </div>
            <div className="each-fade">
              <div className="image-container">
                <img
                  src="https://filecabinet9.eschoolview.com/C88CE2C3-3882-42DD-8F47-73CB9942F964/DISTRICT/HOME/Articles/school_clipart.jpg"
                  style={{ width: "100%", height: "400px" }}
                  alt="go"
                />
              </div>
              <h2>Third Slide</h2>
            </div>
          </Fade>
        </Grid>
        <Grid item xs={0} sm={2}></Grid>
      </Grid>
    </div>
  );
}
