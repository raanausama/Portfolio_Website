import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import "./Carousel.css";
import Carousel from "react-material-ui-carousel";
import reactimg from "C:/Users/lapto/Desktop/portfolio--use-npm/src/assets/react.png";
import javascriptimg from "C:/Users/lapto/Desktop/portfolio--use-npm/src/assets/js.png";
import pythonimg from "C:/Users/lapto/Desktop/portfolio--use-npm/src/assets/python.png";
import csslogo from "C:/Users/lapto/Desktop/portfolio--use-npm/src/assets/css.png";
import htmllogo from "C:/Users/lapto/Desktop/portfolio--use-npm/src/assets/html.png";
import matlablogo from "C:/Users/lapto/Desktop/portfolio--use-npm/src/assets/matlab.jpg";
import "./Skills.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2,
    // slidesToSlide: 3 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const Skills = () => {
  return (
    <Box
      sx={{
        flexGrow: 1,
        paddingTop: "10px",
        paddingBottom: "10px",
      }}
    >
      <Typography
        variant="h4"
        sx={{ textDecoration: "underline", paddingTop: 2 }}
      >
        Skills
      </Typography>
      <Typography
        variant="h6"
        sx={{ paddingTop: 2, color: "rgba(255,255,255,0.4)" }}
      >
        Tools that I have worked with.
      </Typography>
      <Grid>
        <div
          style={{
            marginLeft: "80px",
            marginRight: "80px",
            textAlign: "center",
            paddingTop: "100px",
          }}
        >
          <Carousel
            swipeable={false}
            draggable={false}
            showDots={true}
            responsive={responsive}
            infinite={true}
            autoPlaySpeed={"0.5s"}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={"0.5s"}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-200-px"
            sx={{ width: "auto", height: "auto" }}
          >
            <div
              style={{ width: "fit-content", height: "auto", margin: "auto" }}
            >
              <img src={htmllogo} alt="HTML" />
            </div>
            <div
              style={{ width: "fit-content", height: "auto", margin: "auto" }}
            >
              <img src={javascriptimg} alt="JavaScript" />
            </div>
            <div
              style={{ width: "fit-content", height: "auto", margin: "auto" }}
            >
              <img src={csslogo} alt="css" />
            </div>
            <div
              style={{ width: "fit-content", height: "auto", margin: "auto" }}
            >
              <img src={reactimg} alt="react" />
            </div>
            <div
              style={{ width: "fit-content", height: "auto", margin: "auto" }}
            >
              <img src={pythonimg} alt="python" />
            </div>
            <div
              style={{ width: "fit-content", height: "auto", margin: "auto" }}
            >
              <img src={matlablogo} alt="react" />
            </div>
          </Carousel>
        </div>
      </Grid>
    </Box>
  );
};

export default Skills;
