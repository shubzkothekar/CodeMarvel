import React, { useState } from 'react'
import {Grid,TextField,InputLabel,Select,MenuItem, Button} from "@mui/material"
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import "./index.css"
const SignUpForm = () => {
    const data={file:"",startupname:"",stage:"",brief:""}
    const[file,setFile]=useState("");
    const[startupname,setStartupName]=useState("");
    const[breif,setBrief]=useState("");
    const[stage,setStage]=useState("")

    const fileBrowseHandler = (event) => {
        let value = URL.createObjectURL(event.target.files[0]);
        setFile(value);
      };

  return (
    <div className="startupform">
    <div className='form'>
    <Grid item xs={12} md={8} >
    
    <TextField
      
      variant="outlined"
      fullWidth
      type="file"
      placeholder='Company Logo'
      style={{ height: "5px " }}
      required={true}
      onChange={fileBrowseHandler}
      
    />
  </Grid>
  <br></br>
  <br></br>
 
  <Grid item xs={12} md={8} >
    <TextField
      label="Startup Name"
      variant="outlined"
      fullWidth
      type="name"
      style={{ height: "5px " }}
      required={true}
      onChange={(e)=>setStartupName(e.target.value)}
      
    />
  </Grid>
  <br></br>
  <br></br>
  
  <FormLabel id="demo-radio-buttons-group-label">Funded/Bootstraped?</FormLabel>

  <RadioGroup
       row
       
        name="radio-buttons-group">
        <FormControlLabel value="Bootstrapped" control={<Radio />} label="Bootstrapped" />
        <FormControlLabel value="Funded" control={<Radio />} label="Funded" />
      
      </RadioGroup>

      <br></br>
      <FormControl fullWidth>
       
        <InputLabel id="demo-simple-select-label">
          Stage
        </InputLabel>
        <Select
          id="margin-normal"
          margin="normal"
          label="Stage"
          required={true}
          onChange={(e)=>setStage(e.target.value)}
        
        >
          <MenuItem value="Ideation">Ideation</MenuItem>
          <MenuItem value="Validation">Validation</MenuItem>
          <MenuItem value="Early">Early</MenuItem>
          <MenuItem value="Traction">Traction</MenuItem>
          
        </Select>
      </FormControl>
      <br></br>
      <p></p>
      <div id="textarea">
      <textarea className="text"  placeholder="Brief"
      label="Brief"
         >
      
</textarea>
</div>
<Button onClick={()=>window.location.href="/contact"}>Next</Button>
    </div>
    <div className='img'>
    <img style={{borderRadius:"2%",width:"100%"}} src="https://images.unsplash.com/photo-1589561253898-768105ca91a8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c3RhcnR1cHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"/>
    </div>

    </div>
  )
}

export default SignUpForm