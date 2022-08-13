import React, { useState } from "react";
import {
  Grid,
  TextField,
  InputLabel,
  Select,
  MenuItem,
  Button,
} from "@mui/material";


const About = () => {
  const data = { file: "", startupname: "", stage: "", brief: "" };
  const [file, setFile] = useState("");
  const [startupname, setStartupName] = useState("");
  const [breif, setBrief] = useState("");
  const [stage, setStage] = useState("");

  const fileBrowseHandler = (event) => {
    let value = URL.createObjectURL(event.target.files[0]);
    setFile(value);
  };

  return (
    <div className="startupform">
      <div className="form">
        <TextField
          variant="outlined"
          fullWidth
          type="file"
          placeholder="Company Logo"
          style={{ height: "5px " }}
          required={true}
          onChange={fileBrowseHandler}
        />

        <br></br>
        <br></br>
        

        <TextField
          label="Startup Name"
          variant="outlined"
          fullWidth
          type="name"
          style={{ height: "5px " }}
          required={true}
          onChange={(e) => setStartupName(e.target.value)}
        />

        <br></br>

        <p></p>
        <div id="textarea">
          <textarea
            className="text"
            placeholder="Brief"
            label="Brief"
            style={{ borderRadius: "1%" }}
          ></textarea>
        </div>
        <Button
          onClick={() => (window.location.href = "/contact")}
          style={{ background: "orange" }}
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default About;
