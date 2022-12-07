import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Link, useNavigate } from 'react-router-dom';

export default function() {
    const [email,setEmail]=React.useState("")
    const[password,setPassword]=React.useState("");

    const nav=useNavigate()
const handlesubmit =()=>{
nav("/Dashboard")
}
const handleregister=()=>{
    nav("/Register")
}

const handlechange=(e)=>{
setEmail(e.target.value)
setPassword(e.target.value)
}
  return (
    <div className='img'>
         <Card className='loginCard'>
        
      <CardContent>
        <Typography variant="h6" color="text.secondary">
"So glad for your safe return"
    
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          Login Page
          </Typography>
      </CardContent>
     
      <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      
      <div>
        <TextField
          required
          id="outlined-required"
          label="Username"
          name="email"
          onChange={handlechange}
        />
        <br></br>
        </div>
        <TextField
          required
          id="outlined-required"
          label="Password"
        name='password'
        onChange={handlechange}
        />
    </Box>
    
      {/* <CardActions> */}
        <Button variant='contained' size="small" onClick={handlesubmit}>Sign in</Button><br></br>
        {/* <Link >Registerhere</Link> */}
        <Link className='link' onClick={handleregister}>Registerhere</Link>
      {/* </CardActions> */}
    </Card>	&nbsp;	&nbsp;
    </div>
  )
}
