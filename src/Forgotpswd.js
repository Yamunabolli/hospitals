import React from 'react'
import Card from '@mui/material/Card';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import Dashboard from './Dashboard';

export default function Forgotpswd() {
  const [email, setEmail] = React.useState("")
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const [errorMessages, setErrorMessages] = React.useState({});
  const [dirty, setDirty] = React.useState(false);
  const [input, setInput] = React.useState({
    otp: '',
    password: '',
    confirmPassword: '',
  });
  const [error, setError] = React.useState({
    username: '',
    password: '',
    confirmPassword: '',
  });
  const nav = useNavigate()
  const errors = {
    uname: "invalid username",
    email: "invalid email"
  };
  const handlechange = (e) => {
    setEmail(e.target.value)

  }

  const handlesend = (e) => {
    e.preventDefault()
    if (email == "") {
      setErrorMessages({ email: "email", message: errors.email })
    }
    else {

      setIsSubmitted(true)
    }
  }

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({
      ...prev,
      [name]: value,
    }));
    validateInput(e);
  };

  const renderErrorMessage = (email) =>
    email === errorMessages.email && (
      <div className="error">{errorMessages.message}</div>
    );

  const validateInput = (e) => {
    let { name, value } = e.target;
    setError((prev) => {
      const stateObj = { ...prev, [name]: '' };

      switch (name) {
        case 'otp':
          if (!value) {
            stateObj[name] = 'Please enter otp.';
          }
          break;

        case 'password':
          if (!value) {
            stateObj[name] = 'Please enter Password.';
          } else if (input.confirmPassword && value !== input.confirmPassword) {
            stateObj['confirmPassword'] =
              'Password and Confirm Password does not match.';
          } else {
            stateObj['confirmPassword'] = input.confirmPassword
              ? ''
              : error.confirmPassword;
          }
          break;

        case 'confirmPassword':
          if (!value) {
            stateObj[name] = 'Please enter Confirm Password.';
          } else if (input.password && value !== input.password) {
            stateObj[name] = 'Password and Confirm Password does not match.';
          }
          break;

        default:
          break;
      }

      return stateObj;
    });
  };

  const handleconfirm = () => {
if(input.password !== "" ){
    if(input.confirmPassword == input.password   ){
alert("succesful")
    }
    else{
      alert(error.confirmPassword)
    }
  }
  
else{
alert("fill the password or confirmpassword")
}
  }
  const renderForm = (
    <div className='forgotimg'>
      <Card className='forgotcard'>
        <CardContent>

          <Typography gutterBottom variant="h4" component="div">
            Forgot Password
          </Typography>
          <TextField
            required
            onBlur={() => setDirty(true)}
            id="outlined-required"
            label="Email"
            name='email'
            type="email"
            fieldName="Email"
            onChange={handlechange}
          />
          {renderErrorMessage("email")}
          <br></br>
        </CardContent>
        <Button variant='contained' size="small" onClick={handlesend}>Send</Button>
      </Card>
    </div>
  )

  function emailValidation(){
    const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if(!this.state.email || regex.test(this.state.email) === false){
        this.setState({
            error: "Email is not valid"
        });
        return false;
    }
    return true;
}
  
  return (
    <>
      {isSubmitted ?
        <div className='otpimg'>
          <Card className='otpcard'>
            <Typography gutterBottom variant="h4" component="div">
              Otp
            </Typography>

            <TextField
              required
              id="outlined-required"
              label="Otp"
              name="otp"
              type="number"
              value={input.otp}

              onChange={onInputChange}
            />
            {error.otp && <span className="err">{error.otp}</span>}

            <br></br><br></br>
            <TextField
              required
              id="outlined-required"
              label="password"
              name="password"
              value={input.password}

              onChange={onInputChange}
            />
            {error.password && <span className="err">{error.password}</span>}

            <br></br><br></br>

            <TextField
              required
              id="outlined-required"
              label="confirmpassword"
              name="confirmPassword"
              value={input.confirmPassword}

              onChange={onInputChange}
            /><br></br>
            {error.confirmPassword && (
              <span className="err">{error.confirmPassword}</span>
            )}
            <br></br><br></br>
            <Button variant='contained' size="small" onClick={handleconfirm}>Confirm</Button>

          </Card>
        </div>
        : renderForm}
    </>
  )
}
