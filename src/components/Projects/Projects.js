import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import project1 from "C:/Users/lapto/Desktop/portfolio--use-npm/src/assets/firebrigade.jpg";
import project2 from "C:/Users/lapto/Desktop/portfolio--use-npm/src/assets/self_balancing.jpg";
import project3 from "C:/Users/lapto/Desktop/portfolio--use-npm/src/assets/line_following.jpg";
import { red } from "@mui/material/colors";

const Projects = () => {
  return (
    <Box
      sx={{
        paddingTop: 10,
        paddingBottom: 20,
      }}
    >
      <Grid>
        <Typography
          variant="h4"
          sx={{ textDecoration: "underline", paddingTop: 2 }}
        >
          Projects
        </Typography>
        <Typography
          variant="h6"
          sx={{ paddingTop: 2, color: "rgba(255,255,255,0.4)" }}
        >
          These are some projects that I have worked on.
        </Typography>
      </Grid>
      <Grid
        sx={{ padding: 3, display: "flex", justifyContent: "space-between" }}
      >
        <Card
          sx={{
            maxWidth: 345,
            background: "black",
            color: "white",
            "&:hover": {
              transform: "scale(1.01)",
              boxShadow: "0 0 10px rgba(255, 255, 255, 0.3)",
            },
          }}
        >
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={project1}
              alt="Fire Brigade Robot"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Fire Brigade Robot
              </Typography>
              <Typography variant="body2" color="">
                A self-operating robot which is capable of detecting fire using
                a camera via image processing techniques and then is able to
                move towards the fire to extinguish it.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card
          sx={{
            maxWidth: 345,
            background: "black",
            color: "white",
            "&:hover": {
              transform: "scale(1.01)",
              boxShadow: "0 0 10px rgba(255, 255, 255, 0.3)",
            },
          }}
        >
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={project3}
              alt="Fire Brigade Robot"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Line Following Robot
              </Typography>
              <Typography variant="body2" color="">
                Implementation of PID controller on an Arduino to make a line
                follower robot, that follows a line of the given color using
                different sensors.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card
          sx={{
            maxWidth: 345,
            background: "black",
            color: "white",
            "&:hover": {
              transform: "scale(1.01)",
              boxShadow: "0 0 10px rgba(255, 255, 255, 0.3)",
            },
          }}
        >
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={project2}
              alt="Fire Brigade Robot"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Self-Balancing Robot
              </Typography>
              <Typography variant="body2" color="">
                The robot was able to move back to its original straight
                vertical position if disturbed without falling.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
    </Box>
  );
};

export default Projects;
