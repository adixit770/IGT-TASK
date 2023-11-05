import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

export default function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div className="container " style={{marginTop:"177px"}}>
        <div className="d-flex" style={{justifyContent: "center"}}>
        <div className="headingAccrodion" style={{marginBottom:"92px"}}>
            <h4>Frequent Question</h4>
            <h2>Do you have any question</h2>
        </div>
        </div>
        <div>
      <div className="mb-4">
        <Accordion
          className="Accordion"
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
        >
          <AccordionSummary
            aria-controls="panel1d-content"
            id="panel1d-header"
            expandIcon={
              expanded === "panel1" ?<RemoveCircleIcon />: <AddCircleIcon />
            }
          >
            <Typography className="textAccordion">
              How to contact with riders emergency ?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className="textHeadingAccordion">
              An FAQ is a list of frequently asked questions (FAQs) and answers
              on a particular topic (also known as Questions and Answers [Q&A]
              or Frequently Asked Questions). The format is often used in
              articles, websites, email lists, and online forums where common
              questions tend to recur, for example through posts or queries by
              new users related to common knowledge gaps. The purpose of an FAQ
              is generally provide information.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
      <div className="mb-4">
        <Accordion
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
        >
          <AccordionSummary
            aria-controls="panel2d-content"
            id="panel2d-header"
            expandIcon={
              expanded === "panel2" ?<RemoveCircleIcon />: <AddCircleIcon />
            }
          >
            <Typography className="textAccordion">
              App installation failed, how to update system information?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className="textHeadingAccordion">
              An FAQ is a list of frequently asked questions (FAQs) and answers
              on a particular topic (also known as Questions and Answers [Q&A]
              or Frequently Asked Questions). The format is often used in
              articles, websites, email lists, and online forums where common
              questions tend to recur, for example through posts or queries by
              new users related to common knowledge gaps. The purpose of an FAQ
              is generally provide information.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
      <div className="mb-4">
        <Accordion
          expanded={expanded === "panel3"}
          onChange={handleChange("panel3")}
        >
          <AccordionSummary
            aria-controls="panel3d-content"
            id="panel3d-header"
            expandIcon={
              expanded === "panel3" ?<RemoveCircleIcon />: <AddCircleIcon />
            }
          >
            <Typography className="textAccordion">
              Website reponse taking time, how to improve?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className="textHeadingAccordion">
              An FAQ is a list of frequently asked questions (FAQs) and answers
              on a particular topic (also known as Questions and Answers [Q&A]
              or Frequently Asked Questions). The format is often used in
              articles, websites, email lists, and online forums where common
              questions tend to recur, for example through posts or queries by
              new users related to common knowledge gaps. The purpose of an FAQ
              is generally provide information.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
      <div className="mb-4">
        <Accordion
          expanded={expanded === "panel4"}
          onChange={handleChange("panel4")}
        >
          <AccordionSummary
            aria-controls="panel4d-content"
            id="panel4d-header"
            expandIcon={
              expanded === "panel4" ?<RemoveCircleIcon />: <AddCircleIcon />
            }
          >
            <Typography className="textAccordion">
              New update fixed all bug and issues
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className="textHeadingAccordion">
              An FAQ is a list of frequently asked questions (FAQs) and answers
              on a particular topic (also known as Questions and Answers [Q&A]
              or Frequently Asked Questions). The format is often used in
              articles, websites, email lists, and online forums where common
              questions tend to recur, for example through posts or queries by
              new users related to common knowledge gaps. The purpose of an FAQ
              is generally provide information.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
      </div>
    </div>
  );
}
