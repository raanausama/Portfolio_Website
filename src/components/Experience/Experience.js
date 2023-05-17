import React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import SchoolIcon from "@mui/icons-material/School";
import { Typography } from "@mui/material";
import WorkIcon from "@mui/icons-material/Work";
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import ComputerIcon from "@mui/icons-material/Computer";
import { Work } from "@mui/icons-material";
import { yellow } from "@mui/material/colors";

const Experience = () => {
  return (
    <>
      <Timeline
        className="experience"
        position="alternate"
        sx={{ color: "whitesmoke" }}
      >
        <TimelineItem>
          <TimelineSeparator style={{ height: "120px" }}>
            <TimelineDot className="timeline_dot_header" color="secondary">
              {<WorkIcon />}
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent className="timeline_header">
            <Typography
              fontSize={20}
              textTransform={"uppercase"}
              paddingTop={1}
            >
              Experience
            </Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator style={{ height: "100px" }}>
            <TimelineDot className="timeline_dot_header" color="success">
              {<ElectricBoltIcon />}
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography fontSize={20} textTransform={"uppercase"}>
              Water And Power Development Authority(WAPDA)
            </Typography>
            <Typography fontSize={12} textTransform={"uppercase"}>
              Electrical Engineer
            </Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator style={{ height: "100px" }}>
            <TimelineDot className="timeline_dot_header" color="primary">
              {<SupportAgentIcon />}
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography fontSize={20} textTransform={"uppercase"}>
              Tribe Consulting
            </Typography>
            <Typography fontSize={12} textTransform={"uppercase"}>
              Customer Support Representative
            </Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator style={{ height: "100px" }}>
            <TimelineDot className="timeline_dot_header" color="grey">
              {<SupportAgentIcon />}
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography fontSize={20} textTransform={"uppercase"}>
              Payactiv{" "}
            </Typography>
            <Typography fontSize={12} textTransform={"uppercase"}>
              Technical support Engineer
            </Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot className="timeline_dot_header" color="warning">
              {<ComputerIcon />}
            </TimelineDot>
          </TimelineSeparator>
          <TimelineContent>
            <Typography fontSize={20} textTransform={"uppercase"}>
              Zaytrics{" "}
            </Typography>
            <Typography fontSize={12} textTransform={"uppercase"}>
              Fullstack Intern
            </Typography>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </>
  );
};

export default Experience;
