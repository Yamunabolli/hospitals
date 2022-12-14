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
import Dashboard from './Dashboard';

export default function() {
    const [email,setEmail]=React.useState()
    const[password,setPassword]=React.useState();
    const [errorMessages, setErrorMessages] = React.useState({});
    const [isSubmitted, setIsSubmitted] = React.useState(false);
  
    const database = [
      {
        username: "admin",
        password: "pass1"
      },
      {
        username: "doctor",
        password: "pass2"
      },
      {
        username: "patient",
        password: "pass3"
      }
    ];
    const nav=useNavigate()
    const errors = {
      uname: "invalid username",
      pass: "invalid password"
    };

const handlesubmit =(event)=>{
  event.preventDefault();
  var { uname, pass } = document.forms[0];
    const userData = database.find((user) => user.username === uname.value);
    // if (userData) {
    //   if (userData.password !== pass.value) {
    //     // Invalid password
    //     setErrorMessages({ name: "pass", message: errors.pass });
    //   } else {
    //     setIsSubmitted(true);
    //   }
    // }
    if(userData){
      if(userData.password ==="pass2"){
        nav("/Doctor")

      }
else if(userData.password === "pass1"){
  nav("/Dashboard/Register")

}
else if(userData.password === "pass3"){
nav("/Patient")
}
    }
     else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };



const handlechange=(e)=>{
setEmail(e.target.value)
setPassword(e.target.value)
}
const renderErrorMessage = (name) =>

name === errorMessages.name && (
  <div className="error">{errorMessages.message}</div>
);
const renderForm = (
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
      
        <TextField
          required
          id="outlined-required"
          label="Username"
          name="uname"
          onChange={handlechange}

        />
                  {renderErrorMessage("uname")}

        <br></br>
        <TextField
          required
          id="outlined-required"
          label="Password"
        name='pass'
        onChange={handlechange}
        />
          {renderErrorMessage("pass")}

      {/* <CardActions> */}
    </Box>
        <Button variant='contained' size="small" onClick={handlesubmit}>Sign in</Button><br></br>
        <Link className='link' to={'/Register'}>Register</Link>
        {/* <Link >Registerhere</Link> */}
        <div>

        <Link className='link' to={'/Forgotpswd'}>Forgotpassword</Link>
        </div>

      {/* </CardActions> */}
    </Card>	&nbsp;	&nbsp;
    </div>
)
  return (
    <>
    
     {/* <div className="title">Sign In</div> */}
     {isSubmitted ? <Dashboard/> : renderForm}
   </>
  )
}
